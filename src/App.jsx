import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const SectionTitle = ({ kicker, title, subtitle }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="mb-10"
  >
    {kicker ? (
      <p className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
        {kicker}
      </p>
    ) : null}
    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">{title}</h2>
    {subtitle ? <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">{subtitle}</p> : null}
  </motion.div>
);

const infoCards = [
  { label: "Duration", value: "3-4 Months" },
  { label: "Masterclasses", value: "3 / Week" },
  { label: "Doubt Session", value: "1 / Week" },
  { label: "Cohort Size", value: "Max 25" },
];

const problems = [
  "Too many tutorials. Zero depth.",
  "Hours lost to scrolling and random content.",
  "No clear roadmap for tech careers.",
];

const fixes = [
  "Structured path from fundamentals to real projects.",
  "First-principles teaching, not copy-paste coding.",
  "Small cohort + personal doubt support.",
  "Career clarity from day one of your college journey.",
];

const phases = [
  {
    week: "Phase 01",
    title: "Math Foundation",
    detail: "Math for CP/DSA + ML: logic, patterns, problem framing.",
  },
  {
    week: "Phase 02",
    title: "Programming Core",
    detail: "Python or C++ fundamentals done right.",
  },
  {
    week: "Phase 03",
    title: "DSA Buildout",
    detail: "Arrays to trees and graphs, basic to intermediate.",
  },
  {
    week: "Phase 04",
    title: "AI + Projects",
    detail: "Build real-world projects using AI tools like ChatGPT.",
  },
];

const differentiators = [
  "No rote learning loops.",
  "Deep intuition over short-term hacks.",
  "Cohort-based accountability.",
  "Mentorship that actually responds.",
];

const outcomes = [
  "Solve DSA problems with confidence, not guesswork.",
  "Understand how AI tools work and where they fail.",
  "Build and ship one guided real-world project.",
  "Develop a strong base before placements pressure hits.",
];

const audience = [
  "Students entering college",
  "1st year students",
  "2nd-4th year students who want a reset",
  "Curious class 9-12 students",
];

const programDetails = [
  "3 masterclasses per week",
  "1 weekly doubt-solving session",
  "Personal doubt support",
  "1 guided project",
  "Final coding test + interview round",
];

const FooterCTA = () => (
  <motion.section
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.35 }}
    variants={fadeUp}
    className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/20 via-blue-500/10 to-cyan-400/20 p-7 sm:p-10"
  >
    <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
    <div className="absolute -bottom-14 -left-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
    <div className="relative">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Final Call</p>
      <h3 className="mt-3 text-2xl font-semibold text-white sm:text-4xl">
        Stop scrolling. Start building your unfair advantage.
      </h3>
      <p className="mt-4 max-w-2xl text-sm text-slate-200 sm:text-base">
        Skills compound. Start early. Baye&apos;s Camp is limited to 25 students so every learner gets real attention.
      </p>
      <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <a
          href="#apply"
          className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
        >
          Apply Now
        </a>
        <p className="text-xs text-slate-300">Next cohorts may include System Design and LLMs-from-scratch tracks.</p>
      </div>
    </div>
  </motion.section>
);

