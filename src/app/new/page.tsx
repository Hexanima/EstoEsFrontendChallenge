"use client";
import { Button } from "@/components/button";
import { Input } from "@/components/form/input";
import { ProjectForm } from "@/components/form/project";
import { Select } from "@/components/form/select";
import { TitleContainer } from "@/components/tile-container";
import { Project } from "@/utils/types/project";
import Link from "next/link";
import { createContext } from "react";

export default function NewProject() {
  function handleSubmit(proj: Project) {
    console.log(proj);
  }
  return (
    <main className="flex flex-col grow gap-3">
      <TitleContainer className="gap-2 items-center">
        <Link
          href={"/"}
          className="text-[#000000A6] text-xs font-inter flex items-center gap-1"
        >
          <p>{"<"}</p>
          <p>Back</p>
        </Link>
        <h1 className="text-base font-semibold">Add project</h1>
      </TitleContainer>
      <ProjectForm buttonText="Create project" onSubmit={handleSubmit} />
    </main>
  );
}
