"use client";
import { FormEvent, createContext, useContext, useState } from "react";
import { Button } from "../button";
import { Input } from "./input";
import { Select } from "./select";
import { Project } from "@/utils/types/project";

interface ProjectFormProps {
  buttonText: string;
  onSubmit: (project: Project) => void;
  defaultValue?: Project;
}

interface ProjectFormService {
  updateField: (key: string, value: unknown) => void;
}

const FormContext = createContext<ProjectFormService>({} as ProjectFormService);

export function useControls(name: string) {
  const { updateField: update } = useContext(FormContext);

  function updateField(value: unknown) {
    update(name, value);
  }

  return { updateField };
}

export function ProjectForm({
  buttonText,
  onSubmit,
  defaultValue,
}: ProjectFormProps) {
  const [result, setResult] = useState<Partial<Project>>(
    defaultValue ? defaultValue : {}
  );

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit(result as Project);
  }

  function updateField(key: string, value: unknown) {
    setResult({ ...result, [key]: value });
  }

  const contextValues: ProjectFormService = { updateField };

  return (
    <FormContext.Provider value={contextValues}>
      <form
        className="bg-white w-full flex flex-col px-4 py-8 md:px-10 md:py-8 max-w-2xl mb-10 gap-4"
        onSubmit={handleSubmit}
      >
        <Input name="title" label="Project name" defaultValue="Super texto" />
        <Input
          name="description"
          label="Description"
          defaultValue="Super texto"
        />
        <Select
          name="managerId"
          label="Project manager"
          defaultValue="No"
          options={[
            { value: "Si", text: "Seleccionar" },
            { value: "No", text: "Cancelar" },
          ]}
        />
        <Select
          name="assignedId"
          label="Assigned to"
          defaultValue="No"
          options={[
            { value: "Si", text: "Seleccionar" },
            { value: "No", text: "Cancelar" },
          ]}
        />
        <Select
          label="Status"
          name="status"
          defaultValue="No"
          options={[
            { value: "Si", text: "Seleccionar" },
            { value: "No", text: "Cancelar" },
          ]}
        />
        <Button className="px-4 self-start">{buttonText}</Button>
      </form>
    </FormContext.Provider>
  );
}
