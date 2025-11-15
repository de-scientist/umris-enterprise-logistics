import React, { useState, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage("Message sent successfully. We’ll get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
        <input name="email" type="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange} />
        <button type="submit">Send</button>
        {statusMessage && <p className="form-status">{statusMessage}</p>}
      </form>
      <div className="contact-info">
        <p><strong>Phone:</strong> +254 718 764 327</p>
        <p><strong>Email:</strong> info@umrisenterprise.com</p>
      </div>
    </section>
  );
};

export default Contact;
