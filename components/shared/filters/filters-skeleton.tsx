import { Skeleton } from "@/components/ui";
import React from "react";

interface FiltersSkeletonProps {
  className?: string;
}

export const FiltersSkeleton: React.FC<FiltersSkeletonProps> = ({
  className,
}) => {
  return (
    <div className={className}>
      <Skeleton className="w-14 h-5 mb-4 rounded-md" />
      <div className="flex gap-3">
        <Skeleton className="flex-1 h-9 mb-4 rounded-md" />
        <Skeleton className="flex-1 h-9 mb-4 rounded-md" />
      </div>
      <Skeleton className="w-full h-6 mb-12 rounded-md" />
      {Array.from({ length: 10 }, (_, index) => (
        <Skeleton
          key={index}
          className="h-6 w-full mb-4 rounded-[8px] bg-primary"
        />
      ))}
    </div>
  );
};
