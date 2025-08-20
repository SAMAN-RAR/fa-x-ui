"use client";

import { useState } from "react";
import { IKImage } from "imagekitio-next";

interface ImageProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
  tr?: boolean;
  sensitive?: boolean;
}

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function Image(props: ImageProps) {
  const { src, alt, className, height, width, tr, sensitive } = props;
  const [isBlur, setIsBlur] = useState(sensitive);

  if (tr === true) {
    return (
      <div className={isBlur ? "blur-lg" : ""} onClick={() => setIsBlur(false)}>
        <IKImage
          transformation={[
            {
              width: width,
              height: height,
            },
          ]}
          urlEndpoint={urlEndpoint}
          path={src}
          alt={alt}
          className={className}
        />
      </div>
    );
  }

  return (
    <div className={isBlur ? "blur-lg" : ""} onClick={() => setIsBlur(false)}>
      <IKImage
        width={width}
        height={height}
        urlEndpoint={urlEndpoint}
        path={src}
        alt={alt}
        className={className}
      />
    </div>
  );
}
