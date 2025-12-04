import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

/**
 * Hook to fetch a dynamic image from Supabase 'site_images' table.
 * Falls back to the provided defaultUrl if the DB is offline or image is missing.
 */
export const useSiteImage = (id: string, defaultUrl: string) => {
  const [imageUrl, setImageUrl] = useState(defaultUrl);

  useEffect(() => {
    const fetchImage = async () => {
      if (!supabase) return;

      try {
        const { data, error } = await supabase
          .from('site_images')
          .select('image_url')
          .eq('id', id)
          .single();

        if (data && data.image_url) {
          setImageUrl(data.image_url);
        } else if (error) {
          // Silent fail to default
          // console.debug(`Using default for ${id}:`, error.message);
        }
      } catch (err) {
        // console.debug(`Connection error for ${id}, using default.`);
      }
    };

    fetchImage();
  }, [id]); // We don't depend on defaultUrl to prevent flicker if it changes

  return imageUrl;
};
