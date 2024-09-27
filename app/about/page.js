import React from 'react';

const AboutPage = () => {
  return (
    <div className="text-white min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center space-y-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-4">About Get Me A Chai</h1>
        
        {/* Page Content */}
        <p className="text-lg leading-relaxed">
          Welcome to <strong>Get Me A Chai</strong>, a platform that allows users to support each other by sending donations in the form of digital "chai."
          Whether you're a content creator, developer, or just someone looking to receive a little love from your friends, Get Me A Chai makes it simple for users to donate to each other.
        </p>

        <p className="text-lg leading-relaxed">
          Built with Next.js, the platform is designed to be user-friendly, responsive, and secure. We believe in the power of community and in providing a seamless way for users to show their appreciation.
        </p>

        <p className="text-lg leading-relaxed">
          This project is open-source, and we welcome contributions from developers across the globe! If you'd like to explore the code or contribute to the project, feel free to visit our GitHub page.
        </p>

        {/* GitHub Link */}
        <a
          href="https://github.com/mohammedfaizan3103/GetMeAChai" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-lg"
        >
          Explore our GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
