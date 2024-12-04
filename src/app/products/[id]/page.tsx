export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div className="w-full h-full flex justify-center items-center">
      PRODUCTO: {id}
    </div>
  );
}
