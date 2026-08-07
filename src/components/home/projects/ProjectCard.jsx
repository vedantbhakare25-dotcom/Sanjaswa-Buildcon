export default function ProjectCard({ project }) {
  return (
    <article className="rounded-3xl border border-slate-200/10 bg-white shadow-sm p-8">
      <h3 className="text-2xl font-semibold text-slate-950">{project.title}</h3>
      <p className="mt-4 text-slate-600">{project.description}</p>
    </article>
  );
}
