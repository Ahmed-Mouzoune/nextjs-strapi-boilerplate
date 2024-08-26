import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const headlineVariants = cva("text-primary-700 scroll-m-20 text-xl font-bold", {
  variants: {
    variant: {
      h1: "text-4xl font-bold",
      h2: "text-3xl font-semibold",
      h3: "text-2xl font-medium",
      h4: "text-xl font-medium",
      h5: "text-lg font-medium",
      h6: "text-base font-medium",
      p: "text-base font-medium",
    },
  },
  defaultVariants: {
    variant: "h2",
  },
});

export interface HeadlineProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headlineVariants> {
  asChild?: boolean;
}

const Headline = React.forwardRef<HTMLHeadingElement, HeadlineProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = (asChild ? Slot : variant) ?? "h2";

    return (
      <Comp
        className={cn(headlineVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Headline.displayName = "Headline";

export { Headline, headlineVariants };
