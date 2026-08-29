import React, { useState } from "react";
import {
  Send,
  UploadCloud,
  CheckCircle,
  FileText,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  Users,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 10 * 1024 * 1024) {
      setFile(selectedFile);
    } else {
      alert("File size must be less than 10MB");
    }
  };

  const removeFile = () => setFile(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.size <= 10 * 1024 * 1024) {
      setFile(droppedFile);
    } else {
      alert("File size must be less than 10MB");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const stats = [
    {
      icon: Building2,
      value: "100+",
      label: "Projects Delivered",
    },
    {
      icon: Users,
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      icon: Award,
      value: "12",
      label: "Industry Awards",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      {/* Background Gradients & Glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950" />
      <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-48 top-1/4 h-[600px] w-[600px] rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-3xl" />

      {/* Curved Top */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-10">
        <svg
          viewBox="0 0 1440 130"
          className="h-[70px] w-full sm:h-[100px] lg:h-[130px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,35 C1240,115 1060,105 900,65 C720,20 570,20 390,65 C220,108 100,105 0,55 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="animate-contact-float absolute rounded-full bg-white/20"
            style={{
              width: `${i % 3 === 0 ? 5 : 3}px`,
              height: `${i % 3 === 0 ? 5 : 3}px`,
              top: `${8 + ((i * 13) % 80)}%`,
              left: `${4 + ((i * 17) % 92)}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${5 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative Curved Line */}
      <div className="pointer-events-none absolute left-0 right-0 top-[12%] opacity-20">
        <svg
          viewBox="0 0 1440 180"
          className="h-32 w-full sm:h-40"
          preserveAspectRatio="none"
        >
          <path
            d="M-50,100 C180,20 320,30 500,95 C700,170 850,155 1030,80 C1190,15 1320,25 1490,100"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-36 lg:px-12 lg:pt-40">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-100 shadow-lg backdrop-blur-md">
            <Sparkles size={14} />
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            <span>Contact Us</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's Build Something <span className="text-blue-200">Amazing</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-300 to-blue-300" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-blue-100/80 sm:text-base">
            Have a project in mind? Reach out and let's create sustainable water infrastructure solutions together.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Panel */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/20 bg-white/[0.10] p-8 text-white shadow-2xl shadow-black/20 backdrop-blur-2xl transition-all duration-500 hover:bg-white/[0.13] sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />

            <div className="relative z-10">
              {/* Company Info */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-md">
                  <Building2 size={22} className="text-blue-200" />
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-tight text-white">
                    Infraplan Solutions
                  </h3>
                  <p className="text-sm text-blue-100/70">
                    Water Infrastructure Experts
                  </p>
                </div>
              </div>

              <p className="max-w-sm text-sm leading-relaxed text-blue-100/75">
                From feasibility studies to full-scale execution, we partner with utilities and municipalities to deliver lasting water infrastructure solutions.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/15 bg-white/[0.08] p-3 text-center shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/[0.15]"
                  >
                    <Icon size={18} className="mx-auto mb-1 text-blue-200" />
                    <div className="text-lg font-bold text-white">{value}</div>
                    <div className="text-[10px] uppercase tracking-wider text-blue-100/60">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="relative z-10 mt-10 flex flex-col gap-3 border-t border-white/15 pt-6">
              {[
                {
                  icon: MapPin,
                  label: "Office",
                  value:
                    "109, Rajaji Complex, 1st Lane, Shahupuri, Kolhapur – 416001, Maharashtra | Infraplan House, MG Road, Bengaluru, Karnataka 560001",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91-231-2655151",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "contactus@infraplan.in",
                },
                {
                  icon: Clock,
                  label: "Working Hours",
                  value: "Mon - Sat, 9:30 AM - 6:00 PM",
                },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="group flex cursor-pointer items-start gap-4 rounded-xl p-2 transition-all duration-300 hover:bg-white/10"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 shadow backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                    <Icon size={17} className="text-blue-200" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-100/50">
                      {label}
                    </p>
                    <p className="text-sm text-white/90">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/30 bg-white/[0.96] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-400/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

            {submitted ? (
              /* Success State */
              <div className="relative flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-2xl" />
                  <div className="relative mb-6 flex h-20 w-20 animate-bounce items-center justify-center rounded-full border border-emerald-200 bg-emerald-100/80 text-emerald-600 backdrop-blur-md">
                    <CheckCircle size={40} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
                  Thank you for contacting Infraplan. Our team will review your inquiry and respond within 24 hours.
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
                  <Clock size={14} />
                  <span>Response time: ~4 hours</span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      message: "",
                      service: "",
                    });
                    setFile(null);
                  }}
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-800"
                >
                  Send another message
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ) : (
              /* Input Form */
              <form onSubmit={handleSubmit} className="relative space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition-all duration-300 hover:border-slate-300 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. rahul@company.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition-all duration-300 hover:border-slate-300 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                    />
                  </div>
                </div>

                {/* Phone & Service */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition-all duration-300 hover:border-slate-300 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-800 transition-all duration-300 hover:border-slate-300 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                    >
                      <option value="">Select a service</option>
                      <option value="consultancy">Consultancy</option>
                      <option value="feasibility">Feasibility Studies</option>
                      <option value="execution">Project Execution</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                  >
                    Message / Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements, project scope, or any questions..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition-all duration-300 hover:border-slate-300 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Attach Documents (Optional)
                  </label>

                  {!file ? (
                    <div
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                      className={`relative cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition-all duration-300 ${
                        dragActive
                          ? "border-blue-400 bg-blue-50"
                          : "border-slate-200 bg-slate-50/70 hover:border-blue-300 hover:bg-blue-50/40"
                      }`}
                    >
                      <input
                        type="file"
                        id="file-upload"
                        onChange={handleFileChange}
                        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip,.rar"
                      />
                      <UploadCloud
                        size={36}
                        className={`mx-auto mb-3 transition-colors duration-300 ${
                          dragActive ? "text-blue-600" : "text-slate-400"
                        }`}
                      />
                      <p className="text-sm font-semibold text-slate-700">
                        {dragActive ? "Drop your file here" : "Upload your file"}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Drag & drop or click to browse
                      </p>

                      <div className="mt-3 flex flex-wrap justify-center gap-2">
                        {["PDF", "DOCX", "Images", "ZIP"].map((type) => (
                          <span
                            key={type}
                            className="rounded-full border border-slate-200 bg-white px-2 py-1 text-[10px] text-slate-600"
                          >
                            {type}
                          </span>
                        ))}
                      </div>

                      <p className="mt-2 text-[10px] text-slate-400">
                        Max file size: 10MB
                      </p>
                    </div>
                  ) : (
                    <div className="group flex items-center justify-between rounded-xl border border-blue-200 bg-blue-50 p-4">
                      <div className="flex min-w-0 items-center gap-4 overflow-hidden">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-700">
                          <FileText size={22} />
                        </div>
                        <div className="min-w-0 truncate">
                          <p className="truncate text-sm font-semibold text-slate-800">
                            {file.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            {(file.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-blue-200 hover:text-red-500"
                        title="Remove file"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-blue-500/40 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="h-5 w-5 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send
                        size={18}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-slate-400">
                  By submitting this form, you agree to our Privacy Policy. We'll never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Floating Animation Styles */}
      <style>{`
        @keyframes contact-float {
          0%, 100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.25;
          }
          50% {
            transform: translate3d(15px, -25px, 0);
            opacity: 0.7;
          }
        }
        .animate-contact-float {
          animation: contact-float 6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-contact-float {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}