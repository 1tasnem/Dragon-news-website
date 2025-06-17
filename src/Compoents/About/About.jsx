import React from 'react';
import Navbar from '../Navbar/Navbar';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
        <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About <span className="text-blue-600">Dragon News</span>
        </h2>
        <p className="text-gray-600 text-md md:text-lg leading-relaxed">
          Dragon News is your trusted source for breaking headlines, insightful features,
          and in-depth stories from around the globe. Founded in 2025, our mission is to
          deliver accurate, unbiased, and timely news to empower our readers and shape
          informed communities.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">🕵️ Investigative Journalism</h3>
            <p className="text-sm text-gray-700">
              We go beyond the surface to uncover the facts and bring out the truth in every report.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">🌍 Global Coverage</h3>
            <p className="text-sm text-gray-700">
              From local stories to international events, we bring the world to your fingertips.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">🧠 Expert Opinions</h3>
            <p className="text-sm text-gray-700">
              In-depth analysis and expert views help you understand the impact of every event.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <a href="/contact" className="btn btn-primary btn-wide">
            Contact Our Editorial Team
          </a>
        </div>
      </div>
    </section>
        </div>
    );
};

export default About;