import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  FileText,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  UploadCloud,
  X,
  Handshake,
  Users2,
  MessageSquare,
} from "lucide-react";

import contactHero from "../assets/darker.png";

/* ============================================================
   REAL CONTACT + LOCATION DATA
============================================================ */

const contactDetails = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "109, Raoji Complex, 1st Lane, Shahupuri, Kolhapur – 416001",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91-231-2655151",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "contactus@infraplan.in",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat · 9:00 AM - 6:00 PM",
  },
];

const navigatorOptions = [
  {
    icon: MessageSquare,
    title: "Contact Us",
    description: "Fill out the form to get in touch with our team.",
  },
  {
    icon: Users2,
    title: "Expert Empanelment",
    description:
      "We are seeking experts in various hydraulic subfields for empanelment. Please complete the form for consideration.",
  },
  {
    icon: Handshake,
    title: "Sales Partner",
    description: "Join the AquaBill / Sigma ToolBox partner network.",
  },
];

const locations = [
  {
    title: "Kolhapur Office",
    address: "109, Raoji Complex, 1st Lane, E Ward, Shahupuri, Kolhapur, Maharashtra 416001",
  },
  {
    title: "Pune Office",
    address: "Office No. 215, 2nd Floor, Kohinoor Majestic, Thermax Chowk, M.I.D.C. Chinchwad, Pune",
  },
  {
    title: "Hydraulic Laboratory",
    address: "Chandkhed Village, Tal-Maval, Dist. Pune, Maharashtra, India",
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      <ContactHero />
      <NavigatorSection />
      <ContactSection />
      <LocationsSection />
    </div>
  );
}

/* ============================================================
   HERO
============================================================ */

function ContactHero() {
  return (
    <section className="relative flex h-[220px] items-center justify-center overflow-hidden sm:h-[260px] lg:h-[300px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactHero})` }}
      />
      <div className="absolute inset-0 bg-slate-900/55" />

      <h1 className="relative z-10 text-2xl font-bold uppercase tracking-[0.15em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-3xl lg:text-4xl">
        Contact Us
      </h1>
    </section>
  );
}

/* ============================================================
   "LET'S HELP YOU NAVIGATE YOUR NEXT" — 3-option selector
============================================================ */

