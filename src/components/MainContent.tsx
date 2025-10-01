import React from 'react';
import { Globe, Zap, Shield, Users } from 'lucide-react';

const MainContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">TechCorp Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We deliver cutting-edge technology solutions that drive innovation and transform businesses. 
            From web development to cloud solutions, we're your trusted technology partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Globe className="w-12 h-12 text-blue-600" />,
              title: 'Global Reach',
              description: 'Serving clients worldwide with 24/7 support and localized solutions.'
            },
            {
              icon: <Zap className="w-12 h-12 text-blue-600" />,
              title: 'Fast Delivery',
              description: 'Rapid development cycles and quick time-to-market for your projects.'
            },
            {
              icon: <Shield className="w-12 h-12 text-blue-600" />,
              title: 'Secure Solutions',
              description: 'Enterprise-grade security measures to protect your data and systems.'
            },
            {
              icon: <Users className="w-12 h-12 text-blue-600" />,
              title: 'Expert Team',
              description: 'Experienced professionals with deep expertise in modern technologies.'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your business with our technology solutions.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default MainContent;