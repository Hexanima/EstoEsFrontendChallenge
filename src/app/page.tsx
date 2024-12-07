"use client";

import { Button } from "@/components/button";
import { ProjectCard } from "@/components/project/card";
import { TitleContainer } from "@/components/tile-container";
import { Project } from "@/utils/types/project";
import { useRouter } from "next/navigation";

export default function Home() {
  const project: Project = {
    id: "a-b-c-d-e",
    title: "Project Title",
    manager: "Walt Cosani",
    assigned: "Ignacio Truffa",
    status: "enabled",
    createdAt: new Date("09/09/2020 10:30 am"),
  };

  const router = useRouter();

  return (
    <main className="flex flex-col gap-3 md:gap-8">
      <TitleContainer className="justify-between">
        <h1 className="text-base md:text-xl font-semibold">My Projects</h1>
        <Button className="text-xs" onClick={() => router.push("/new")}>
          + Add project
        </Button>
      </TitleContainer>
      <section className="flex flex-col w-full md:px-12">
        <div className="hidden md:grid grid-cols-[4fr_3fr_3fr_1fr_1fr] border-b border-neutral-300 bg-[#00000005] px-6 py-5 justify-start rounded-t">
          <p className="text-sm font-semibold text-[#000000D9]">Project info</p>
          <p className="text-sm font-semibold text-[#000000D9]">
            Project Manager
          </p>
          <p className="text-sm font-semibold text-[#000000D9]">Assigned to</p>
          <p className="text-sm font-semibold text-[#000000D9]">Status</p>
          <p className="text-sm font-semibold text-[#000000D9] text-center">Action</p>
        </div>
        <ProjectCard project={project} />
        <ProjectCard project={project} />
        <ProjectCard project={project} />
      </section>
    </main>
  );
}
