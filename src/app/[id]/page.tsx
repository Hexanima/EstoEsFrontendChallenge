"use client";

import { ProjectForm } from "@/components/form/project";
import { TitleContainer } from "@/components/tile-container";
import { Project } from "@/utils/types/project";
import Link from "next/link";
import React from "react";

export default function EditProject({ params }: { params: { id: string } }) {
  function handleSubmit(proj: Project) {
    console.log(proj);
  }
  return (
    <main className="flex flex-col gap-3 items-center">
      <TitleContainer className="gap-2 items-center self-stretch">
        <Link
          href={"/"}
          className="text-[#000000A6] text-xs font-inter flex items-center gap-1"
        >
          <p>{"<"}</p>
          <p>Back</p>
        </Link>
        <h1 className="text-base md:text-2xl font-semibold">Edit project</h1>
      </TitleContainer>
      <ProjectForm buttonText="Save changes" onSubmit={handleSubmit} />
    </main>
  );
}
