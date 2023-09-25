import React from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import "./Footer.css"

const features = [
  // Your feature objects here
];

export default function Features() {


  const whiteTextStyle = {
    color: 'white', // Set the text color to white
    position:'absolute',
    right:'30%',
    top:'63%'
  };
  const WwhiteTextStyle = {
    color: 'white', // Set the text color to white
    position:'absolute',
    right:'34%'
  };

  return (
    <div id='homepage' className="relative bg-transparent py-24 sm:py-32 flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h4 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-right" style={WwhiteTextStyle}>
              Getting to many spams? 
              </h4>
              <h2 className="mt-6 text-lg leading-8 text-gray-600 text-center" style={whiteTextStyle}>
                Shield Yourself with Spam Shield for Effective Spam Filtering!
              </h2>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {feature.icon}
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
