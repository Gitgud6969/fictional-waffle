import { Border } from "./Border";

export interface StatListProps extends React.HTMLAttributes<HTMLDListElement> {
  className?: string;
}

export function StatList(props: StatListProps) {
  const { className, children, ...rest } = props;
  return (
    <dl
      className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none"
      {...rest}
    >
      {children}
    </dl>
  );
}

export interface StatListItemProps {
  label: string;
  value: string;
}

export function StatListItem(props: StatListItemProps) {
  const { label, value } = props;
  return (
    <Border position="left" className="flex flex-col-reverse pl-8">
      <dt className="mt-2 text-base text-neutral-600">{label}</dt>
      <dd className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
        {value}
      </dd>
    </Border>
  );
}
