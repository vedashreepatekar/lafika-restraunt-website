import { ImgHTMLAttributes, useState, useEffect } from "react";

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  fallbackSrc?: string;
  className?: string;
  loading?: "lazy" | "eager";
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc = "/images/logo/image-placeholder.svg",
  className,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
