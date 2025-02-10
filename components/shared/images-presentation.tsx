"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

interface ImagesPresentationProps {
  className?: string;
  images: string[];
}

export const ImagesPresentation: React.FC<ImagesPresentationProps> = ({
  className,
  images,
}) => {
  const [imagesCards, setImagesCards] = useState(images);

  const handleChangeImage = (idx: number) => {
    if (idx === 0) return;

    setImagesCards((prev) => {
      const updatedImages = [...prev];
      const [selectedImage] = updatedImages.splice(idx, 1);
      return [selectedImage, ...updatedImages];
    });
  };

  return (
    <div className={cn("flex items-center gap-4 h-[520px]", className)}>
      <div className="flex flex-col w-1/6 gap-2">
        {imagesCards.slice(1).map((image, index) => (
          <Image
            className="w-full"
            key={image}
            src={image}
            alt=""
            width={300}
            height={300}
            onClick={() => handleChangeImage(index + 1)}
          />
        ))}
      </div>
      <div className="w-5/6 flex items-center justify-center">
        <Image
          src={imagesCards[0]}
          alt=""
          width={300}
          height={300}
          className="flex-1"
        />
      </div>
    </div>
  );
};
