import React from "react";

interface FooterProps {
  authorName?: string;
  authorUrl?: string;
}

const Footer: React.FC<FooterProps> = ({
  authorName = "Mark Kinyanjui",
  authorUrl = "https://github.com/de-scientist/",
}) => {
  return (
    <footer className="footer py-4 text-center bg-gray-900 text-white">
      <p className="footer-text">
        Built with lots of <span className="text-red-500">&hearts;</span> by{" "}
        <a
          href={authorUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-red-400 transition-colors duration-200"
        >
          {authorName}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
