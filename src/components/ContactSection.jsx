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

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
      
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Main curved gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950" />

      {/* Large gradient glow - top left */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-blue-500/25 blur-3xl pointer-events-none" />

      {/* Large gradient glow - right */}
      <div className="absolute top-1/4 -right-48 w-[600px] h-[600px] rounded-full bg-indigo-500/25 blur-3xl pointer-events-none" />

      {/* Cyan glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

      {/* Purple glow */}
      <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

      {/* =========================================================
          CURVED TOP
      ========================================================= */}

      <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 130"
          className="w-full h-[70px] sm:h-[100px] lg:h-[130px]"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0,0
              L1440,0
              L1440,35
              C1240,115 1060,105 900,65
              C720,20 570,20 390,65
              C220,108 100,105 0,55
              Z
            "
            fill="white"
          />
        </svg>
      </div>

      {/* =========================================================
          GRID TEXTURE
      ========================================================= */}

      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* =========================================================
          FLOATING PARTICLES
      ========================================================= */}

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 animate-contact-float"
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

      {/* =========================================================
          DECORATIVE CURVED LINE
      ========================================================= */}

      <div className="absolute top-[12%] left-0 right-0 opacity-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 180"
          className="w-full h-32 sm:h-40"
          preserveAspectRatio="none"
        >
          <path
            d="
              M-50,100
              C180,20 320,30 500,95
              C700,170 850,155 1030,80
              C1190,15 1320,25 1490,100
            "
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-36 lg:pt-40 pb-24 sm:pb-32">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-blue-100 text-xs font-semibold tracking-wider uppercase mb-5 border border-white/20 shadow-lg">
            <Sparkles size={14} />

            <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

            <span>Contact Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Let's Build Something{" "}
            <span className="text-blue-200">
              Amazing
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full mx-auto mt-5" />

          <p className="text-sm sm:text-base text-blue-100/80 mt-5 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Reach out and let's create sustainable
            water infrastructure solutions together.
          </p>
        </div>

        {/* =====================================================
            SPLIT LAYOUT
        ===================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ===================================================
              LEFT PANEL
          =================================================== */}

          <div
            className="
              relative
              flex
              flex-col
              justify-between
              p-8
              sm:p-10
              bg-white/[0.10]
              backdrop-blur-2xl
              rounded-[2rem]
              text-white
              overflow-hidden
              shadow-2xl
              shadow-black/20
              border
              border-white/20
              hover:bg-white/[0.13]
              transition-all
              duration-500
            "
          >

            {/* Panel glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">

              {/* Company */}
              <div className="flex items-center gap-3 mb-6">

                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                  <Building2
                    size={22}
                    className="text-blue-200"
                  />
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

              <p className="text-sm text-blue-100/75 leading-relaxed max-w-sm">
                From feasibility studies to full-scale execution, we partner
                with utilities and municipalities to deliver lasting water
                infrastructure solutions.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-8">

                {stats.map(({ icon: Icon, value, label }) => (

                  <div
                    key={label}
                    className="
                      text-center
                      bg-white/[0.08]
                      backdrop-blur-md
                      rounded-2xl
                      p-3
                      border
                      border-white/15
                      shadow-lg
                      hover:bg-white/[0.15]
                      hover:scale-105
                      transition-all
                      duration-300
                    "
                  >

                    <Icon
                      size={18}
                      className="mx-auto text-blue-200 mb-1"
                    />

                    <div className="text-lg font-bold text-white">
                      {value}
                    </div>

                    <div className="text-[10px] text-blue-100/60 uppercase tracking-wider">
                      {label}
                    </div>

                  </div>

                ))}

              </div>
            </div>

            {/* Contact Details */}

            <div className="relative z-10 flex flex-col gap-3 mt-10 pt-6 border-t border-white/15">

              {[
            {
  icon: MapPin,
  label: "Office",
  value: "109, Rajaji Complex, 1st Lane, Shahupuri, Kolhapur – 416001, Maharashtra | Infraplan House, MG Road, Bengaluru, Karnataka 560001",
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
                  className="
                    flex
                    items-start
                    gap-4
                    group
                    cursor-pointer
                    p-2
                    rounded-xl
                    hover:bg-white/10
                    transition-all
                    duration-300
                  "
                >

                  <span
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-white/10
                      backdrop-blur-md
                      border
                      border-white/15
                      flex
                      items-center
                      justify-center
                      shrink-0
                      group-hover:bg-white/20
                      group-hover:scale-110
                      transition-all
                      duration-300
                    "
                  >
                    <Icon
                      size={17}
                      className="text-blue-200"
                    />
                  </span>

                  <div>

                    <p className="text-xs text-blue-100/50 uppercase tracking-wider font-semibold">
                      {label}
                    </p>

                    <p className="text-sm text-white/90">
                      {value}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* ===================================================
              RIGHT FORM
          =================================================== */}

          <div
            className="
              relative
              bg-white/[0.96]
              backdrop-blur-2xl
              rounded-[2rem]
              border
              border-white/30
              shadow-2xl
              shadow-black/20
              p-6
              sm:p-8
              overflow-hidden
            "
          >

            {/* Form background glow */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

            {submitted ? (

              /* =================================================
                 SUCCESS STATE
              ================================================= */

              <div className="relative py-12 text-center flex flex-col items-center h-full justify-center">

                <div className="relative">

                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-2xl" />

                  <div className="relative w-20 h-20 rounded-full bg-emerald-100/80 backdrop-blur-md border border-emerald-200 text-emerald-600 flex items-center justify-center mb-6 animate-bounce">

                    <CheckCircle
                      size={40}
                      strokeWidth={1.5}
                    />

                  </div>

                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  Message Sent!
                </h3>

                <p className="text-sm text-slate-500 mt-3 max-w-sm leading-relaxed">
                  Thank you for contacting Infraplan. Our team will review
                  your inquiry and respond within 24 hours.
                </p>

                <div className="flex items-center gap-2 mt-6 text-xs text-slate-400">
                  <Clock size={14} />
                  <span>Response time: ~4 hours</span>
                </div>

                <button
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
                  className="mt-8 group inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
                >
                  Send another message

                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

              </div>

            ) : (

              /* =================================================
                 FORM
              ================================================= */

              <form
                onSubmit={handleSubmit}
                className="relative space-y-6"
              >

                {/* Name + Email */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  <div>

                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Full Name{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className="
                        w-full
                        px-4
                        py-3
                        text-sm
                        text-slate-800
                        bg-slate-50/80
                        rounded-xl
                        border
                        border-slate-200
                        focus:outline-none
                        focus:border-blue-400
                        focus:ring-2
                        focus:ring-blue-400/20
                        focus:bg-white
                        transition-all
                        duration-300
                        hover:border-slate-300
                        placeholder:text-slate-400
                      "
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Email Address{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. rahul@company.com"
                      className="
                        w-full
                        px-4
                        py-3
                        text-sm
                        text-slate-800
                        bg-slate-50/80
                        rounded-xl
                        border
                        border-slate-200
                        focus:outline-none
                        focus:border-blue-400
                        focus:ring-2
                        focus:ring-blue-400/20
                        focus:bg-white
                        transition-all
                        duration-300
                        hover:border-slate-300
                        placeholder:text-slate-400
                      "
                    />

                  </div>

                </div>

                {/* Phone + Service */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  <div>

                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
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
                      className="
                        w-full
                        px-4
                        py-3
                        text-sm
                        text-slate-800
                        bg-slate-50/80
                        rounded-xl
                        border
                        border-slate-200
                        focus:outline-none
                        focus:border-blue-400
                        focus:ring-2
                        focus:ring-blue-400/20
                        focus:bg-white
                        transition-all
                        duration-300
                        hover:border-slate-300
                        placeholder:text-slate-400
                      "
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="service"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Service Interested In
                    </label>

                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="
                        w-full
                        px-4
                        py-3
                        text-sm
                        text-slate-800
                        bg-slate-50/80
                        rounded-xl
                        border
                        border-slate-200
                        focus:outline-none
                        focus:border-blue-400
                        focus:ring-2
                        focus:ring-blue-400/20
                        focus:bg-white
                        transition-all
                        duration-300
                        hover:border-slate-300
                        appearance-none
                      "
                    >
                      <option value="">
                        Select a service
                      </option>

                      <option value="consultancy">
                        Consultancy
                      </option>

                      <option value="feasibility">
                        Feasibility Studies
                      </option>

                      <option value="execution">
                        Project Execution
                      </option>

                      <option value="maintenance">
                        Maintenance
                      </option>

                      <option value="other">
                        Other
                      </option>
                    </select>

                  </div>

                </div>

                {/* Message */}

                <div>

                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Message / Project Details{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements, project scope, or any questions..."
                    className="
                      w-full
                      px-4
                      py-3
                      text-sm
                      text-slate-800
                      bg-slate-50/80
                      rounded-xl
                      border
                      border-slate-200
                      focus:outline-none
                      focus:border-blue-400
                      focus:ring-2
                      focus:ring-blue-400/20
                      focus:bg-white
                      transition-all
                      duration-300
                      hover:border-slate-300
                      resize-none
                      placeholder:text-slate-400
                    "
                  />

                </div>

                {/* File Upload */}

                <div>

                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Attach Documents (Optional)
                  </label>

                  {!file ? (

                    <div
                      className={`
                        relative
                        border-2
                        border-dashed
                        rounded-xl
                        p-8
                        text-center
                        transition-all
                        duration-300
                        cursor-pointer
                        ${
                          dragActive
                            ? "border-blue-400 bg-blue-50"
                            : "border-slate-200 bg-slate-50/70 hover:border-blue-300 hover:bg-blue-50/40"
                        }
                      `}
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
                        className={`
                          mx-auto mb-3 transition-colors duration-300
                          ${
                            dragActive
                              ? "text-blue-600"
                              : "text-slate-400"
                          }
                        `}
                      />

                      <p className="text-sm font-semibold text-slate-700">
                        {dragActive
                          ? "Drop your file here"
                          : "Upload your file"}
                      </p>

                      <p className="text-xs text-slate-400 mt-1">
                        Drag & drop or click to browse
                      </p>

                      <div className="flex flex-wrap justify-center gap-2 mt-3">

                        {["PDF", "DOCX", "Images", "ZIP"].map(
                          (type) => (
                            <span
                              key={type}
                              className="text-[10px] bg-white text-slate-600 px-2 py-1 rounded-full border border-slate-200"
                            >
                              {type}
                            </span>
                          )
                        )}

                      </div>

                      <p className="text-[10px] text-slate-400 mt-2">
                        Max file size: 10MB
                      </p>

                    </div>

                  ) : (

                    <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-xl group">

                      <div className="flex items-center gap-4 overflow-hidden min-w-0">

                        <div className="w-12 h-12 rounded-xl bg-white text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                          <FileText size={22} />
                        </div>

                        <div className="truncate min-w-0">

                          <p className="text-sm font-semibold text-slate-800 truncate">
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
                        className="p-2 rounded-lg hover:bg-blue-200 text-slate-400 hover:text-red-500 transition-colors"
                        title="Remove file"
                      >
                        <X size={18} />
                      </button>

                    </div>

                  )}

                </div>

                {/* Submit */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full
                    group
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    hover:from-blue-700
                    hover:to-indigo-700
                    text-white
                    text-sm
                    font-semibold
                    py-4
                    px-6
                    rounded-xl
                    shadow-lg
                    shadow-blue-500/25
                    hover:shadow-blue-500/40
                    transition-all
                    duration-300
                    flex
                    items-center
                    justify-center
                    gap-2
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                  "
                >

                  {isSubmitting ? (

                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
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

                      <span>
                        Sending Message...
                      </span>
                    </>

                  ) : (

                    <>
                      <span>
                        Send Message
                      </span>

                      <Send
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      />
                    </>

                  )}

                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  By submitting this form, you agree to our Privacy Policy.
                  We'll never share your data.
                </p>

              </form>

            )}

          </div>

        </div>
      </div>

      {/* =========================================================
          BOTTOM CURVE
      ========================================================= */}

      {/* <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-[70px] sm:h-[90px] lg:h-[110px]"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0,100
              L1440,100
              L1440,65
              C1240,5 1070,10 900,45
              C700,85 560,90 380,48
              C210,10 100,20 0,70
              Z
            "
            fill="#ffffff"
          />
        </svg>
      </div> */}

      {/* =========================================================
          ANIMATIONS
      ========================================================= */}

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