export default function BayeCampLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[110px]" />
        <div className="absolute bottom-0 left-0 h-[22rem] w-[22rem] rounded-full bg-blue-500/20 blur-[110px]" />
        <div className="absolute right-0 top-1/3 h-[20rem] w-[20rem] rounded-full bg-cyan-400/20 blur-[100px]" />
      </div>

      <main>
        <section className="relative pt-16 sm:pt-20 lg:pt-24">
          <Container>
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
            >
              <motion.div variants={fadeUp}>
                <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Baye&apos;s Camp
                </p>
                <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Replace distraction with direction.
                  <span className="mt-2 block bg-gradient-to-r from-violet-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    Build deep tech intuition early.
                  </span>
                </h1>
                <p className="mt-5 max-w-xl text-sm text-slate-300 sm:text-base">
                  A premium 3-4 month cohort for students who want to master DSA, math, AI/ML foundations, and
                  project building before everyone else catches up.
                </p>
                <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <a
                    id="apply"
                    href="#pricing"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
                  >
                    Apply Now
                  </a>
                  <p className="text-xs text-slate-300">Limited to 25 students</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
                {infoCards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-4 backdrop-blur"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{card.label}</p>
                    <p className="mt-2 text-lg font-semibold text-white sm:text-xl">{card.value}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </Container>
        </section>

        <section className="pt-20 sm:pt-24">
          <Container>
            <SectionTitle
              kicker="The Problem"
              title="Students are busy. But not moving."
              subtitle="Tutorial hell, endless scrolling, and no clear plan quietly steal your best years."
            />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-4 sm:grid-cols-3"
            >
              {problems.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="rounded-2xl border border-rose-400/20 bg-rose-500/5 p-5 text-sm text-slate-200"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        <section className="pt-20 sm:pt-24">
          <Container>
            <SectionTitle
              kicker="The Fix"
              title="Baye&apos;s Camp gives you a system."
              subtitle="Not random content. Not hype. Clear progression, hard skills, and personal guidance."
            />
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="grid gap-4 sm:grid-cols-2"
            >
              {fixes.map((fix) => (
                <motion.div
                  key={fix}
                  variants={fadeUp}
                  className="rounded-2xl border border-cyan-300/20 bg-cyan-500/5 p-5 text-sm text-slate-100"
                >
                  {fix}
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        <section className="pt-20 sm:pt-24">
          <Container>
            <SectionTitle
              kicker="Curriculum Timeline"
              title="Progression that compounds each week."
              subtitle="From fundamentals to real-world output in 4 tight phases."
            />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-4"
            >
              {phases.map((phase) => (
                <motion.div
                  key={phase.week}
                  variants={fadeUp}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{phase.week}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{phase.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{phase.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        <section className="pt-20 sm:pt-24">
          <Container>
            <SectionTitle
              kicker="Why It Hits Different"
              title="Built for serious beginners."
              subtitle="The goal is long-term edge, not short-term dopamine."
            />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {differentiators.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="rounded-2xl border border-violet-300/20 bg-violet-500/5 p-5 text-sm text-slate-100"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        <section className="pt-20 sm:pt-24">
          <Container>
            <SectionTitle
              kicker="Outcomes"
              title="What you can actually do after this."
              subtitle="Don&apos;t just use AI. Understand it. Build with it."
            />
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {outcomes.map((outcome) => (
                <motion.li
                  key={outcome}
                  variants={fadeUp}
                  className="rounded-2xl border border-blue-300/20 bg-blue-500/5 p-5 text-sm text-slate-100"
                >
                  {outcome}
                </motion.li>
              ))}
            </motion.ul>
          </Container>
        </section>

        <section className="pt-20 sm:pt-24">
          <Container className="grid gap-8 lg:grid-cols-2">
            <div>
              <SectionTitle kicker="Who This Is For" title="If this sounds like you, apply." />
              <motion.ul
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-3"
              >
                {audience.map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div>
              <SectionTitle kicker="Program Details" title="Simple structure. Serious execution." />
              <motion.ul
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-3"
              >
                {programDetails.map((detail) => (
                  <motion.li
                    key={detail}
                    variants={fadeUp}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
                  >
                    {detail}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Container>
        </section>

        <section className="pt-20 sm:pt-24">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="rounded-3xl border border-amber-300/30 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10 p-7 sm:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">Internship Opportunity</p>
              <h3 className="mt-3 text-2xl font-semibold text-white sm:text-4xl">
                Final coding test. Top 3 get internship access.
              </h3>
              <p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
                One student is selected after interview. This isn&apos;t a certificate race. It&apos;s a performance filter.
              </p>
            </motion.div>
          </Container>
        </section>

        <section id="pricing" className="pt-20 sm:pt-24">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Pricing</p>
              <div className="mt-3 flex flex-wrap items-end gap-3">
                <p className="text-4xl font-semibold text-white sm:text-5xl">₹12,999</p>
                <p className="pb-1 text-sm text-slate-300">for 3-4 months of compounding skill growth</p>
              </div>
              <p className="mt-4 max-w-3xl text-sm text-slate-300 sm:text-base">
                One focused semester here can save years of confusion later. Parents get discipline and direction.
                Students get edge, confidence, and momentum.
              </p>
              <a
                href="#apply"
                className="mt-7 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
              >
                Apply Now
              </a>
            </motion.div>
          </Container>
        </section>

        <section className="pb-16 pt-20 sm:pb-20 sm:pt-24">
          <Container>
            <FooterCTA />
          </Container>
        </section>
      </main>
    </div>
  );
}
