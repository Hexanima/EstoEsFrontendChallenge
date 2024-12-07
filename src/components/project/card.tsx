import { Project } from "@/utils/types/project";
import { UUID } from "crypto";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Options({ id }: { id: UUID }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleOpen() {
    setIsMenuOpen(true);
  }

  function handleClose() {
    setIsMenuOpen(false);
  }

  return (
    <div
      className="absolute md:static right-4 top-3.5 place-self-center"
      onBlur={handleClose}
      onMouseLeave={handleClose}
    >
      <div className="relative">
        <button onClick={handleOpen} className="font-bold">
          ...
        </button>
        {isMenuOpen && (
          <div className="absolute -right-3 w-44 opacity-0 animate-spawn z-10">
            <div className="relative rounded shadow-md bg-white flex flex-col text-black">
              <button
                onClick={() => router.push(`/${id}`)}
                className="border-b-neutral-200 border-b flex px-4 py-2 items-center gap-3 text-xs "
              >
                Editar
              </button>
              <button className="flex px-4 py-2 items-center gap-3 text-xs ">
                Eliminar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-white relative border-b border-neutral-300 py-2 px-4 md:px-6 md:py-2.5 flex flex-col md:grid grid-cols-[4fr_3fr_3fr_1fr_1fr] md:justify-center gap-1 font-normal">
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center">
          <h2 className="text-sm  text-[#000000a6]">{project.title}</h2>
          <p className="text-xs !text-[10px]  text-[#00000073]">
            Creation date:{" "}
            {project.createdAt.toLocaleTimeString(undefined, {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour12: true,
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-2">
        <img className="h-6 aspect-square bg-red-100 rounded-full" />
        <p className="text-sm !text-[12px] text-[#000000A6]">
          {project.manager}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <img className="h-6 aspect-square bg-red-100 rounded-full" />
        <p className="text-sm !text-[12px] text-[#000000A6]">
          {project.assigned}
        </p>
      </div>
      <div className="hidden md:flex justify-start items-center">
        <p className="text-sm !text-[12px] flex items-center justify-center rounded px-2 text-[#595959] bg-[#F5F5F5] border border-[#D9D9D9]">
          {project.status}
        </p>
      </div>
      <Options id={project.id} />
    </article>
  );
}
