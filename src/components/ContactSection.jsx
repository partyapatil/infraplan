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
    { icon: Building2, value: "150+", label: "Projects Delivered" },
    { icon: Users, value: "98%", label: "Client Satisfaction" },
    { icon: Award, value: "12", label: "Industry Awards" },
  ];

  return (
    <section className="relative w-full px-5 sm:px-8 lg:px-12 py-20 overflow-hidden">
      {/* Wave Divider at Top */}
      <div className="absolute top-0 left-0 right-0 z-10 leading-none">
        <svg viewBox="0 0 1440 80" className="w-full h-16 sm:h-20" preserveAspectRatio="none">
          <path
            d="M0,32 C240,80 480,0 720,24 C960,48 1200,96 1440,40 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-slate-50" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-blue-400/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 -right-24 w-[380px] h-[380px] bg-indigo-400/25 rounded-full blur-3xl animate-float-slow delay-1000" />
        <div className="absolute -bottom-32 left-1/4 w-[440px] h-[440px] bg-cyan-300/25 rounded-full blur-3xl animate-float-slow delay-2000" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-purple-300/20 rounded-full blur-3xl animate-float-slow delay-500" />
      </div>
      
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto pt-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md text-blue-700 text-xs font-semibold tracking-wider uppercase mb-4 border border-white/80 shadow-sm">
            <Sparkles size={14} />
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Contact Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Let's Build Something <span className="text-blue-600">Amazing</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Reach out and let's create sustainable water
            infrastructure solutions together.
          </p>
        </div>

        {/* Split layout: glass info panel left, glass form right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: frosted glass info panel */}
          <div className="relative flex flex-col justify-between p-8 sm:p-10 bg-white/40 backdrop-blur-2xl rounded-3xl text-slate-900 overflow-hidden shadow-xl shadow-slate-900/5 border border-white/60 hover:shadow-2xl hover:shadow-slate-900/10 transition-shadow duration-500">
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 flex items-center justify-center shadow-sm">
                  <Building2 size={22} className="text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-tight text-slate-900">
                    Infraplan Solutions
                  </h3>
                  <p className="text-sm text-slate-500">Water Infrastructure Experts</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                From feasibility studies to full-scale execution, we partner with
                utilities and municipalities to deliver lasting water infrastructure
                solutions.
              </p>

              <div className="grid grid-cols-3 gap-3 mt-8">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="text-center bg-white/50 backdrop-blur-md rounded-2xl p-3 border border-white/70 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                  >
                    <Icon size={18} className="mx-auto text-blue-600 mb-1" />
                    <div className="text-lg font-bold text-slate-900">{value}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex flex-col gap-3 mt-10 pt-6 border-t border-white/60">
              {[
                { icon: MapPin, label: "Office", value: "Infraplan House, MG Road, Bengaluru, Karnataka 560001" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: Mail, label: "Email", value: "hello@infraplan.com" },
                { icon: Clock, label: "Working Hours", value: "Mon - Sat, 9:00 AM - 6:00 PM" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 group cursor-pointer p-2 rounded-xl hover:bg-white/40 transition-all duration-300"
                >
                  <span className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur-md border border-white/70 flex items-center justify-center shrink-0 group-hover:bg-white/80 group-hover:scale-110 transition-all duration-300">
                    <Icon size={17} className="text-blue-700" />
                  </span>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                      {label}
                    </p>
                    <p className="text-sm text-slate-800">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: frosted glass form */}
          <div className="relative bg-white/50 backdrop-blur-2xl rounded-3xl border border-white/70 shadow-xl shadow-slate-900/5 p-6 sm:p-8 hover:shadow-2xl hover:shadow-slate-900/10 transition-shadow duration-500">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none" />

            {submitted ? (
              <div className="relative py-12 text-center flex flex-col items-center h-full justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-2xl" />
                  <div className="relative w-20 h-20 rounded-full bg-emerald-100/80 backdrop-blur-md border border-emerald-200 text-emerald-600 flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle size={40} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-sm text-slate-500 mt-3 max-w-sm leading-relaxed">
                  Thank you for contacting Infraplan. Our team will review your inquiry
                  and respond within 24 hours.
                </p>
                <div className="flex items-center gap-2 mt-6 text-xs text-slate-400">
                  <Clock size={14} />
                  <span>Response time: ~4 hours</span>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", message: "", service: "" });
                    setFile(null);
                  }}
                  className="mt-8 group inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
                >
                  Send another message
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
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
                      className="w-full px-4 py-3 text-sm text-slate-800 bg-white/60 backdrop-blur-md rounded-xl border border-white/80 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 focus:bg-white/90 transition-all duration-300 hover:bg-white/80 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
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
                      className="w-full px-4 py-3 text-sm text-slate-800 bg-white/60 backdrop-blur-md rounded-xl border border-white/80 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 focus:bg-white/90 transition-all duration-300 hover:bg-white/80 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 text-sm text-slate-800 bg-white/60 backdrop-blur-md rounded-xl border border-white/80 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 focus:bg-white/90 transition-all duration-300 hover:bg-white/80 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-sm text-slate-800 bg-white/60 backdrop-blur-md rounded-xl border border-white/80 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 focus:bg-white/90 transition-all duration-300 hover:bg-white/80 appearance-none"
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

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
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
                    className="w-full px-4 py-3 text-sm text-slate-800 bg-white/60 backdrop-blur-md rounded-xl border border-white/80 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 focus:bg-white/90 transition-all duration-300 hover:bg-white/80 resize-none placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Attach Documents (Optional)
                  </label>

                  {!file ? (
                    <div
                      className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer backdrop-blur-md ${
                        dragActive
                          ? "border-blue-400 bg-blue-50/40"
                          : "border-white/80 bg-white/40 hover:border-blue-300 hover:bg-blue-50/30"
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <input
                        type="file"
                        id="file-upload"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
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
                      <p className="text-xs text-slate-400 mt-1">
                        Drag & drop or click to browse
                      </p>
                      <div className="flex flex-wrap justify-center gap-2 mt-3">
                        <span className="text-[10px] bg-white/70 text-slate-600 px-2 py-1 rounded-full border border-white/80">PDF</span>
                        <span className="text-[10px] bg-white/70 text-slate-600 px-2 py-1 rounded-full border border-white/80">DOCX</span>
                        <span className="text-[10px] bg-white/70 text-slate-600 px-2 py-1 rounded-full border border-white/80">Images</span>
                        <span className="text-[10px] bg-white/70 text-slate-600 px-2 py-1 rounded-full border border-white/80">ZIP</span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-2">Max file size: 10MB</p>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-4 bg-blue-50/60 backdrop-blur-md border border-blue-200/70 rounded-xl group hover:border-blue-300 transition-all duration-300">
                      <div className="flex items-center gap-4 overflow-hidden min-w-0">
                        <div className="w-12 h-12 rounded-xl bg-white/70 text-blue-700 flex items-center justify-center shrink-0 border border-white/80">
                          <FileText size={22} />
                        </div>
                        <div className="truncate min-w-0">
                          <p className="text-sm font-semibold text-slate-800 truncate">{file.name}</p>
                          <p className="text-xs text-slate-500">
                            {(file.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-2 rounded-lg hover:bg-blue-200/50 text-slate-400 hover:text-red-500 transition-colors"
                        title="Remove file"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold py-4 px-6 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  By submitting this form, you agree to our Privacy Policy. We'll never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -20px) scale(1.1); }
          66% { transform: translate(-10px, 10px) scale(0.9); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
        .delay-2000 {
          animation-delay: 2000ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </section>
  );
}