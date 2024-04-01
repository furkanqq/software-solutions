import Image from 'next/image';

interface IProps {
  loading?: undefined | 'eager' | 'lazy';
  unoptimized?: undefined | boolean;
  priority?: undefined | boolean;
  className?: undefined | string;
  quality?: undefined | number;
  height?: undefined | number;
  fill?: undefined | boolean;
  width?: undefined | number;
  src: string;
  alt: string;
}

export const XImage: React.FC<IProps> = ({
  unoptimized,
  className,
  priority,
  quality,
  loading,
  height,
  width,
  fill,
  src,
  alt
}) => {
  return (
    <Image
      unoptimized={unoptimized}
      className={className}
      priority={priority}
      quality={quality}
      loading={loading}
      height={height}
      width={width}
      fill={fill}
      src={src}
      alt={alt}
    />
  );
};
