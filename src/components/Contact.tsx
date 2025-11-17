import React, { useState, type FormEvent } from "react";
import { FaInstagramSquare, FaFacebookSquare, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface ContactInfoItem {
  iconClass: React.ReactNode;
  label: string;
  href?: string;
}

interface ContactSectionProps {
  contactInfo?: ContactInfoItem[];
}

const defaultContactInfo: ContactInfoItem[] = [
  {
    iconClass: <FaPhoneAlt />,
    label: "+254 764 268 280",
    href: "tel:+254764268280",
  },
  {
    iconClass: <FaEnvelope />,
    label: "umris.enterprises@gmail.com",
    href: "mailto:umris.enterprises@gmail.com",
  },
  {
    iconClass: <FaFacebookSquare />,
    label: "Umris Logistics",
    href: "https://www.facebook.com/100063605441743",
  },
  {
    iconClass: <FaInstagramSquare />,
    label: "Instagram",
    href: "https://instagram.com",
  },
];

const ContactSection: React.FC<ContactSectionProps> = ({
  contactInfo = defaultContactInfo,
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setStatusMessage("Thank you! Your message has been received.");
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <h2>Contact Umris Logistics</h2>
        <p>
          Whether it's transport, warehousing, last-mile delivery, or humanitarian logistics — 
          we’re here to support your mission with efficiency and trust.
        </p>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        {contactInfo.map((item, index) => {
          const Card = item.href ? "a" : "div";

          return (
            <Card
              key={index}
              className="info-item interactive-card"
              href={item.href}
              target={item.href ? "_blank" : undefined}
              rel={item.href ? "noopener noreferrer" : undefined}
            >
              <span className="icon">{item.iconClass}</span>
              <p>{item.label}</p>
            </Card>
          );
        })}
      </div>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message..."
          rows={6}
          required
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Send Message</button>

        {statusMessage && <p id="form-status">{statusMessage}</p>}
      </form>
    </section>
  );
};

export default ContactSection;
