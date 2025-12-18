"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Download,
  Target,
  Brain,
  Bell,
  Clock,
  Zap,
  Shield,
  Building2,
  Users,
  TrendingUp,
  ChevronRight,
  ArrowRight,
  Apple,
  Monitor,
  Keyboard,
  Video,
  Calendar,
  Sun,
  Hand,
  Sparkles,
  Pill,
  PlayCircle,
  Stethoscope,
  BatteryLow,
  Watch,
  Activity,
  LineChart,
  Moon,
  AlertCircle,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <main className="relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-cream)]/80 backdrop-blur-lg border-b border-[var(--color-stone)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img 
                src="/logo_motus.png" 
                alt="Motus" 
                className="w-8 h-8 rounded-lg object-contain"
              />
              <span className="font-semibold text-lg tracking-tight">Motus</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 sm:gap-6"
          >
            <a
              href="#how-it-works"
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors hidden sm:block"
            >
              How it works
            </a>
            <a
              href="#for-teams"
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors hidden sm:block"
            >
              For Teams
            </a>
            <a
              href="https://calendly.com/1sankalp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors hidden sm:flex items-center gap-1.5"
            >
              Book a Call
            </a>
            <a
              href="#download"
              className="bg-[var(--color-deep)] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[var(--color-deep-muted)] transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid-pattern">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--color-accent)]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-[var(--color-accent-light)] text-[var(--color-accent)] px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Zap className="w-4 h-4" />
              Real-time relief, right at your desk
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold leading-[1.1] mb-6"
            >
              Back pain?
              <br />
              <span className="gradient-text">Handle it now.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed"
            >
              Motus is your always-available desktop companion. Pinpoint where
              it hurts on a 3D body model and get an instant 3-step protocol —
              targeted stretches, cognitive calming, and proactive nudges.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#download"
                className="group bg-[var(--color-accent)] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[var(--color-accent-hover)] transition-all shadow-lg shadow-[var(--color-accent)]/25 flex items-center gap-3"
              >
                <Download className="w-5 h-5" />
                Download Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="text-[var(--color-text)] px-6 py-4 rounded-full text-lg font-medium hover:bg-[var(--color-stone)] transition-colors flex items-center gap-2"
              >
                See how it works
                <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 flex items-center gap-8 text-sm text-[var(--color-muted)]"
            >
              <div className="flex items-center gap-2">
                <Apple className="w-5 h-5" />
                macOS
              </div>
              <div className="flex items-center gap-2">
                <Monitor className="w-5 h-5" />
                Windows
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Privacy-first
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
{/* Product Video */}
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border border-[var(--color-stone)] bg-white relative">
                  <video 
                    src="/motus-vid.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full block relative -my-[1px]"
                    style={{ 
                      clipPath: 'inset(8px 0 8px 0)',
                    }}
                  />
                </div>

              {/* Floating accent elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--color-accent)]/10 rounded-full blur-2xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--color-accent)]/10 rounded-full blur-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-[var(--color-muted)] flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[var(--color-muted)]"
            />
          </div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-[var(--color-deep)] text-white relative noise-overlay">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-semibold mb-6">
              Pain strikes during work.
              <br />
              <span className="text-[var(--color-accent)]">
                Solutions don&apos;t.
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              When back pain hits mid-deadline, your options are limited — and
              none of them are good.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Pill,
                title: "Painkillers",
                desc: "Quick fix, long-term harm. Masks the problem without solving it.",
                bgColor: "bg-orange-500/20",
                iconColor: "text-orange-400",
              },
              {
                icon: PlayCircle,
                title: "YouTube Stretches",
                desc: "10,000+ generic videos. None specific to YOUR pain point.",
                bgColor: "bg-red-500/20",
                iconColor: "text-red-400",
              },
              {
                icon: Stethoscope,
                title: "Physio Sessions",
                desc: "Requires scheduling, travel, and taking time off work.",
                bgColor: "bg-blue-500/20",
                iconColor: "text-blue-400",
              },
              {
                icon: BatteryLow,
                title: "Push Through",
                desc: "What most people do. Leading to chronic pain and damage.",
                bgColor: "bg-yellow-500/20",
                iconColor: "text-yellow-400",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className={`w-12 h-12 rounded-full ${item.bgColor} flex items-center justify-center mb-4`}>
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-4 bg-white/5 rounded-full px-6 py-3 border border-white/10">
              <span className="text-4xl font-bold text-[var(--color-accent)]">
                80%
              </span>
              <span className="text-white/60 text-left text-sm">
                of office workers experience
                <br />
                back pain during work hours
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[var(--color-accent)] font-medium text-sm uppercase tracking-wider mb-4 block">
              How It Works
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-semibold mb-6">
              Relief in three simple steps
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Motus delivers a personalized protocol in under 3 minutes —
              without leaving your desk.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: Target,
                title: "Pinpoint Your Pain",
                desc: "Click on the exact spot that hurts on our interactive 3D body model. The more specific, the better your relief.",
                color: "var(--color-accent)",
              },
              {
                step: "02",
                icon: Brain,
                title: "Get Your Protocol",
                desc: "Receive a personalized 3-step routine: targeted stretches for that specific muscle, breathing exercises, and postural cues.",
                color: "var(--color-accent)",
              },
              {
                step: "03",
                icon: Bell,
                title: "Stay Proactive",
                desc: "Smart nudges remind you to move before pain builds up. Prevention beats cure, every time.",
                color: "var(--color-accent)",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group"
              >
                <div className="bg-white rounded-3xl p-8 border border-[var(--color-stone)] hover:border-[var(--color-accent)]/30 transition-all hover:shadow-xl hover:shadow-[var(--color-accent)]/5 h-full">
                  <span className="text-6xl font-serif font-bold text-[var(--color-stone)] absolute top-6 right-8">
                    {item.step}
                  </span>

                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent-light)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-[var(--color-accent)]" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Nudges Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[var(--color-accent)] font-medium text-sm uppercase tracking-wider mb-4 block">
              Context-Aware
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-semibold mb-6">
              Nudges that fit your workflow
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Motus learns your work patterns and delivers the right intervention
              at the right moment — before pain becomes a problem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                trigger: "10+ minutes continuous typing",
                icon: Keyboard,
                action: "Wrist reset routine",
                actionIcon: Hand,
                nudge: "Want to take 45 seconds to reset your wrists and avoid strain?",
                color: "bg-blue-500",
                lightColor: "bg-blue-50",
                textColor: "text-blue-600",
              },
              {
                trigger: "Zoom marathon",
                icon: Video,
                action: "Neck + shoulder decompression",
                actionIcon: Sparkles,
                nudge: "3 long calls! Time to release that neck?",
                color: "bg-purple-500",
                lightColor: "bg-purple-50",
                textColor: "text-purple-600",
              },
              {
                trigger: "Calendar full of back-to-back meetings",
                icon: Calendar,
                action: "Mini-breaks between",
                actionIcon: Clock,
                nudge: "2 minutes before your next call — want a focus recharge?",
                color: "bg-emerald-500",
                lightColor: "bg-emerald-50",
                textColor: "text-emerald-600",
              },
              {
                trigger: "Weather + working indoors for 3+ hrs",
                icon: Sun,
                action: "Sunlight walk",
                actionIcon: Zap,
                nudge: "Sun's out ☀️ 10 min of sunlight helps your mood and back — want a quick walk?",
                color: "bg-amber-500",
                lightColor: "bg-amber-50",
                textColor: "text-amber-600",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="bg-[var(--color-cream)] rounded-3xl p-6 border border-[var(--color-stone)] hover:border-[var(--color-accent)]/30 transition-all hover:shadow-xl h-full">
                  {/* Trigger */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${item.lightColor} flex items-center justify-center`}>
                      <item.icon className={`w-5 h-5 ${item.textColor}`} />
                    </div>
                    <div>
                      <span className="text-xs text-[var(--color-muted)] uppercase tracking-wider">When</span>
                      <p className="font-medium text-sm">{item.trigger}</p>
                    </div>
                  </div>

                  {/* Arrow connector */}
                  <div className="flex items-center gap-3 mb-4 pl-4">
                    <div className="w-0.5 h-8 bg-[var(--color-stone)]" />
                    <ArrowRight className="w-4 h-4 text-[var(--color-muted)]" />
                    <div className="flex items-center gap-2">
                      <item.actionIcon className={`w-4 h-4 ${item.textColor}`} />
                      <span className="font-semibold">{item.action}</span>
                    </div>
                  </div>

                  {/* Nudge message */}
                  <div className={`${item.color} rounded-2xl p-4 text-white`}>
                    <div className="flex items-start gap-3">
                      <Bell className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-sm leading-relaxed">&ldquo;{item.nudge}&rdquo;</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-[var(--color-text-secondary)] text-lg">
              <span className="font-semibold text-[var(--color-text)]">Prevention over cure.</span>{" "}
              Motus intervenes at the right time, so pain never builds up.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[var(--color-accent)] font-medium text-sm uppercase tracking-wider mb-4 block">
                Why Motus
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-semibold mb-6">
                Built for the moments pain actually happens
              </h2>
              <p className="text-xl text-[var(--color-text-secondary)] mb-8">
                Unlike rehab apps that focus on recovery after damage, Motus is
                designed for real-time intervention during your workday.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Clock,
                    title: "Always Available",
                    desc: "Lives in your menu bar. One click to relief.",
                  },
                  {
                    icon: Target,
                    title: "Precision Targeting",
                    desc: "Exercises matched to your exact pain location.",
                  },
                  {
                    icon: Zap,
                    title: "Under 3 Minutes",
                    desc: "Quick protocols that fit between meetings.",
                  },
                  {
                    icon: Shield,
                    title: "Privacy First",
                    desc: "All data stays on your device. No cloud, no tracking.",
                  },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <feature.icon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-[var(--color-text-secondary)] text-sm">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 border border-[var(--color-stone)] shadow-xl">
                <div className="space-y-4">
                  {/* Simulated stretch card */}
                  <div className="bg-[var(--color-cream)] rounded-2xl p-6 border border-[var(--color-stone)]">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent-light)] px-3 py-1 rounded-full">
                        Step 1 of 3
                      </span>
                      <span className="text-sm text-[var(--color-muted)]">
                        45 sec
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      Neck Lateral Stretch
                    </h4>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                      Gently tilt your head toward your right shoulder. Hold for
                      15 seconds, then switch sides.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-2 bg-[var(--color-stone)] rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-[var(--color-accent)] rounded-full" />
                      </div>
                      <span className="text-sm font-medium">33%</span>
                    </div>
                  </div>

                  {/* Breathing indicator */}
                  <div className="bg-[var(--color-cream)] rounded-2xl p-6 border border-[var(--color-stone)]">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full border-4 border-[var(--color-accent)] flex items-center justify-center">
                        <Brain className="w-8 h-8 text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Cognitive Calming</h4>
                        <p className="text-sm text-[var(--color-muted)]">
                          4-7-8 breathing pattern
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Nudge preview */}
                  <div className="bg-gradient-to-r from-[var(--color-accent)] to-[#D4634A] rounded-2xl p-6 text-white">
                    <div className="flex items-center gap-3">
                      <Bell className="w-6 h-6" />
                      <div>
                        <p className="font-medium">Smart Nudge</p>
                        <p className="text-sm text-white/80">
                          Time for a micro-break! Stand up and roll your
                          shoulders.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-24 bg-[var(--color-deep)] text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-semibold mb-6">
              Insights that see patterns
              <br />
              <span className="text-[var(--color-accent)]">before you feel pain</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Connect your wearables and let Motus learn your body&apos;s signals.
              Predict pain before it happens and understand what triggers it.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Feature list */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  icon: Watch,
                  title: "Wearable Integration",
                  desc: "Sync with Apple Watch, Fitbit, Garmin, and other fitness trackers to get a complete picture of your health.",
                },
                {
                  icon: Moon,
                  title: "Sleep & Recovery Correlation",
                  desc: "Didn't sleep well? Motus knows — and prepares preventive protocols before morning neck stiffness sets in.",
                },
                {
                  icon: LineChart,
                  title: "Pattern Recognition",
                  desc: "Discover hidden connections between your stress levels, activity, sleep quality, and pain episodes.",
                },
                {
                  icon: AlertCircle,
                  title: "Predictive Alerts",
                  desc: "Get notified when conditions suggest an increased risk of pain, so you can act before it strikes.",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-white/5 rounded-2xl p-5 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right side - Visual mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                {/* Insight card example */}
                <div className="bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent rounded-2xl p-6 mb-6 border border-[var(--color-accent)]/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Pattern Detected</p>
                      <p className="font-semibold">Sleep-Pain Correlation</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/70 mb-4">
                    Your lower back pain episodes are <span className="text-[var(--color-accent)] font-semibold">73% more likely</span> after nights with less than 6 hours of sleep.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Moon className="w-4 h-4 text-white/40" />
                    <span className="text-white/40">Last night: 5h 23m</span>
                  </div>
                </div>

                {/* Recommendation card */}
                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-1">Proactive Recommendation</p>
                      <p className="text-sm text-white/60">
                        Based on your sleep data, we recommend a preventive lower back protocol this morning. Start now?
                      </p>
                      <button className="mt-3 bg-[var(--color-accent)] text-white text-sm px-4 py-2 rounded-full font-medium hover:bg-[var(--color-accent-hover)] transition-colors">
                        Start Protocol
                      </button>
                    </div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {[
                    { label: "Pain-free days", value: "23", trend: "+12%" },
                    { label: "Patterns found", value: "7", trend: "" },
                    { label: "Risk reduced", value: "45%", trend: "" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-2xl font-bold text-[var(--color-accent)]">{stat.value}</p>
                      <p className="text-xs text-white/40">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
          </motion.div>
        </div>
      </section>

      {/* B2B Section */}
      <section
        id="for-teams"
        className="py-24 bg-gradient-to-b from-[var(--color-cream)] to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[var(--color-accent)] font-medium text-sm uppercase tracking-wider mb-4 block">
              For Organizations
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-semibold mb-6">
              Invest in your team&apos;s wellbeing
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Back pain costs companies billions in lost productivity.
              <br />
              Motus helps prevent it before it impacts your bottom line.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Users,
                stat: "54%",
                label: "of employees report back pain",
              },
              {
                icon: TrendingUp,
                stat: "$100B+",
                label: "annual cost to US businesses",
              },
              {
                icon: Building2,
                stat: "5 hours",
                label: "average productivity loss per employee per week",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-white rounded-3xl p-8 border border-[var(--color-stone)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent-light)] flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[var(--color-accent)]" />
                </div>
                <div className="text-4xl font-bold mb-2 gradient-text">
                  {item.stat}
                </div>
                <p className="text-[var(--color-text-secondary)]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--color-deep)] rounded-3xl p-12 text-white text-center"
          >
            <h3 className="text-3xl font-serif font-semibold mb-4">
              Like Calm or Headspace, but for back pain
            </h3>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Companies invest in mindfulness apps for employee wellness. Motus
              addresses a more common, more impactful issue — back pain during
              work hours.
            </p>
            <a
              href="mailto:hello@motus.app"
              className="inline-flex items-center gap-3 bg-white text-[var(--color-deep)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-stone)] transition-colors"
            >
              <Building2 className="w-5 h-5" />
              Contact for Enterprise
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="/logo_motus.png" 
              alt="Motus" 
              className="w-20 h-20 rounded-2xl mx-auto mb-8 shadow-xl shadow-[var(--color-accent)]/30 object-contain"
            />

            <h2 className="text-4xl sm:text-5xl font-serif font-semibold mb-6">
              Start feeling better today
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto">
              Download Motus for free and take control of your back pain — right
              from your desktop.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="group w-full sm:w-auto bg-[var(--color-deep)] text-white px-8 py-5 rounded-2xl font-medium hover:bg-[var(--color-deep-muted)] transition-all flex items-center justify-center gap-4 shadow-lg"
              >
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <span className="text-xs text-white/60 block">
                    Download for
                  </span>
                  <span className="text-lg">macOS</span>
                </div>
              </a>

              <a
                href="#"
                className="group w-full sm:w-auto bg-[var(--color-deep)] text-white px-8 py-5 rounded-2xl font-medium hover:bg-[var(--color-deep-muted)] transition-all flex items-center justify-center gap-4 shadow-lg"
              >
                <Monitor className="w-8 h-8" />
                <div className="text-left">
                  <span className="text-xs text-white/60 block">
                    Download for
                  </span>
                  <span className="text-lg">Windows</span>
                </div>
              </a>
            </div>

            <p className="text-sm text-[var(--color-muted)] mt-8">
              Free to use • No account required • Privacy-first
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-cream)] border-t border-[var(--color-stone)] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img 
                src="/logo_motus.png" 
                alt="Motus" 
                className="w-8 h-8 rounded-lg object-contain"
              />
              <span className="font-semibold">Motus</span>
            </Link>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--color-text-secondary)]">
              <a 
                href="https://calendly.com/1sankalp" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-text)] transition-colors"
              >
                Book a Call
              </a>
              <a
                href="mailto:hello@withmotus.com"
                className="hover:text-[var(--color-text)] transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-[var(--color-muted)]">
              © 2025 Motus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </main>
  );
}
