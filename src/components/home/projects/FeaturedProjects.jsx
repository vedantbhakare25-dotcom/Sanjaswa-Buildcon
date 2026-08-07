import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Architectural Residence",
    description: "A modern design project built for comfort and style.",
  },
  {
    id: 2,
    title: "Commercial Workspace",
    description: "A polished, efficient workspace designed for collaboration.",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="home-projects px-8 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold">Featured Projects</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
