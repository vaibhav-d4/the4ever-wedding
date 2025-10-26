import React from 'react';
import { useLazyImage } from '@utils/hooks/useLazyImage';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  className,
  ...props
}) => {
  const loadedSrc = useLazyImage(src);

  return (
    <img
      src={loadedSrc || placeholder}
      alt={alt}
      className={className}
      loading='lazy'
      {...props}
    />
  );
};

export default LazyImage;
