import clsx from "clsx";

interface AnchorProps {
  invert?: boolean;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function Anchor(props: AnchorProps) {
  const { invert = false, className, children, href, ...rest } = props;
  const joined = clsx(
    className,
    "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition text-center",
    invert
      ? "bg-white text-neutral-950 hover:bg-neutral-200"
      : "bg-neutral-950 text-white hover:bg-neutral-800"
  );

  let inner = <span className="relative top-px w-full">{children}</span>;

  return (
    <a className={joined} href={href} {...rest}>
      {inner}
    </a>
  );
}
export default Anchor;
