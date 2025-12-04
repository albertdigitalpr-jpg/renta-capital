import { GoogleGenAI, Type } from "@google/genai";
import { ToolRecommendation } from "../types";

// Safety check to prevent accessing properties of undefined if process is not available
const getApiKey = () => {
  try {
    if (typeof process !== 'undefined' && process.env) {
      return process.env.API_KEY;
    }
  } catch (e) {
    return undefined;
  }
  return undefined;
};

const apiKey = getApiKey();
const ai = apiKey ? new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY});

export const getToolRecommendations = async (projectDescription: string): Promise<ToolRecommendation[]> => {
  if (!ai || !apiKey) {
    console.warn("API Key not found, returning mock data.");
    return [
      { toolName: "Demo Hammer Drill", reason: "API Key missing", estimatedDailyRate: "$50" }
    ];
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `User project: ${projectDescription}. Recommend 3-4 specific construction tools or heavy machinery needed for this project. Keep it concise.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              toolName: { type: Type.STRING },
              reason: { type: Type.STRING },
              estimatedDailyRate: { type: Type.STRING, description: "Estimated daily rental rate in USD (e.g. $45/day)" }
            },
            required: ["toolName", "reason", "estimatedDailyRate"]
          }
        },
        systemInstruction: "You are an expert construction equipment consultant. Analyze the user's project and recommend the best professional tools or machinery to rent.",
      }
    });

    const text = response.text;
    if (!text) return [];
    return JSON.parse(text) as ToolRecommendation[];
  } catch (error) {
    console.error("Gemini API Error:", error);
    return [];
  }
};
