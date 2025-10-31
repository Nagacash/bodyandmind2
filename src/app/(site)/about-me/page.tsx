import React from 'react';

const AboutMePage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">About Natalie Zimmermann</h1>
      <p className="text-lg mb-4">Welcome to my personal page! Here you can learn more about my journey, achievements, and passions.</p>
      <div className="prose lg:prose-xl">
        <h2>My Story</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2>Achievements</h2>
        <ul>
          <li>Professional Boxing World Champion</li>
          <li>Experienced Physiotherapist</li>
          <li>Certified Mental Coach</li>
          <li>Fitness Trainer</li>
        </ul>
        <h2>My Philosophy</h2>
        <p>My philosophy revolves around continuous learning, personal growth, and inspiring others to achieve their full potential. I believe in pushing boundaries and embracing challenges with inner joy and resilience.</p>
      </div>
    </div>
  );
};

export default AboutMePage;
