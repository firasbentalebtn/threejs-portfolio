import React from "react";
import { FaGithubSquare, FaBehanceSquare, FaLinkedin } from "react-icons/fa";

const SocialNav = () => {
  return (
    
    <div className="fixed right-0 top-1/2 transform z-50 -translate-y-1/2 flex flex-col gap-4 mr-4">
      <a
        href="https://github.com/firasbentalebtn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare
          className="text-4xl text-white hover:text-purple-500 transition-colors duration-300"
        />
      </a>
      <a
        href="https://www.behance.net/firasbentaleb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaBehanceSquare
          className="text-4xl text-white hover:text-purple-500 transition-colors duration-300"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/firas-bentaleb-a517561ba/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          className="text-4xl text-white hover:text-purple-500 transition-colors duration-300"
        />
      </a>
    </div>
  );
};

export default SocialNav;
