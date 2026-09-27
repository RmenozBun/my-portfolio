import { ProjectsClient } from "@/components/ProjectsClient";
import { getProjects } from "@/lib/github";

export async function Projects() {
  const projects = await getProjects();
  return <ProjectsClient projects={projects} />;
}
