import { useState, type FormEvent } from "react";
import { SERVICES } from "../data/services";
import { SITE, whatsappLink } from "../data/siteConfig";

interface FormState {
  name: string;
  company: string;
  contact: string;
  email: string;
  service: string;
  origin: string;
  destination: string;
  cargo: string;
  date: string;
  details: string;
}

const EMPTY: FormState = {
  name: "",
  company: "",
  contact: "",
  email: "",
  service: "",
  origin: "",
  destination: "",
  cargo: "",
  date: "",
  details: "",
};

export default function QuoteForm({ topic }: { topic?: string }) {
  const [form, setForm] = useState<FormState>({ ...EMPTY, service: topic ?? "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const update = (k: keyof FormState, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.contact.trim()) e.contact = "Please enter a phone or WhatsApp number.";
    if (!form.service) e.service = "Please select a service.";
    if (!form.origin.trim()) e.origin = "Please enter the origin.";
    if (!form.destination.trim()) e.destination = "Please enter the destination.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildMessage = () => {
    const lines = [
      `Hello Umris Enterprise Logistics, I'd like to request a quotation.`,
      ``,
      `Name: ${form.name}`,
      `Company: ${form.company || "—"}`,
      `Contact: ${form.contact}`,
      `Email: ${form.email || "—"}`,
      `Service: ${form.service || "—"}`,
      `From: ${form.origin}`,
      `To: ${form.destination}`,
      `Cargo / Project: ${form.cargo || "—"}`,
      `Preferred date: ${form.date || "—"}`,
      `Details: ${form.details || "—"}`,
    ];
    return lines.join("\n");
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    const msg = buildMessage();
    if (form.email) {
      const mail = `mailto:${SITE.email}?subject=${encodeURIComponent(
        "Logistics Quotation Request"
      )}&body=${encodeURIComponent(msg)}`;
      window.location.href = mail;
    } else {
      window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    }
    setStatus("ok");
  };

  const field = (
    k: keyof FormState,
    label: string,
    placeholder: string,
    full = false,
    type = "text"
  ) => (
    <div className={`field ${full ? "field--full" : ""}`}>
      <label htmlFor={k}>
        {label} {["name", "contact", "service", "origin", "destination"].includes(k) && <span className="req">*</span>}
      </label>
      <input
        id={k}
        type={type}
        value={form[k]}
        placeholder={placeholder}
        onChange={(e) => update(k, e.target.value)}
        aria-invalid={!!errors[k]}
      />
      {errors[k] && <span className="field__error">{errors[k]}</span>}
    </div>
  );

  return (
    <form className="quote-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        {field("name", "Name", "Your full name")}
        {field("company", "Company", "Company / organisation")}
        {field("contact", "Phone / WhatsApp", "e.g. 07xx xxx xxx")}
        {field("email", "Email", "you@company.com")}
        <div className="field">
          <label htmlFor="service">
            Service required <span className="req">*</span>
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
            aria-invalid={!!errors.service}
          >
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other / Not sure">Other / Not sure</option>
          </select>
          {errors.service && <span className="field__error">{errors.service}</span>}
        </div>
        {field("date", "Preferred date", "e.g. 12 Aug 2026", false, "date")}
        {field("origin", "Origin", "Pickup / dispatch location")}
        {field("destination", "Destination", "Delivery location")}
        <div className="field field--full">
          <label htmlFor="cargo">Cargo / project description</label>
          <textarea
            id="cargo"
            value={form.cargo}
            placeholder="Briefly describe what needs to be moved, volume, weight or timing."
            onChange={(e) => update("cargo", e.target.value)}
          />
        </div>
        <div className="field field--full">
          <label htmlFor="details">Additional details</label>
          <textarea
            id="details"
            value={form.details}
            placeholder="Anything else we should know?"
            onChange={(e) => update("details", e.target.value)}
          />
        </div>
      </div>

      <button type="submit" className="btn btn--primary btn--lg mt-4">
        Request My Quote
      </button>

      {status === "ok" && (
        <p className="form-status form-status--ok" role="status">
          Thank you, {form.name.split(" ")[0] || "there"}! Your request is being
          prepared — complete it in your email or WhatsApp window.
        </p>
      )}
      {status === "error" && (
        <p className="form-status form-status--err" role="alert">
          Please check the highlighted fields above.
        </p>
      )}
    </form>
  );
}
