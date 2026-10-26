import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  FileText,
  UploadCloud,
  X,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [error, setError] = useState(null);
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
    setError(null);

    const payload = new FormData();
    payload.append("FullName", formData.name);
    payload.append("Email", formData.email);
    payload.append("Phone", formData.phone);

    const serviceMapping = {
      engineering: 1,
      hydraulic: 2,
      digital: 3,
      consulting: 4,
      empanelment: 5,
      partner: 6,
      other: 7,
    };
    const serviceId = serviceMapping[formData.service] || 1;
    payload.append("Service", serviceId);
    payload.append("ProjectDetails", formData.message);

    if (file) payload.append("Attachment", file);

    try {
      const response = await fetch(
        "https://staging.infraplan.co.in:7052/api/contactus",
        {
          method: "POST",
          body: payload,
        }
      );

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setFile(null);
  };

  return (
    <section
      id="contact-form"
      aria-labelledby="contact-heading"
      className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12"
    >
      <div className="mx-auto max-w-2xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2
            id="contact-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Tell us about your project
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Share a few details and we&apos;ll take it from there.
          </p>
        </div>

        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-10 text-center"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle size={34} strokeWidth={1.7} aria-hidden="true" />
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
              <Clock size={13} aria-hidden="true" />
              Usually responds within 24 hours
            </div>

            <button
              type="button"
              onClick={resetForm}
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-800"
            >
              Send another enquiry
              <ArrowRight
                size={15}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
            aria-label="Contact enquiry form"
            noValidate
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-slate-600"
                >
                  Full Name <span className="ml-1 text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  autoComplete="name"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-slate-600"
                >
                  Email Address <span className="ml-1 text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  autoComplete="email"
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
                  autoComplete="tel"
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
                  <option value="engineering">Engineering &amp; Construction</option>
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
                Project Details <span className="ml-1 text-red-500" aria-hidden="true">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
                rows={4}
                placeholder="Tell us about your project, requirements or questions..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm leading-6 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            <div>
              <label
                htmlFor="contact-file"
                className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-slate-600"
              >
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
                    id="contact-file"
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip"
                    aria-label="Upload project documents (max 10MB)"
                    className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                  />
                  <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <UploadCloud size={18} aria-hidden="true" />
                  </div>
                  <p className="mt-2 text-xs font-semibold text-slate-700">
                    Upload project documents
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Drag &amp; drop or click to browse · Max 10MB
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50/50 px-4 py-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                      <FileText size={17} aria-hidden="true" />
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
                    aria-label={`Remove file ${file.name}`}
                    className="ml-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-red-100 hover:text-red-500"
                  >
                    <X size={15} aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-xs font-medium text-red-600"
              >
                {error}
              </p>
            )}

            <div className="pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="group flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:from-blue-800 hover:to-indigo-800 hover:shadow-blue-600/30 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span>{isSubmitting ? "Sending..." : "Send Enquiry"}</span>
                {isSubmitting ? (
                  <span
                    className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"
                    aria-hidden="true"
                  />
                ) : (
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 transition-transform group-hover:translate-x-1">
                    <ArrowRight size={15} aria-hidden="true" />
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
    </section>
  );
}