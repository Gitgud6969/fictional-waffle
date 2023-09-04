import clsx from "clsx";
import { Border } from "./Border";

export interface BlockquoteProps {
  className?: string;
  children?: React.ReactNode;
  author?: {
    name?: string;
    role?: string;
  };
}

export function Blockquote(props: BlockquoteProps) {
  const { className, children, author } = props;
  return (
    <Border position="left" className={clsx("pl-8", className)}>
      <figure className="text-sm">
        <blockquote className="text-neutral-600 [&>*]:relative [&>:first-child]:before:absolute [&>:first-child]:before:right-full [&>:first-child]:before:content-['“'] [&>:last-child]:after:content-['”']">
          {typeof children === "string" ? <p>{children}</p> : children}
        </blockquote>
        <figcaption className="mt-6 font-semibold text-neutral-950">
          {author?.name}, {author?.role}
        </figcaption>
      </figure>
    </Border>
  );
}
