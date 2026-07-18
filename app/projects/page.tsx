'use client';

import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { projects, Project } from '../data/projects';

const categories: Array<'All' | Project['category']> = [
  'All',
  'SaaS',
  'Web',
  'Desktop',
  'Mobile',
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All');

  const filtered = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Real products, shipped and running."
        subtitle="A mix of live SaaS platforms, cross-platform business tools, and downloadable native apps."
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                filter === c
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white border-transparent'
                  : 'border-white/10 text-slate-300 hover:bg-white/5'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </PageHeader>

      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14">
        {filtered.length === 0 ? (
          <p className="text-slate-400">No projects match this filter yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