function NavigatorSection() {
  return (
    <section className="border-b border-slate-100 bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Let's help you navigate your next
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {navigatorOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.title}
                type="button"
                onClick={() =>
                  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} />
                </div>

                <h3 className="text-base font-bold text-slate-900">{option.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
                  {option.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
                  Get started
                  <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT FORM SECTION (your existing component, address fixed)
============================================================ */

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    if (selectedFile.size > 10 * 1024 * 1024) {
      alert("File size should be less than 10MB.");
      return;
    }
    setFile(selectedFile);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (!droppedFile) return;
    if (droppedFile.size > 10 * 1024 * 1024) {
      alert("File size should be less than 10MB.");
      return;
    }
    setFile(droppedFile);
  };

  const removeFile = () => setFile(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setFile(null);
  };

  return (
    <section
      id="contact-form"
      className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-12 lg:pb-24 lg:pt-32"
    >
      {/* Top Wave */}
      <div className="absolute left-0 right-0 top-0 z-20 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 100" className="h-16 w-full sm:h-20 lg:h-24" preserveAspectRatio="none">
          <path
            d="M0,0 L1440,0 L1440,38 C1260,78 1160,86 980,52 C780,15 660,8 480,42 C300,76 170,78 0,38 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -right-40 top-1/4 h-[450px] w-[450px] rounded-full bg-indigo-500/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/5 blur-3xl" />
      </div>

      {/* Engineering Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Curved Engineering Lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <svg viewBox="0 0 1440 700" className="absolute left-0 top-10 h-full w-full" preserveAspectRatio="none">
          <path
            d="M-100 190 C250 70 450 250 720 140 C980 35 1180 100 1540 210"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <path
            d="M-100 500 C260 350 470 590 760 430 C1030 280 1250 390 1540 470"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <path
            d="M100 700 C360 540 520 680 800 560 C1060 450 1240 520 1450 600"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 animate-float rounded-full bg-white/30"
            style={{
              top: `${8 + ((i * 13) % 82)}%`,
              left: `${4 + ((i * 17) % 92)}%`,
              animationDelay: `${i * 0.45}s`,
              animationDuration: `${4 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative Rings */}
      <div className="pointer-events-none absolute right-[-80px] top-[30%] hidden h-64 w-64 rounded-full border border-white/10 lg:block">
        <div className="absolute inset-8 rounded-full border border-white/10" />
        <div className="absolute inset-16 rounded-full border border-white/10" />
      </div>

      <div className="pointer-events-none absolute bottom-20 left-[-100px] hidden h-56 w-56 rounded-full border border-cyan-300/10 lg:block">
        <div className="absolute inset-8 rounded-full border border-cyan-300/10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100 backdrop-blur-md">
            <Sparkles size={13} />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300" />
            Get In Touch
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's Build Something <span className="text-blue-200">Meaningful</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-300 to-blue-300" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-blue-100/80 sm:text-base">
            Have a project in mind? Tell us about your requirements and our team will
            get back to you with the right solution.
          </p>
        </div>

        {/* Contact Container */}
        <div className="overflow-hidden rounded-[28px] border border-white/15 bg-white/10 shadow-2xl shadow-black/20 backdrop-blur-sm">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left Contact Info */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600/80 via-blue-700/80 to-indigo-900/90 p-7 text-white sm:p-9 lg:p-10">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

              <div className="pointer-events-none absolute right-6 top-8 h-20 w-20 rounded-full border border-white/10">
                <div className="absolute inset-3 rounded-full border border-white/10" />
              </div>

              <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-blue-100 shadow-lg backdrop-blur-md">
                  <Send size={20} />
                </div>

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Contact Infraplan
                </span>

                <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                  Let's discuss <br /> your next project.
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-blue-100/80">
                  From water infrastructure and engineering consultancy to digital
                  solutions, our team is ready to help you move your project forward.
                </p>

                {/* Contact Information List */}
                <div className="mt-8 space-y-4">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="group flex items-start gap-3 rounded-xl border border-transparent p-2 transition-all duration-300 hover:border-white/10 hover:bg-white/5"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-blue-100 transition-transform duration-300 group-hover:scale-110">
                          <Icon size={16} />
                        </div>
                        <div>
                          <p className="text-[9px] font-semibold uppercase tracking-widest text-blue-300">
                            {item.label}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-white/90 sm:text-sm">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Stats */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <p className="text-xl font-bold">15+</p>
                      <p className="mt-1 text-[9px] uppercase tracking-wider text-blue-300">Years</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold">100+</p>
                      <p className="mt-1 text-[9px] uppercase tracking-wider text-blue-300">Projects</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold">4+</p>
                      <p className="mt-1 text-[9px] uppercase tracking-wider text-blue-300">Countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white p-7 sm:p-9 lg:p-10">
              {submitted ? (
                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle size={34} strokeWidth={1.7} />
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-600">
                    Message Sent
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">Thank you!</h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                    Your enquiry has been received successfully. Our team will review
                    your requirements and contact you shortly.
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
                    <Clock size={13} />
                    Usually responds within 24 hours
                  </div>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-800"
                  >
                    Send another enquiry
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="mb-6">
                    <div className="flex items-center gap-2">
                      <Sparkles size={15} className="text-blue-600" />
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
                        Project Enquiry
                      </span>
                    </div>
                    <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
                      Tell us about your project
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                      Share a few details and we'll take it from there.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-slate-600"
                      >
                        Full Name <span className="ml-1 text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-slate-600"
                      >
                        Email Address <span className="ml-1 text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-slate-600"
                      >
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-service"
                        className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-slate-600"
                      >
                        Interested In
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-800 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      >
                        <option value="">Select a service</option>
                        <option value="engineering">Engineering & Construction</option>
                        <option value="hydraulic">Hydraulic Laboratory</option>
                        <option value="digital">SigmaToolBox</option>
                        <option value="consulting">Engineering Consultancy</option>
                        <option value="empanelment">Expert Empanelment</option>
                        <option value="partner">Sales Partner</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-slate-600"
                    >
                      Project Details <span className="ml-1 text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your project, requirements or questions..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm leading-6 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                      Attach Document
                      <span className="ml-1 font-normal normal-case tracking-normal text-slate-400">
                        Optional
                      </span>
                    </label>

                    {!file ? (
                      <div
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                        className={`relative rounded-xl border-2 border-dashed p-5 text-center transition-all ${
                          dragActive
                            ? "border-blue-500 bg-blue-50"
                            : "border-slate-200 bg-slate-50/50 hover:border-blue-400 hover:bg-blue-50/30"
                        }`}
                      >
                        <input
                          type="file"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip"
                          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                        />
                        <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                          <UploadCloud size={18} />
                        </div>
                        <p className="mt-2 text-xs font-semibold text-slate-700">
                          Upload project documents
                        </p>
                        <p className="mt-1 text-[10px] text-slate-400">
                          Drag & drop or click to browse · Max 10MB
                        </p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50/50 px-4 py-3">
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                            <FileText size={17} />
                          </div>
                          <div className="min-w-0">
                            <p className="truncate text-xs font-semibold text-slate-700">
                              {file.name}
                            </p>
                            <p className="mt-0.5 text-[10px] text-slate-400">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="ml-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-red-100 hover:text-red-500"
                        >
                          <X size={15} />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:from-blue-800 hover:to-indigo-800 hover:shadow-blue-600/30 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      <span>{isSubmitting ? "Sending..." : "Send Enquiry"}</span>
                      {isSubmitting ? (
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      ) : (
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 transition-transform group-hover:translate-x-1">
                          <ArrowRight size={15} />
                        </span>
                      )}
                    </button>
                    <p className="mt-2 text-center text-[9px] text-slate-400">
                      Your information is secure and will never be shared.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Status Strip */}
        <div className="mt-5 flex flex-col items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs text-blue-100/70">
              Our team is currently accepting new projects
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-blue-200">
            <Clock size={13} />
            Response within 24 hours
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.25;
          }
          50% {
            transform: translateY(-18px) translateX(8px);
            opacity: 0.7;
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   OUR LOCATIONS
============================================================ */

function LocationsSection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50/30 px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Our Locations
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {locations.map((loc) => (
            <div
              key={loc.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-base font-bold text-slate-900">{loc.title}</h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
                {loc.address}
              </p>

              <div className="mt-4 flex justify-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <MapPin size={17} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}