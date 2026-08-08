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
} from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Infraplan House, Bengaluru, Karnataka",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@infraplan.in",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat · 9:00 AM - 6:00 PM",
  },
];

export default function ContactSection() {
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

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    }

    if (e.type === "dragleave") {
      setDragActive(false);
    }
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

  const removeFile = () => {
    setFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    /*
      Add your API call here.

      Example:

      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      if (file) {
        data.append("file", file);
      }

      await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
    */

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setSubmitted(false);

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    setFile(null);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-slate-100 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <div className="mb-10 text-center">

          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-700">

            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

            Get In Touch

          </span>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">

            Let's Build Something{" "}

            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Meaningful
            </span>

          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">
            Have a project in mind? Tell us about your requirements and our
            team will get back to you with the right solution.
          </p>

        </div>

        {/* =====================================================
            CONTACT CONTAINER
        ====================================================== */}

        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/5">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

            {/* =================================================
                LEFT CONTACT INFO
            ================================================== */}

            <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-7 text-white sm:p-9 lg:p-10">

              {/* Decorative circles */}

              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-2xl" />

              <div className="relative z-10">

                {/* Icon */}

                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-100 ring-1 ring-white/10">
                  <Send size={19} />
                </div>

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Contact Infraplan
                </span>

                <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                  Let's discuss
                  <br />
                  your next project.
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-blue-100/80">
                  From water infrastructure and engineering consultancy to
                  digital solutions, our team is ready to help you move your
                  project forward.
                </p>

                {/* Contact Information */}

                <div className="mt-8 space-y-5">

                  {contactDetails.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="flex items-start gap-3"
                      >

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-blue-100 ring-1 ring-white/10">
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

                <div className="mt-9 border-t border-white/10 pt-6">

                  <div className="grid grid-cols-3 gap-3">

                    <div>
                      <p className="text-xl font-bold">
                        15+
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-wider text-blue-300">
                        Years
                      </p>
                    </div>

                    <div>
                      <p className="text-xl font-bold">
                        300+
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-wider text-blue-300">
                        Projects
                      </p>
                    </div>

                    <div>
                      <p className="text-xl font-bold">
                        20+
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-wider text-blue-300">
                        Countries
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            </div>

            {/* =================================================
                RIGHT FORM
            ================================================== */}

            <div className="p-7 sm:p-9 lg:p-10">

              {submitted ? (

                /* =================================================
                   SUCCESS
                ================================================== */

                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">

                    <CheckCircle
                      size={34}
                      strokeWidth={1.7}
                    />

                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-600">
                    Message Sent
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    Thank you!
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                    Your enquiry has been received successfully. Our team
                    will review your requirements and contact you shortly.
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
                    <Clock size={13} />
                    Usually responds within 24 hours
                  </div>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
                  >
                    Send another enquiry

                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                </div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* Form Header */}

                  <div className="mb-6">

                    <div className="flex items-center gap-2">

                      <Sparkles
                        size={15}
                        className="text-blue-600"
                      />

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

                  {/* =================================================
                      NAME + EMAIL
                  ================================================== */}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                    <div>

                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-slate-600"
                      >
                        Full Name
                        <span className="ml-1 text-red-500">*</span>
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
                        Email Address
                        <span className="ml-1 text-red-500">*</span>
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

                  {/* =================================================
                      PHONE + SERVICE
                  ================================================== */}

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

                        <option value="">
                          Select a service
                        </option>

                        <option value="engineering">
                          Engineering & Construction
                        </option>

                        <option value="hydraulic">
                          Hydraulic Laboratory
                        </option>

                        <option value="digital">
                          SigmaToolBox
                        </option>

                        <option value="consulting">
                          Engineering Consultancy
                        </option>

                        <option value="other">
                          Other
                        </option>

                      </select>

                    </div>

                  </div>

                  {/* =================================================
                      MESSAGE
                  ================================================== */}

                  <div>

                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-slate-600"
                    >
                      Project Details
                      <span className="ml-1 text-red-500">*</span>
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

                  {/* =================================================
                      FILE UPLOAD
                  ================================================== */}

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

                  {/* =================================================
                      SUBMIT BUTTON
                  ================================================== */}

                  <div className="pt-1">

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:from-blue-800 hover:to-indigo-800 hover:shadow-blue-600/30 disabled:cursor-not-allowed disabled:opacity-70"
                    >

                      <span>
                        {isSubmitting
                          ? "Sending..."
                          : "Send Enquiry"}
                      </span>

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

        {/* =====================================================
            BOTTOM STRIP
        ====================================================== */}

        <div className="mt-5 flex flex-col items-center justify-between gap-3 rounded-xl border border-slate-200/70 bg-white/70 px-5 py-4 backdrop-blur-sm sm:flex-row">

          <div className="flex items-center gap-2">

            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

            <span className="text-xs text-slate-500">
              Our team is currently accepting new projects
            </span>

          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-blue-700">
            <Clock size={13} />
            Response within 24 hours
          </div>

        </div>

      </div>
    </section>
  );
}
