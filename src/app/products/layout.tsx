import { ReactNode } from "react";

export default async function ProductsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col grow">
      <header className="p-4 bg-gray-500 flex justify-center items-center">ANIDAMIENTO</header>
      <div className="grow flex">{children}</div>
    </div>
  );
}
