import type { FC } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";

interface ProductMemoriesProps {
  memoryValue: string;
  memories: string[];
  onChangeMemory: (index: number) => void;
  className?: string;
}

export const ProductMemories: FC<ProductMemoriesProps> = ({
  memoryValue,
  memories,
  onChangeMemory,
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
            onClick={() => onChangeMemory(index)}
            type="button"
          >
            {memory}
          </Button>
        </li>
      ))}
    </ul>
  );
};
