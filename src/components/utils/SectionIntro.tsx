import clsx from "clsx";
import { Container, type ContainerProps } from "./Container";

export interface SectionIntroProps extends Omit<ContainerProps, "children"> {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  smaller?: boolean;
  invert?: boolean;
  className?: string;
}

export function SectionIntro(props: SectionIntroProps) {
  const { eyebrow, title, children, smaller, invert, ...rest } = props;
  return (
    <Container {...rest}>
      <h2>
        {eyebrow && (
          <>
            <span
              className={clsx(
                "mb-6 block font-display text-base font-semibold",
                invert ? "text-white" : "text-neutral-950"
              )}
            >
              {eyebrow}
            </span>
            <span className="sr-only"> - </span>
          </>
        )}
        <span
          className={clsx(
            "block font-display tracking-tight [text-wrap:balance]",
            smaller
              ? "text-2xl font-semibold"
              : "text-4xl font-medium sm:text-5xl",
            invert ? "text-white" : "text-neutral-950"
          )}
        >
          {title}
        </span>
      </h2>
      {children && (
        <div
          className={clsx(
            "mt-6 text-xl",
            invert ? "text-neutral-300" : "text-neutral-600"
          )}
        >
          {children}
        </div>
      )}
    </Container>
  );
}
