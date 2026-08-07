export default function Stats() {
  return (
    <section className="home-stats px-8 py-20 text-slate-900">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        <div className="rounded-3xl bg-white/90 p-8 text-center shadow-sm">
          <p className="text-4xl font-bold">24+</p>
          <p className="mt-2 text-slate-600">Completed projects</p>
        </div>
        <div className="rounded-3xl bg-white/90 p-8 text-center shadow-sm">
          <p className="text-4xl font-bold">12</p>
          <p className="mt-2 text-slate-600">Happy clients</p>
        </div>
        <div className="rounded-3xl bg-white/90 p-8 text-center shadow-sm">
          <p className="text-4xl font-bold">8</p>
          <p className="mt-2 text-slate-600">Years experience</p>
        </div>
      </div>
    </section>
  );
}
