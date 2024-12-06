import { useState } from "react";

function ImageComponent({ src, style, width, height }) {
  const [srcImage, setSrcImage] = useState(`/images/500x800.svg`);
  const [isLoading, setIsLoading] = useState(false);

  const imgLoading = new Image();
  imgLoading.src = src;
  imgLoading.onload = () => {
    setSrcImage(src);
    setIsLoading(false);
  };

  return (
    <div>
      <img
        src={srcImage}
        className={`${style} ${isLoading && "blur"}`}
        width={width}
        height={height}
      />
    </div>
  );
}
export default ImageComponent;
