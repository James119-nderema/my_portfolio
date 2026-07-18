import Link from 'next/link';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-[#05070d]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center font-bold text-slate-900">
                JN
              </span>
              <span className="font-semibold">James Nderema</span>
            </div>
            <p className="mt-3 text-sm text-slate-400 max-w-xs">
              Full-stack developer building web, desktop and mobile products
              for African businesses and schools.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link href="/experience" className="hover:text-white">Experience</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">Get in touch</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/James119-nderema"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/james-nderema-571261311"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:james.o.nderema@gmail.com"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://wa.me/254706394482"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
                aria-label="WhatsApp"
              >
                <Phone size={18} />
              </a>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Mombasa, Kenya · Open to remote roles
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} James Nderema. All rights reserved.</span>
          <span>Built with Next.js, Tailwind CSS & Framer Motion.</span>
        </div>
      </div>
    </footer>
  );
}
