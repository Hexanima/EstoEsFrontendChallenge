import { ReactNode } from "react";

export function Button({
  children,
  className,
  onClick,
}: {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded flex items-center text-white justify-center gap-2 bg-primary ${className}`}
    >
      {children}
    </button>
  );
}
