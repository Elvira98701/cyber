import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-primary-foreground shadow hover-hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover-hover:bg-destructive/90",
        outline:
          "border border-input text-background bg-transparent shadow-sm hover-hover:bg-accent hover-hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover-hover:bg-secondary/80",
        ghost: "hover:bg-accent hover-hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover-hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      loading = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading}
        {...props}
      >
        {children}
        {loading && (
          <span className="absolute top-0 left-0 size-full inline-flex justify-center items-center bg-primary rounded-md ">
            <Loader className="w-5 h-5 animate-spin text-background" />
          </span>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
