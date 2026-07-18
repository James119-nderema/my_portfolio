'use client';

import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

const skillGroups = [
  {
    title: 'Languages',
    accent: 'from-cyan-500/20 to-blue-500/20',
    skills: [
      { name: 'JavaScript / TypeScript', level: 92 },
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'PHP', level: 72 },
    ],
  },
  {
    title: 'Frontend',
    accent: 'from-indigo-500/20 to-fuchsia-500/20',
    skills: [
      { name: 'React & Next.js', level: 92 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'React Native', level: 78 },
      { name: 'Framer Motion', level: 80 },
    ],
  },
  {
    title: 'Backend',
    accent: 'from-emerald-500/20 to-teal-500/20',
    skills: [
      { name: 'Django / DRF', level: 90 },
      { name: 'Node.js / Express', level: 75 },
      { name: 'REST API design', level: 88 },
      { name: 'Auth & Multi-tenancy', level: 82 },
    ],
  },
  {
    title: 'Databases',
    accent: 'from-amber-500/20 to-orange-500/20',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MySQL', level: 90 },
      { name: 'SQLite', level: 85 },
      { name: 'Redis', level: 65 },
    ],
  },
  {
    title: 'Desktop & Mobile',
    accent: 'from-rose-500/20 to-red-500/20',
    skills: [
      { name: 'PyQt6', level: 85 },
      { name: 'React Native / Expo', level: 78 },
      { name: 'Qt Stylesheet', level: 82 },
      { name: 'Windows packaging', level: 75 },
    ],
  },
  {
    title: 'Tooling & DevOps',
    accent: 'from-sky-500/20 to-cyan-500/20',
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'Docker', level: 70 },
      { name: 'Linux servers', level: 78 },
      { name: 'Nginx / DNS', level: 72 },
    ],
  },
];

const tools = [
  'Git', 'GitHub', 'VS Code', 'PyCharm', 'Postman',
  'Figma', 'Docker', 'Nginx', 'Ubuntu', 'Vercel', 'Cloudflare',
];

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="Tools, languages & the stack I ship with."
        subtitle="A pragmatic full-stack toolkit chosen for speed of development and reliability in production."
      />

      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.05 }}
              className="card p-6"
            >
              <div className={`inline-block px-3 py-1 rounded-md bg-gradient-to-r ${group.accent} border border-white/5 mb-4`}>
                <h3 className="text-sm font-semibold text-slate-100">{group.title}</h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">{s.name}</span>
                      <span className="text-slate-500 tabular-nums">{s.level}%</span>
                    </div>
                    <div className="mt-1.5 w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 card p-6">
          <h3 className="font-semibold">Tools I use daily</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full text-sm bg-slate-800/60 border border-white/5 text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
