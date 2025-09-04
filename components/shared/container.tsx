import type { FC, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("max-w-7xl px-4 mx-auto", className)}>{children}</div>
  );
};
