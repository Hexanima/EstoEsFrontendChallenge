import { ReactNode } from "react";

export default async function ProductDetailLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="w-full flex">
      <nav className="w-1/6 bg-white text-black flex justify-center items-center">{id}</nav>
      <div className="w-5/6">{children}</div>
    </div>
  );
}
