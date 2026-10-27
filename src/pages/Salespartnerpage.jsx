import React from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  ClipboardList,
  CheckCircle,
  ArrowRight,
  Smartphone,
  MessageCircle,
  Landmark,
  Megaphone,
  GraduationCap,
  Globe,
  Award,
  Building2,
  TrendingUp,
  Percent,
  Sparkles,
  Handshake,
} from "lucide-react";

/* ============================================================
   CONTENT
============================================================ */

const quickFacts = [
  { icon: Briefcase, label: "Role", value: "AquaBill Sales Partner" },
  { icon: MapPin, label: "Location", value: "Kolhapur" },
  { icon: Clock, label: "Type", value: "Part-time or full-time" },
];

const whoCanApply = [
  "Local entrepreneurs and youth",
  "Common Service Centres (Jan Seva Kendra)",
];

const responsibilities = [
  "Introduce AquaBill to village councils, BDO offices, local departments",
  "Give demos to Panchayats / VWSCs (in-person)",
  "Help customers register, pay, and activate their subscription",
  "Coordinate with AquaBill regional team for onboarding",
];

const commissions = [
  { task: "New Village Subscription", commission: "20% of the sale value" },
  { task: "Annual Renewal", commission: "10% recurring commission" },
];

const requirements = [
  { icon: Smartphone, text: "Smartphone & internet connection" },
  { icon: MessageCircle, text: "Communication skills in local language" },
  { icon: Landmark, text: "Knowledge of village administration or Panchayat systems" },
  { icon: Users, text: "Interest in social entrepreneurship" },
];

const weProvide = [
  { icon: Globe, text: "Full online training & product demo access" },
  { icon: ClipboardList, text: "Sales kit (brochures, pitch deck, pricing sheets)" },
  { icon: MessageCircle, text: "WhatsApp / On call partner support" },
  { icon: Megaphone, text: "Marketing materials for local campaigns" },
  { icon: GraduationCap, text: "Certificates and ID for authorized AquaBill Partners" },
];

const whyJoin = [
  { icon: TrendingUp, text: "Fast-growing digital governance sector" },
  { icon: Landmark, text: "Supports Digital Panchayat initiatives" },
  { icon: Building2, text: "Government and NGO partnerships" },
  { icon: Globe, text: "Available on GeM Portal" },
  { icon: Award, text: "Backed by Sigma Toolbox (Startup India-registered company)" },
];

/* ============================================================
   SMALL COMPONENTS
============================================================ */

function CheckList({ items }) {
  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle size={14} strokeWidth={2.5} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function IconList({ items }) {
  return (
    <ul className="space-y-3.5">
      {items.map(({ icon: Icon, text }) => (
        <li key={text} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 ring-1 ring-blue-100">
            <Icon size={15} />
          </span>
          <span className="pt-1.5">{text}</span>
        </li>
      ))}
    </ul>
  );
}

function InfoCard({ icon: Icon, title, children, accent = "blue" }) {
  const accents = {
    blue: "from-blue-600 to-indigo-600",
    emerald: "from-emerald-500 to-teal-600",
    amber: "from-amber-500 to-orange-600",
  };
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg sm:p-8">
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-slate-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative mb-5 flex items-center gap-3">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${accents[accent]} text-white shadow-md`}
        >
          <Icon size={20} />
        </span>
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

function SectionHeading({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-8 text-center sm:mb-10">
      <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-700">
        <Icon size={12} />
        {title}
      </span>
      {subtitle && (
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {subtitle}
        </h2>
      )}
    </div>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function SalesPartnerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        {/* Subtle decorative background */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />
          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-indigo-50 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15,23,42,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.6) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-700">
            <Sparkles size={13} />
            Join the AquaBill Partner Network
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Sales Partner
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              (AquaBill)
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-slate-600 sm:text-lg">
            Empower Villages · Earn Income · Support Digital India
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Apply Now
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/contactform"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-50"
            >
              <MessageCircle size={16} />
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ABOUT + QUICK FACTS ================= */}
      <section className="relative -mt-12 px-6 pb-14">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50 sm:p-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
                <Handshake size={19} />
              </span>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                About AquaBill
              </h2>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              <p>
                <span className="font-semibold text-slate-900">AquaBill</span> by Sigma
                InfraPlan Engineering Pvt. Ltd. under its Sigma ToolBox project, is a smart
                water billing and collection software built specifically for Gram Panchayats,
                Village Water &amp; Sanitation Committees (VWSCs), contractors and small
                utility operators.
              </p>
              <p>
                It helps local bodies generate bills, track payments, and improve transparency
                — in line with Jal Jeevan Mission and Digital India goals.
              </p>
              <p>
                Now, we&apos;re expanding — and we&apos;re looking for passionate individuals
                and organizations to join our Sales Partner Network.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {quickFacts.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50/70 to-indigo-50/40 p-4 transition-all hover:border-blue-200 hover:shadow-sm"
                >
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-blue-700">
                    <Icon size={13} />
                    {label}
                  </div>
                  <p className="mt-2 text-sm font-semibold text-slate-800">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO CAN APPLY + RESPONSIBILITIES ================= */}
      <section className="mx-auto max-w-5xl px-6 pb-14">
        <SectionHeading
          icon={Users}
          title="The Role"
          subtitle="Who we're looking for & what you'll do"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard icon={Users} title="Who Can Apply" accent="emerald">
            <CheckList items={whoCanApply} />
          </InfoCard>
          <InfoCard icon={ClipboardList} title="Your Responsibilities" accent="blue">
            <CheckList items={responsibilities} />
          </InfoCard>
        </div>
      </section>

      {/* ================= EARNINGS ================= */}
      <section className="mx-auto max-w-5xl px-6 pb-14">
        <SectionHeading
          icon={Percent}
          title="Earnings"
          subtitle="Earnings & Incentives"
        />
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">
                  Task
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">
                  Commission
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {commissions.map((row) => (
                <tr key={row.task} className="transition hover:bg-blue-50/50">
                  <td className="px-6 py-4 font-medium text-slate-800">{row.task}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-100">
                      <Percent size={11} />
                      {row.commission}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-center text-base font-semibold text-slate-700 sm:text-lg">
          You&apos;ll be the face of AquaBill in your region.
        </p>
      </section>

      {/* ================= REQUIREMENTS / WE PROVIDE / WHY JOIN ================= */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <SectionHeading
          icon={Award}
          title="What You Get & Need"
          subtitle="Support, tools & why this is the right time"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <InfoCard icon={CheckCircle} title="Basic Requirements" accent="amber">
            <IconList items={requirements} />
          </InfoCard>
          <InfoCard icon={Award} title="We Provide" accent="blue">
            <IconList items={weProvide} />
          </InfoCard>
          <InfoCard icon={TrendingUp} title="Why Join AquaBill Now" accent="emerald">
            <IconList items={whyJoin} />
          </InfoCard>
        </div>
      </section>

      {/* ================= CLOSING CTA ================= */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-14 text-center shadow-xl shadow-slate-200/60 sm:px-12">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-50 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-50 blur-3xl" />
          </div>

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-700">
              <Sparkles size={12} />
              Ready to Join?
            </span>

            <p className="mx-auto mt-5 max-w-2xl text-xl font-semibold leading-snug text-slate-900 sm:text-2xl">
              Be part of the rural digitization revolution — where technology meets community
              impact.
            </p>

            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Apply Now
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}