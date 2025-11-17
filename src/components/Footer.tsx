import React from "react";

interface FooterProps {
  companyName?: string;
  companyUrl?: string;
}

const Footer: React.FC<FooterProps> = ({
  companyName = "Umris Logistics",
  companyUrl = "https://umrislogistics.co.ke/",
}) => {
  return (
    <footer className="footer py-6 text-center bg-gray-900 text-gray-300">
      <p className="text-sm md:text-base">
        © {new Date().getFullYear()} {companyName}. All rights reserved.
      </p>

      <p className="mt-1 text-xs md:text-sm text-gray-400">
        Delivering reliability, safety, and nationwide logistics excellence.
      </p>

      <a
        href={companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-2 underline hover:text-white transition-colors duration-200"
      >
        Visit our official website
      </a>
    </footer>
  );
};

export default Footer;
