import clsx from "clsx";
import { forwardRef, type ElementRef } from "react";

interface ButtonProps {
  invert?: boolean;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button = forwardRef<ElementRef<"button">, ButtonProps>(
  (props, ref) => {
    const { invert = false, className, children, ...rest } = props;
    const joined = clsx(
      className,
      "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition",
      invert
        ? "bg-white text-neutral-950 hover:bg-neutral-200"
        : "bg-neutral-950 text-white hover:bg-neutral-800"
    );

    let inner = <span className="relative top-px">{children}</span>;

    return (
      <button className={joined} ref={ref} {...rest}>
        {inner}
      </button>
    );
  }
);
