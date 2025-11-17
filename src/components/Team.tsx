import React from "react";
import joseph from "../assets/me.jpg"; // Replace with Joseph’s actual image
import milkah from "../assets/milkah.png"; // Replace with Milkah’s actual image

import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

interface SocialLink {
  url: string;
  iconClass: React.ReactNode;
}

interface TeamMemberProps {
  name: string;
  role: string;
  bio?: string;
  imageSrc: string;
  imageAlt: string;
  socialLinks: SocialLink[];
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  imageSrc,
  imageAlt,
  socialLinks,
}) => {
  return (
    <div className="team-member-card">
      <div className="team-member-image-wrapper">
        <img src={imageSrc} alt={imageAlt} className="team-member-image" />
      </div>

      <div className="team-member-information">
        <h3 className="team-member-name">{name}</h3>
        <p className="team-member-role">{role}</p>

        {bio && <p className="team-member-bio">{bio}</p>}

        <div className="team-member-socials">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="team-member-social-url"
            >
              <span className="team-member-social-icon">{link.iconClass}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Joseph Wainaina",
      role: "General Manager (GM)",
      bio: "Oversees all operations at Umris Logistics, ensuring efficiency, reliability, and smooth coordination across teams and clients.",
      imageSrc: joseph,
      imageAlt: "A head-shot of Joseph Wainaina",
      socialLinks: [
        { url: "https://instagram.com", iconClass: <FaInstagramSquare /> },
        { url: "https://x.com", iconClass: <FaXTwitter /> },
        { url: "https://facebook.com", iconClass: <FaFacebookSquare /> },
        { url: "https://github.com", iconClass: <FaGithubSquare /> },
      ],
    },
    {
      name: "Milkah Wanjiru",
      role: "Chief Financial Officer (CFO)",
      bio: "Leads financial strategy, budgeting, and growth planning, ensuring Umris Logistics remains financially strong and future-ready.",
      imageSrc: milkah,
      imageAlt: "A head-shot of Milkah Wanjiru",
      socialLinks: [
        { url: "https://instagram.com", iconClass: <FaInstagramSquare /> },
        { url: "https://x.com", iconClass: <FaXTwitter /> },
        { url: "https://facebook.com", iconClass: <FaFacebookSquare /> },
        { url: "https://github.com", iconClass: <FaGithubSquare /> },
      ],
    },
  ];

  return (
    <section className="team-section" id="team">
      <div className="title">
        <p className="title-sub">team</p>
        <h2 className="title-main">our team</h2>
      </div>

      <div className="team-members-container">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
