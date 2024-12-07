import { UUID } from "crypto";

export interface Project {
  id: UUID;
  title: string;
  manager: string;
  assigned: string;
  status: "enabled" | "disabled" | "finished"
  createdAt: Date;
}
