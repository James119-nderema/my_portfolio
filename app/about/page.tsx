import Image from 'next/image';
import Link from 'next/link';
import { Download, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export const metadata = {
  title: 'About — James Nderema',
  description:
    'About James Nderema — full-stack developer building products across web, desktop and mobile.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A developer who ships real products."
        subtitle="I build software that people actually use — from live SaaS platforms serving multiple tenants to native desktop apps running behind shop counters."
      />

      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="card p-4 sticky top-24">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/James.jpg"
                  alt="James Nderema"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <MapPin size={16} className="text-cyan-400" />
                  Mombasa, Kenya
                </div>
                <a
                  href="mailto:james.o.nderema@gmail.com"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-white"
                >
                  <Mail size={16} className="text-cyan-400" />
                  james.o.nderema@gmail.com
                </a>
                <a
                  href="https://wa.me/254706394482"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-white"
                >
                  <Phone size={16} className="text-cyan-400" />
                  +254 706 394 482
                </a>
                <div className="pt-2 flex gap-2">
                  <a
                    href="/CV/James-Nderema-CV.pdf"
                    download
                    className="btn-primary text-sm"
                  >
                    <Download size={14} /> CV
                  </a>
                  <Link href="/contact" className="btn-ghost text-sm">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <div>
              <h2 className="text-2xl font-bold">Who I am</h2>
              <p className="mt-3 text-slate-400 leading-relaxed">
                I&apos;m a full-stack software developer focused on building
                products that solve real problems for African businesses and
                schools. My work spans web SaaS, mobile apps and native desktop
                software, with a bias toward reliable, fast experiences that
                work even in low-connectivity environments.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">What I&apos;m building</h2>
              <p className="mt-3 text-slate-400 leading-relaxed">
                I currently maintain <span className="text-cyan-300">SokoBiz</span>
                {' '}(a business & inventory SaaS), <span className="text-cyan-300">SchoolMaster</span>
                {' '}(a multi-tenant school management platform with live
                onboarded schools), and <span className="text-cyan-300">DukaPro</span>
                {' '}— a full point-of-sale suite with a web dashboard, PyQt6
                desktop cashier and a React Native mobile companion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">How I work</h2>
              <ul className="mt-3 space-y-2 text-slate-400">
                {[
                  'Ship early and iterate — real users beat hypotheses.',
                  'Keep the stack boring where it can be, sharp where it matters.',
                  'Design for offline and low bandwidth by default.',
                  'Own the whole stack — from Postgres schema to CSS.',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold">Ready to see the work?</h3>
              <p className="text-sm text-slate-400 mt-1">
                Browse featured projects with live links and downloadable apps.
              </p>
              <div className="mt-4 flex gap-2">
                <Link href="/projects" className="btn-primary text-sm">
                  View projects <ArrowRight size={14} />
                </Link>
                <Link href="/skills" className="btn-ghost text-sm">
                  See skills
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
