import React from 'react';

function AboutUs() {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-Black mb-4">
            About us
          </h2>
          <p className="text-black">
            We are dedicated to providing you with the best SMS spam filtering solution to keep your messages organized, safe, and spam-free.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                Our mission is to empower users to take control of their SMS inboxes and protect them from unwanted spam messages.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Why Choose Us</h3>
              <p className="text-gray-600">
                We offer advanced spam detection algorithms, a user-friendly interface, and top-notch customer support to ensure your SMS experience is hassle-free.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Us</h3>
              <p className="text-gray-600">
                Have questions or feedback? Feel free to reach out to our support team. We're here to help!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
