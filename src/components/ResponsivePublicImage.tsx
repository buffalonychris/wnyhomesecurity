import type { ImgHTMLAttributes } from 'react';

type ResponsivePublicImageProps = {
  srcBase: string;
  alt: string;
  className?: string;
  width?: ImgHTMLAttributes<HTMLImageElement>['width'];
  height?: ImgHTMLAttributes<HTMLImageElement>['height'];
  priority?: boolean;
};

const ResponsivePublicImage = ({
  srcBase,
  alt,
  className,
  width,
  height,
  priority = false,
}: ResponsivePublicImageProps) => {
  const loading = priority ? 'eager' : 'lazy';
  const pictureClassName = 'responsive-public-image';
  const imageClassName = ['responsive-public-image__img', className].filter(Boolean).join(' ');

  return (
    <picture className={pictureClassName}>
      <source type="image/webp" srcSet={`${srcBase}.webp`} />
      <img
        src={`${srcBase}.png`}
        alt={alt}
        className={imageClassName}
        loading={loading}
        decoding="async"
        width={width}
        height={height}
      />
    </picture>
  );
};

export default ResponsivePublicImage;
