import { Briefcase, GraduationCap, Award } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export const metadata = {
  title: 'Experience — James Nderema',
  description: 'Work experience, education and certifications.',
};

const workExperience = [
  {
    role: 'Founder & Lead Developer',
    org: 'SokoBiz / SchoolMaster / DukaPro',
    period: '2024 - Present',
    location: 'Mombasa, Kenya',
    points: [
      'Designed and shipped SokoBiz — a multi-tenant business & inventory SaaS live at sokobiz.co.ke.',
      'Built SchoolMaster with per-tenant subdomains; live tenant demo at lilian.schoolmaster.co.ke.',
      'Delivered DukaPro POS: Django backend, Next.js dashboard, PyQt6 desktop cashier and React Native mobile app.',
      'Owned everything from Postgres schema and REST APIs to UI, deployment (Nginx, Ubuntu) and DNS.',
    ],
  },
  {
    role: 'Ajira Digital Trainer',
    org: 'Ajira Digital Program',
    period: 'January 2025 - Present',
    location: 'Mombasa, Kenya',
    points: [
      'Trained cohorts on web development, freelancing and digital-work opportunities.',
      'Mentored trainees on real projects — portfolios, GitHub hygiene and client communication.',
      'Contributed to curriculum on modern web tooling (React, Next.js, Tailwind).',
    ],
  },
];

const education = [
  {
    title: 'B.Sc. Computer Science',
    org: 'Technical University of Mombasa',
    period: 'Expected Dec 2026',
    points: [
      'Focused on software engineering, data structures, algorithms and systems design.',
      'Independent work: multi-tenant SaaS, mobile & desktop product development.',
    ],
  },
];

const certifications = [
  'Full-stack Web Development (self-taught, project-driven)',
  'Python & Django Development',
  'React Native Fundamentals',
];

function Timeline({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  items: Array<{
    role?: string;
    title?: string;
    org: string;
    period: string;
    location?: string;
    points: string[];
  }>;
}) {
  return (
    <div className="card p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/20 flex items-center justify-center text-cyan-300">
          <Icon size={18} />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      <div className="relative pl-6 space-y-8 border-l-2 border-white/5">
        {items.map((item, idx) => (
          <div key={idx} className="relative">
            <span className="absolute -left-[29px] top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 ring-4 ring-[#05070d]" />
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
              <h3 className="font-semibold text-slate-100">
                {item.role || item.title}
              </h3>
              <span className="text-xs text-slate-500">{item.period}</span>
            </div>
            <p className="text-sm text-cyan-300/80">{item.org}</p>
            {item.location && (
              <p className="text-xs text-slate-500 mt-0.5">{item.location}</p>
            )}
            <ul className="mt-3 space-y-1.5">
              {item.points.map((p) => (
                <li key={p} className="text-sm text-slate-400 flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Work, education & credentials."
        subtitle="A summary of what I&#39;ve been doing and where I&#39;ve been learning."
      />

      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14 space-y-8">
        <div className="grid lg:grid-cols-2 gap-6">
          <Timeline icon={Briefcase} title="Work Experience" items={workExperience} />
          <Timeline icon={GraduationCap} title="Education" items={education} />
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/20 flex items-center justify-center text-cyan-300">
              <Award size={18} />
            </div>
            <h2 className="text-xl font-bold">Certifications & Learning</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {certifications.map((c) => (
              <span
                key={c}
                className="px-3 py-1.5 rounded-full text-sm bg-slate-800/60 border border-white/5 text-slate-300"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-4">
            Additional certificates and reference letters available on request.
          </p>
        </div>
      </section>
    </>
  );
}
