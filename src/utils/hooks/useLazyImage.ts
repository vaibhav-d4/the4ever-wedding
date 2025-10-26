import { useState, useEffect } from 'react';

export const useLazyImage = (src: string) => {
  const [sourceLoaded, setSourceLoaded] = useState<string>('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setSourceLoaded(src);
    };
  }, [src]);

  return sourceLoaded;
};