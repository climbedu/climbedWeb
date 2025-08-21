import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Code2, Paintbrush2, MessagesSquare, Users, ArrowRight, CheckCircle2, Baby, Sparkles } from "lucide-react";
import ClimbEdLogo from "./assets/ClimbEd.png"; // Make sure this path and filename are correct

// --- Helper: smooth scroll
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function ClimbEd() {
  const whatsappNumber = "918848682152"; // with country code
  const waText = encodeURIComponent("Hi, I'm interested in ClimbEd courses. Please share details.");
  const waLink = `https://wa.me/${whatsappNumber}?text=${waText}`;

  const navItems = [
    { label: "Home", target: "home" },
    { label: "Courses", target: "courses" },
    { label: "Modes", target: "modes" },
    { label: "About", target: "about" },
    { label: "Enquiry", href: waLink },
  ];

  const courses = [
    {
      title: "Coding",
      desc: "From block-based to beginner Python/JS. Build logic, games & apps.",
      icon: <Code2 className="w-8 h-8" aria-hidden="true" />,
      badge: "Ages 7+",
    },
    {
      title: "Spoken English",
      desc: "Confident speaking, vocabulary & pronunciation through activities.",
      icon: <MessagesSquare className="w-8 h-8" aria-hidden="true" />,
      badge: "All ages",
    },
    {
      title: "Life Skills",
      desc: "Mindset, habits, problem-solving, teamwork & leadership.",
      icon: <Sparkles className="w-8 h-8" aria-hidden="true" />,
      badge: "Ages 8+",
    },
    {
      title: "Art & Craft (Kids <10)",
      desc: "Hands-on creativity: drawing, crafting, colors & textures.",
      icon: <Paintbrush2 className="w-8 h-8" aria-hidden="true" />,
      badge: "Under 10",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("home");
            }}
            className="flex items-center gap-2 font-bold"
          >
            <img
              src={ClimbEdLogo}
              alt="ClimbEd Logo"
              className="h-20 w-20"
            />

          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToId(item.target)}
                  className="text-sm font-medium hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </button>
              )
            )}
          </nav>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="md:hidden inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold bg-blue-600 text-white shadow-sm"
          >
            Enquiry
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-28 -right-20 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />
          <div className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-teal-100 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Climb higher with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                clarity & confidence
              </span>
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              ClimbEd is a modern learning platform offering 1-to-1 and group
              sessions in Coding, Spoken English, Life Skills, and Art & Craft
              for young creators.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#courses"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("courses");
                }}
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-blue-600 text-white shadow-sm"
              >
                Explore Courses <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-white text-emerald-700 border border-emerald-200 shadow-sm"
              >
                Enquire on WhatsApp
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Personalised
                paths
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Project-based
                learning
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Flexible
                schedules
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl p-6 bg-white shadow-sm border border-slate-100">
                <BookOpen className="w-10 h-10 text-blue-600" />
                <p className="mt-3 font-semibold">Structured Curriculum</p>
                <p className="text-sm text-slate-600">
                  Age-appropriate & engaging modules.
                </p>
              </div>
              <div className="rounded-2xl p-6 bg-white shadow-sm border border-slate-100">
                <Users className="w-10 h-10 text-blue-600" />
                <p className="mt-3 font-semibold">Expert Mentors</p>
                <p className="text-sm text-slate-600">Friendly, verified educators.</p>
              </div>
              <div className="rounded-2xl p-6 bg-white shadow-sm border border-slate-100">
                <Code2 className="w-10 h-10 text-blue-600" />
                <p className="mt-3 font-semibold">Hands-on Projects</p>
                <p className="text-sm text-slate-600">Build games, crafts & more.</p>
              </div>
              <div className="rounded-2xl p-6 bg-white shadow-sm border border-slate-100">
                <Baby className="w-10 h-10 text-blue-600" />
                <p className="mt-3 font-semibold">Kid-safe</p>
                <p className="text-sm text-slate-600">Safe, inclusive sessions.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Courses</h2>
              <p className="mt-2 text-slate-600">
                Carefully designed to spark curiosity and build real skills.
              </p>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200"
            >
              Enquire
            </a>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="text-emerald-700">{c.icon}</div>
                  <span className="text-xs rounded-full bg-emerald-50 text-emerald-700 px-2 py-1 border border-emerald-200">
                    {c.badge}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-lg">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-600 min-h-[3.5rem]">{c.desc}</p>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold bg-blue-600 text-white shadow-sm"
                  >
                    Enquire <ArrowRight className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => scrollToId("modes")}
                    className="text-xs font-medium text-emerald-700 hover:underline"
                  >
                    See learning modes
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modes */}
      <section
        id="modes"
        className="py-16 lg:py-24 bg-gradient-to-b from-emerald-50 to-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold">Flexible Learning Modes</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Choose the style that fits you best. Switch anytime.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-lg">1-to-1 (Personal Coaching)</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc pl-5">
                <li>Tailored lesson plans + pace</li>
                <li>Deep feedback & doubt clearing</li>
                <li>Flexible scheduling</li>
              </ul>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold bg-blue-600 text-white shadow-sm"
              >
                Book a trial
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-lg">1-to-many (Group Sessions)</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc pl-5">
                <li>Collaborative projects & peer learning</li>
                <li>Great value pricing</li>
                <li>Fun, interactive activities</li>
              </ul>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold bg-blue-600 text-white shadow-sm"
              >
                See batches
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Why ClimbEd?</h2>
            <p className="mt-3 text-slate-600">
              We blend structured curricula with creativity so learners build
              confidence while mastering fundamentals. Parents get progress updates
              and transparent communication.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { title: "Safe & Inclusive", text: "Kid-first design & policies." },
                { title: "Project-led", text: "Make, present, reflect." },
                { title: "Certified Mentors", text: "Screened & trained." },
                { title: "Parent Updates", text: "Clear feedback loops." },
              ].map((f) => (
                <div key={f.title} className="rounded-2xl border border-slate-200 p-4">
                  <p className="font-semibold">{f.title}</p>
                  <p className="text-sm text-slate-600">{f.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-blue-600 text-white shadow-sm"
              >
                Contact us
              </a>
              <a
                href="#courses"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("courses");
                }}
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-white text-emerald-700 border border-emerald-200 shadow-sm"
              >
                Browse courses
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="relative"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-50 flex items-center justify-center">
                <div className="text-center px-6">
                  <h3 className="text-xl font-bold">Learning made joyful</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Replace rote with curiosity. Create small wins every week.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 text-center">
                <div>
                  <p className="text-2xl font-bold">1:1</p>
                  <p className="text-xs text-slate-600">Personal coaching</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">1:N</p>
                  <p className="text-xs text-slate-600">Group classes</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">4</p>
                  <p className="text-xs text-slate-600">Course streams</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Ready to start your climb?</h2>
            <p className="text-white/90">Message us on WhatsApp to get schedules, fees & a free consultation.</p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-white text-emerald-700 shadow-sm"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} ClimbEd. All rights reserved.</p>
          <div className="flex items-center gap-5 text-sm">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("about");
              }}
              className="hover:text-emerald-700"
            >
              About
            </a>
            <a
              href="#courses"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("courses");
              }}
              className="hover:text-emerald-700"
            >
              Courses
            </a>
            <a href={waLink} target="_blank" rel="noreferrer" className="hover:text-emerald-700">
              Enquiry
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 inline-flex items-center justify-center rounded-full h-14 w-14 bg-[#25D366] shadow-lg focus:outline-none"
        aria-label="WhatsApp Enquiry"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" className="h-7 w-7 text-white" aria-hidden>
          <path d="M19.11 17.01c-.27-.14-1.57-.77-1.81-.86-.24-.09-.42-.14-.6.14-.18.27-.69.86-.84 1.04-.15.18-.31.2-.58.07-.27-.14-1.13-.42-2.16-1.35-.8-.71-1.35-1.59-1.51-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.6-1.44-.83-1.98-.22-.53-.45-.46-.6-.46h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22 0 1.31.96 2.58 1.09 2.76.13.18 1.89 2.89 4.57 4.05.64.28 1.14.44 1.53.56.64.2 1.22.17 1.68.1.51-.08 1.57-.64 1.79-1.25.22-.62.22-1.15.15-1.25-.07-.1-.24-.16-.51-.3z" />
          <path d="M26.76 5.24C23.86 2.34 20.07.8 16.01.8 7.63.8.83 7.6.83 16c0 2.7.71 5.33 2.06 7.64L1.2 30.8l7.32-1.65c2.25 1.23 4.79 1.88 7.49 1.88h0c8.38 0 15.18-6.8 15.18-15.2 0-4.06-1.58-7.86-4.47-10.76zm-10.75 23.1h0c-2.41 0-4.77-.64-6.83-1.86l-.49-.29-4.35.98.93-4.24-.31-.52c-1.28-2.12-1.95-4.56-1.95-7.03 0-7.61 6.19-13.8 13.8-13.8 3.69 0 7.16 1.44 9.77 4.05 2.61 2.61 4.05 6.08 4.05 9.77 0 7.61-6.19 13.94-13.62 13.94z" />
        </svg>
      </a>
    </div>
  );
}
