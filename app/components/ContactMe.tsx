"use client";
import React, { useState } from "react";
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Phone,
  Send,
} from "lucide-react";

interface ContactMeProps {
  heading?: string;
  intro?: string;
}

const contactLinks = [
  {
    label: "Email",
    value: "lahirumadhushan80@gmail.com",
    href: "mailto:lahirumadhushan80@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+94 76 654 1631",
    href: "tel:+94766541631",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "lahiru-jayarathne",
    href: "https://www.linkedin.com/in/lahiru-jayarathne-b29676271/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "Lahiru-2000",
    href: "https://github.com/Lahiru-2000",
    icon: Github,
  },
];

const emptyForm = { name: "", email: "", subject: "", message: "" };

const inputClass =
  "w-full rounded-lg border border-gray-700 bg-gray-900/60 px-4 py-3 text-white placeholder-gray-500 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40";

function ContactMe({
  heading = "Contact Me",
  intro = "Have a project in mind or an opportunity to discuss? Send me a message or reach out directly. I'd be glad to hear from you.",
}: ContactMeProps) {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    // Honeypot field: real users never fill it, bots usually do
    const botcheck = (e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement)?.checked;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
          subject: `Portfolio: ${formData.subject || "New message"}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData(emptyForm);
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="px-8 md:px-20 text-white">
      <div className="max-w-7xl mx-auto pt-16">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="tracking-wide text-blue-400">{heading}</span>
          </h2>
          <p className="max-w-2xl text-lg text-gray-300 leading-relaxed">{intro}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Contact Details */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 content-start">
            {contactLinks.map(({ label, value, href, icon: Icon }) => {
              const external = href.startsWith("http");
              return (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-lg border border-gray-700 bg-gray-800 p-4 transition-colors duration-200 hover:border-blue-500/60 hover:bg-gray-800/80"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                    <Icon size={20} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-medium uppercase tracking-wider text-gray-400">
                      {label}
                    </span>
                    <span className="block break-all font-medium text-gray-100">{value}</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="flex-shrink-0 text-gray-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
                  />
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-lg border border-gray-700 bg-gray-800 p-6 md:p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-gray-300">
                Subject <span className="text-gray-500">(optional)</span>
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="Job opportunity, freelance project, ..."
                value={formData.subject}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me a bit about what you have in mind..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${inputClass} resize-y`}
              />
            </div>

            <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div aria-live="polite" className="text-sm">
                {status === "success" && (
                  <p className="flex items-center gap-2 text-green-400">
                    <CheckCircle2 size={18} /> Thanks for reaching out! I&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-2 text-red-400">
                    <AlertCircle size={18} /> Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex flex-shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </div>

            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
