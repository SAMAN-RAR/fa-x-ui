"use client";

import { IKVideo } from "imagekitio-next";
import { useState } from "react";

interface VideoPropsType {
  src: string;
  className?: string;
  sensitive?: boolean;
}

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const video = (props: VideoPropsType) => {
  const { src, className, sensitive } = props;
  const [isBlur, setIsBlur] = useState(sensitive);

  return (
    <div className={isBlur ? "blur-lg" : ""} onClick={() => setIsBlur(false)}>
      <IKVideo
        className={className}
        path={src}
        urlEndpoint={urlEndpoint}
        controls
      />
    </div>
  );
};
export default video;
