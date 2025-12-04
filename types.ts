import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  price: string;
  isRental: boolean;
  gallery?: string[]; // New field for multiple images
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
}

export interface ToolRecommendation {
  toolName: string;
  reason: string;
  estimatedDailyRate: string;
}

export interface QuoteRequest {
  projectDescription: string;
}