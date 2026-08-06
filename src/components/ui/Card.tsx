import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Card({
  children,
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      {children}
    </div>
  );
}