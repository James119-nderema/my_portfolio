'use client';

import { useState } from 'react';
import { ExternalLink, Download, Github, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const [i, setI] = useState(0);
  const shots = project.screenshots.length > 0 ? project.screenshots : ['/images/Image.jpg'];

  const next = () => setI((v) => (v + 1) % shots.length);
  const prev = () => setI((v) => (v - 1 + shots.length) % shots.length);

  const statusColor =
    project.status === 'Live'
      ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
      : project.status === 'Beta'
      ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
      : 'bg-slate-500/15 text-slate-300 border-slate-500/30';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="card overflow-hidden group"
    >
      <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        {shots.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${project.name} screenshot ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              idx === i ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        {shots.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur hover:bg-black/60 transition opacity-0 group-hover:opacity-100"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur hover:bg-black/60 transition opacity-0 group-hover:opacity-100"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {shots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? 'w-6 bg-cyan-400' : 'w-1.5 bg-white/40'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute top-3 left-3 flex gap-2">
          <span className="chip">{project.category}</span>
          {project.status && (
            <span className={`text-xs px-2.5 py-1 rounded-full border ${statusColor}`}>
              {project.status}
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-100">{project.name}</h3>
        <p className="text-sm text-cyan-300/80 mt-0.5">{project.tagline}</p>
        <p className="text-sm text-slate-400 mt-3 line-clamp-3">{project.description}</p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {project.highlights.map((h) => (
              <li key={h} className="text-xs text-slate-400 flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              <ExternalLink size={14} />
              {project.liveLabel || 'Live Demo'}
            </a>
          )}
          {project.downloadUrl && (
            <a
              href={project.downloadUrl}
              download
              className="btn-primary text-sm"
            >
              <Download size={14} />
              {project.downloadLabel || 'Download'}
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm"
            >
              <Github size={14} />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
