import React from "react";
import { scrollToJob } from '../components/scroll'


function About() {
  return (
    <section id="about-section" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          About JobFinder
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-6">
          JobFinder is your go-to platform for discovering the best job 
          opportunities that match your skills and career goals. Whether 
          you’re a fresh graduate or an experienced professional, we 
          connect you with top employers and exciting job listings.
        </p>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-blue-600">Find Jobs Easily</h3>
            <p className="text-gray-600 mt-2">
              Explore thousands of job listings in various industries.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-blue-600">Apply Instantly</h3>
            <p className="text-gray-600 mt-2">
              Submit applications directly through our platform.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-blue-600">Career Growth</h3>
            <p className="text-gray-600 mt-2">
              Access career tips and resources to boost your success.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <button
          onClick={scrollToJob}
            href="/jobs"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg"
          >
            Explore Jobs
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
