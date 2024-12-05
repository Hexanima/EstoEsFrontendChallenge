"use client";

import { ReactNode } from "react";

export function TitleContainer({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`min-h-10 font-inter flex items-center bg-white border-b-2 border-neutral-300 px-4 ${className}`}
    >
      {children}
    </div>
  );
}
