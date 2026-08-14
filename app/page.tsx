'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  Code2,
  Smartphone,
  Monitor,
  Globe,
  Sparkles,
} from 'lucide-react';
import { projects } from './data/projects';
import ProjectCard from './components/ProjectCard';

const stats = [
  { label: 'Projects Shipped', value: '15+' },
  { label: 'Live Products', value: '3' },
  { label: 'Tenants Served', value: '5+' },
  { label: 'Years Coding', value: '4+' },
];

const services = [
  {
    icon: Globe,
    title: 'Web Applications',
    desc: 'Modern, fast, SEO-friendly web apps with Next.js, Django and Postgres.',
  },
  {
    icon: Monitor,
    title: 'Desktop Software',
    desc: 'Cross-platform native desktop apps with PyQt6 and Python.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'React Native / Expo mobile apps that sync with your web platform.',
  },
  {
    icon: Code2,
    title: 'SaaS & Multi-Tenant',
    desc: 'Multi-tenant platforms with subdomain onboarding and role-based access.',
  },
];

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="chip">
                <Sparkles size={12} /> Available for new projects
              </span>
              <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Hi, I&apos;m <span className="gradient-text">James Nderema</span>
                <br />
                I build products for the web, desktop & mobile.
              </h1>
              <p className="mt-5 text-slate-400 text-lg max-w-xl">
                Full-stack developer from Mombasa, Kenya — designing and shipping
                SaaS platforms, POS systems, school-management tools, and native
                desktop apps used by real businesses.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/projects" className="btn-primary">
                  View my work <ArrowRight size={16} />
                </Link>
                <a
                  href="/CV/James_Nderema_CV.pdf"
                  download
                  className="btn-ghost"
                >
                  <Download size={16} /> Download CV
                </a>
              </div>

              <div className="mt-8 flex items-center gap-2">
                <a
                  href="https://github.com/James119-nderema"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/james-nderema-571261311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:james.o.nderema@gmail.com"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://wa.me/254706394482"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition"
                  aria-label="WhatsApp"
                >
                  <Phone size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-cyan-500/25 via-indigo-500/20 to-fuchsia-500/20 blur-3xl" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-2 ring-white/10 shadow-2xl floaty">
                  <Image
                    src="/images/James.jpg"
                    alt="James Nderema"
                    fill
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-xs text-slate-200 whitespace-nowrap">
                  Mombasa, Kenya · Software Developer
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card p-5 text-center">
                <div className="text-3xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-slate-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-2">
            What I do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            End-to-end product engineering
          </h2>
          <p className="text-slate-400 mt-3">
            From landing page to production database — I design, build and ship
            complete products across web, mobile and desktop.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div key={s.title} className="card p-6">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/20 flex items-center justify-center text-cyan-300">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-100">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-2">
              Featured work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Selected projects</h2>
            <p className="text-slate-400 mt-3">
              A handful of the products I&apos;ve built — from live SaaS platforms
              to a full-stack POS system.
            </p>
          </div>
          <Link
            href="/projects"
            className="text-sm text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1"
          >
            View all projects <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Have a product in mind?
              </h3>
              <p className="text-slate-400 mt-2 max-w-xl">
                Let&apos;s scope it and get building. I&apos;m open to full-time,
                contract and freelance engagements.
              </p>
            </div>
            <Link href="/contact" className="btn-primary self-start md:self-auto">
              Start a conversation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
