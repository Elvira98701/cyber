"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ImagesPresentationProps {
  className?: string;
  images: string[];
}

export const ImagesPresentation: React.FC<ImagesPresentationProps> = ({
  className,
  images,
}) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className={cn("flex gap-4", className)}>
      <div className="flex flex-col gap-2">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className={`w-20 h-20 object-cover cursor-pointer rounded-lg border ${
              selectedImage === img ? "border-primary" : "border-muted"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(img)}
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
