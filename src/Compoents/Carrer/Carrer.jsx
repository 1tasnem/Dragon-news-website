import React from 'react';

const Carrer = () => {
    return (
            <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Join Our Team</h2>
        <p className="text-gray-600 text-lg mb-12">
          Dragon News is on a mission to redefine modern journalism. If you're passionate about storytelling, truth-seeking, and making an impact — we want you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {/* Job Card 1 */}
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">📝 Journalist</h3>
            <p className="text-sm text-gray-700 mb-4">
              Cover local and global stories, conduct interviews, and report with integrity.
            </p>
            <p className="text-sm font-medium text-gray-500 mb-2">📍 Location: Remote / On-site</p>
            <button className="btn btn-sm btn-outline btn-primary mt-2">Apply Now</button>
          </div>

          {/* Job Card 2 */}
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">🎨 Graphic Designer</h3>
            <p className="text-sm text-gray-700 mb-4">
              Design compelling visuals for stories, infographics, and social content.
            </p>
            <p className="text-sm font-medium text-gray-500 mb-2">📍 Location: Remote</p>
            <button className="btn btn-sm btn-outline btn-primary mt-2">Apply Now</button>
          </div>

          {/* Job Card 3 */}
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">💻 Web Developer</h3>
            <p className="text-sm text-gray-700 mb-4">
              Maintain and improve our web platform using modern frontend frameworks.
            </p>
            <p className="text-sm font-medium text-gray-500 mb-2">📍 Location: Hybrid</p>
            <button className="btn btn-sm btn-outline btn-primary mt-2">Apply Now</button>
          </div>
        </div>

        <div className="mt-12">
          <h4 className="text-lg font-medium text-gray-700">Didn’t find the role you’re looking for?</h4>
          <a href="/contact" className="btn btn-accent mt-3">Send Us Your Resume</a>
        </div>
      </div>
    </section>

    );
};

export default Carrer;