import React from 'react';

// Define the background image style
const backgroundImageStyle = {
  backgroundImage: 'url(https://your-background-image-url.jpg)', // Replace with your background image URL
  backgroundSize: 'cover', // Adjust the background size as needed
  backgroundPosition: 'center', // Center the background image
  backgroundRepeat: 'no-repeat', // Prevent the background from repeating
};

export default function Testimonials() {
  return (
    <div style={backgroundImageStyle} className="overflow-hidden bg-transparent py-24 sm:py-32">
      <section className="relative isolate overflow-hidden px-6 lg:px-8">
        {/* Background Overlay */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />

        {/* Skewed Background Shape */}
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

        {/* Content */}
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          

          {/* Testimonial */}
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                This spam filter is a game-changer. No more sifting through junk to find important SMS. It just works!.
              </p>
            </blockquote>
          </figure>
        </div>
      </section>
    </div>
  );
}
