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
    author: "Ignacio Truffa",
    createdAt: new Date("09/09/2020 10:30 am"),
  };

  const router = useRouter()

  return (
    <main className="flex flex-col gap-3">
      <TitleContainer className="justify-between">
        <h1 className="text-base font-semibold">My Projects</h1>
        <Button className="text-xs" onClick={() => router.push("/new")}>
          + Add project
        </Button>
      </TitleContainer>
      <section>
        <ProjectCard project={project} />
        <ProjectCard project={project} />
        <ProjectCard project={project} />
      </section>
    </main>
  );
}
