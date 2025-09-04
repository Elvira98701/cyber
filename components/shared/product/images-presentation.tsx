"use client";

import type { FC } from "react";
import { useState } from "react";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface ImagesPresentationProps {
  images: string[];
  className?: string;
}

export const ImagesPresentation: FC<ImagesPresentationProps> = ({
  images,
  className,
}) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className={cn("flex gap-4", className)}>
      <div className="flex flex-col gap-2">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`w-20 h-20 object-cover cursor-pointer rounded-lg border ${
              selectedImage === image ? "border-primary" : "border-muted"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      <motion.div
        key={selectedImage}
        className="w-full h-[520px] overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={selectedImage}
          alt="Selected"
          className="w-full h-full object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
};
