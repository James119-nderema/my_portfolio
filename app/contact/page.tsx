'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Check } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'website'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:james.o.nderema@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something."
        subtitle="Have a product idea, freelance project, or a role you'd like to discuss? Drop a message — I read every one."
      />

      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="card p-6">
              <h3 className="font-semibold text-lg">Get in touch</h3>
              <p className="text-sm text-slate-400 mt-2">
                Fastest replies via WhatsApp or email.
              </p>
              <div className="mt-5 space-y-3">
                <a
                  href="mailto:james.o.nderema@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition"
                >
                  <div className="w-9 h-9 rounded-md bg-cyan-500/15 text-cyan-300 flex items-center justify-center">
                    <Mail size={16} />
                  </div>
                  <div className="text-sm">
                    <div className="text-slate-200">Email</div>
                    <div className="text-slate-400">james.o.nderema@gmail.com</div>
                  </div>
                </a>
                <a
                  href="https://wa.me/254706394482"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition"
                >
                  <div className="w-9 h-9 rounded-md bg-emerald-500/15 text-emerald-300 flex items-center justify-center">
                    <Phone size={16} />
                  </div>
                  <div className="text-sm">
                    <div className="text-slate-200">WhatsApp</div>
                    <div className="text-slate-400">+254 706 394 482</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-3 rounded-lg">
                  <div className="w-9 h-9 rounded-md bg-indigo-500/15 text-indigo-300 flex items-center justify-center">
                    <MapPin size={16} />
                  </div>
                  <div className="text-sm">
                    <div className="text-slate-200">Location</div>
                    <div className="text-slate-400">Mombasa, Kenya</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex gap-2">
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
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="card p-6 md:p-8">
              <h3 className="font-semibold text-lg">Send a message</h3>
              <p className="text-sm text-slate-400 mt-1">
                This opens your mail client with the message pre-filled.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-slate-300">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1.5 w-full px-4 py-2.5 rounded-lg bg-slate-900/60 border border-white/10 text-slate-100 focus:outline-none focus:border-cyan-400 transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1.5 w-full px-4 py-2.5 rounded-lg bg-slate-900/60 border border-white/10 text-slate-100 focus:outline-none focus:border-cyan-400 transition"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-slate-300">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1.5 w-full px-4 py-2.5 rounded-lg bg-slate-900/60 border border-white/10 text-slate-100 focus:outline-none focus:border-cyan-400 transition resize-none"
                    placeholder="Tell me a bit about your project or role…"
                  />
                </div>

                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs text-slate-500">
                    Prefer not to fill a form?{' '}
                    <a
                      href="mailto:james.o.nderema@gmail.com"
                      className="text-cyan-300 hover:text-cyan-200"
                    >
                      Email directly
                    </a>
                    .
                  </p>
                  <button type="submit" className="btn-primary">
                    {sent ? (
                      <>
                        <Check size={16} /> Opened mail
                      </>
                    ) : (
                      <>
                        Send message <Send size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
