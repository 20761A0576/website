import React from 'react';
import { Camera } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Photographer"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <Camera className="h-8 w-8 text-indigo-600" />
              <h2 className="text-4xl font-bold text-yellow-400 ml-2">About Me</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              With over a decade of experience capturing life's most precious moments, 
              I've developed a passion for telling stories through my lens. My journey 
              in photography began with a simple desire to freeze time, to preserve 
              those fleeting instances that make life beautiful.
            </p>
            
            <p className="text-gray-600 mb-6">
              My style combines photojournalistic storytelling with artistic portraiture, 
              ensuring that every image not only documents the moment but also captures 
              the emotions and atmosphere that made it special.
            </p>
            
            {/* <div className="grid grid-cols-2 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-3xl font-bold text-indigo-600">500+</h3>
                <p className="text-gray-600">Events Captured</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-3xl font-bold text-indigo-600">10+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;