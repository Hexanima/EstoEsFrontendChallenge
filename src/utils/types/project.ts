import { UUID } from "crypto";

export interface Project {
  id: UUID;
  title: string;
  author: string;
  createdAt: Date;
}
