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

const FormContext = createContext({});

export function useForm() {
    return useContext(FormContext)
}

export function ProjectForm({
  buttonText,
  onSubmit,
  defaultValue,
}: ProjectFormProps) {
  const [result, setResult] = useState<Partial<Project>>({});
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit(result as Project);
  }
  return (
    <FormContext.Provider value={{ result }}>
      <form
        className="bg-white flex flex-col px-4 py-8 mb-10 gap-4"
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
