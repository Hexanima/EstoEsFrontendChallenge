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
    <div className="relative">
      <button onClick={handleOpen} className="font-bold">
        ...
      </button>
      {isMenuOpen && (
        <div className="absolute -right-3 w-44 opacity-0 animate-spawn">
          <div
            className="relative rounded shadow-md bg-white flex flex-col text-black"
            onBlur={handleClose}
            onMouseLeave={handleClose}
          >
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
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-white border-b border-neutral-300 py-2 px-4 flex flex-col gap-1 font-normal">
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
        <Options id={project.id} />
      </div>
      <div className="flex items-center gap-2">
        <img className="h-6 aspect-square bg-red-100 rounded-full" />
        <p className="text-sm !text-[12px] text-[#000000A6]">
          {project.author}
        </p>
      </div>
    </article>
  );
}
