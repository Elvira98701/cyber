import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import React from "react";

interface ProductMemoriesProps {
  memoryValue: string;
  memories: string[];
  handleChangeMemory: (index: number) => void;
  className?: string;
}

export const ProductMemories: React.FC<ProductMemoriesProps> = ({
  memoryValue,
  memories,
  handleChangeMemory,
  className,
}) => {
  return (
    <ul className={cn("flex flex-wrap gap-4", className)}>
      {memories.map((memory, index) => (
        <li key={memory}>
          <Button
            size="lg"
            variant="outline"
            className={cn("text-foreground", {
              "bg-primary text-background": memoryValue === memory,
            })}
            onClick={() => handleChangeMemory(index)}
          >
            {memory}
          </Button>
        </li>
      ))}
    </ul>
  );
};
