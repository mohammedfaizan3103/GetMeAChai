import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-8 text-white">
      <h1 className="text-4xl font-bold mb-4">About Get Me A Chai</h1>
      <p className="text-lg mb-6">
        Welcome to <strong>Get Me A Chai</strong>! We&apos;re a platform where users can donate to other users and show their appreciation. Whether it&apos;s for content creators, developers, or anyone doing amazing work, you can now offer them a &quot;chai&quot; as a token of gratitude!
      </p>

      <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
      <p className="text-lg mb-6">
        At Get Me A Chai, our mission is to make it easier for people to support others in the community. We believe in the power of small gestures, and sometimes, all it takes is a simple &quot;chai&quot; to show your appreciation for someone&apos;s hard work.
      </p>

      <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
      <p className="text-lg mb-6">
        Users can create an account, share their unique profile, and start receiving chai donations from others. The process is quick, easy, and secure. Simply connect your payment options, and you&apos;re ready to go!
      </p>

      <h2 className="text-2xl font-semibold mb-4">Want to Learn More?</h2>
      <p className="text-lg mb-6">
        You can find our project on GitHub and follow its development. Feel free to contribute, report issues, or star the repository to support our work. 
        <a href="https://github.com/mohammedfaizan3103/GetMeAChai" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-2">
          Visit our GitHub page.
        </a>
      </p>
    </div>
  );
};

export default AboutUs;

export const metadata = {
  title: "About - Get Me A Chai"
}

