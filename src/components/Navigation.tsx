import React, { useState } from 'react';
import { ChevronDown, Menu, X, Home, Briefcase, Users, Phone, Settings, Book, Award, Globe } from 'lucide-react';

interface MenuItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: MenuItem[] = [
    {
      label: 'Home',
      href: '/',
      icon: <Home size={18} />
    },
    {
      label: 'Services',
      href: '/services',
      icon: <Briefcase size={18} />,
      children: [
        {
          label: 'Web Development',
          href: '/services/web-development',
          children: [
            { label: 'Frontend Development', href: '/services/web-development/frontend' },
            { label: 'Backend Development', href: '/services/web-development/backend' },
            { label: 'Full Stack Solutions', href: '/services/web-development/fullstack' }
          ]
        },
        {
          label: 'Mobile Development',
          href: '/services/mobile-development',
          children: [
            { label: 'iOS Development', href: '/services/mobile-development/ios' },
            { label: 'Android Development', href: '/services/mobile-development/android' },
            { label: 'Cross-Platform', href: '/services/mobile-development/cross-platform' }
          ]
        },
        { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
        { label: 'DevOps', href: '/services/devops' }
      ]
    },
    {
      label: 'Products',
      href: '/products',
      icon: <Book size={18} />,
      children: [
        { label: 'Software Solutions', href: '/products/software' },
        { label: 'Mobile Apps', href: '/products/mobile-apps' },
        { label: 'Enterprise Tools', href: '/products/enterprise' }
      ]
    },
    {
      label: 'Company',
      href: '/company',
      icon: <Users size={18} />,
      children: [
        { label: 'About Us', href: '/company/about' },
        { label: 'Our Team', href: '/company/team' },
        { label: 'Careers', href: '/company/careers' },
        { label: 'Press', href: '/company/press' }
      ]
    },
    {
      label: 'Resources',
      href: '/resources',
      icon: <Award size={18} />,
      children: [
        { label: 'Blog', href: '/resources/blog' },
        { label: 'Documentation', href: '/resources/docs' },
        { label: 'Case Studies', href: '/resources/case-studies' },
        { label: 'Downloads', href: '/resources/downloads' }
      ]
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: <Phone size={18} />
    }
  ];


  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.children && (
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.children && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                    {item.children.map((child) => (
                      <div key={child.label} className="relative group/child">
                        <a
                          href={child.href}
                          className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <span className="font-medium">{child.label}</span>
                          {child.children && <ChevronDown size={14} className="rotate-[-90deg]" />}
                        </a>

                        {/* Nested Dropdown */}
                        {child.children && (
                          <div className="absolute left-full top-0 ml-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover/child:opacity-100 group-hover/child:visible transition-all duration-300">
                            {child.children.map((nestedChild) => (
                              <a
                                key={nestedChild.label}
                                href={nestedChild.href}
                                className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                              >
                                {nestedChild.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Settings Icon */}
          <div className="hidden md:block">
            <button className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Settings size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            {menuItems.map((item) => (
              <MobileMenuItem key={item.label} item={item} />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Mobile Menu Item Component with Click-based Dropdowns
const MobileMenuItem: React.FC<{ item: MenuItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
        onClick={() => item.children && setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          {item.icon}
          <span className="font-medium">{item.label}</span>
        </div>
        {item.children && (
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        )}
      </button>

      {/* Mobile Dropdown */}
      {item.children && isOpen && (
        <div className="ml-6 mt-2 space-y-1">
          {item.children.map((child) => (
            <div key={child.label}>
              <a
                href={child.href}
                className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                {child.label}
              </a>
              {child.children && (
                <div className="ml-4 mt-1 space-y-1">
                  {child.children.map((nestedChild) => (
                    <a
                      key={nestedChild.label}
                      href={nestedChild.href}
                      className="block px-4 py-1 text-sm text-gray-500 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      {nestedChild.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Navigation;