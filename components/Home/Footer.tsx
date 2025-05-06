'use client';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

// Tailwind style constants
const containerClass = 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 px-6 mt-20';
const gridClass = 'max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8';
const brandingTitleClass = 'text-2xl font-bold text-amber-700 mb-2';
const brandingTextClass = 'text-sm';
const sectionTitleClass = 'text-lg font-semibold mb-2';
const navLinkClass = 'hover:text-amber-400 transition';
const socialContainerClass = 'flex space-x-4 text-gray-600 dark:text-gray-300';
const copyrightClass = 'text-center text-sm text-gray-500 dark:text-gray-400 mt-10';


const Footer = () => {
  return (
    <footer className={containerClass}>
      <div className={gridClass}>
        {/* Branding */}
        <div>
          <h2 className={brandingTitleClass}>LOGO</h2>
          <p className={brandingTextClass}>Empowering people through digital experiences.</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-2">
          <h3 className={sectionTitleClass}>Quick Links</h3>
          <a href="#" className={navLinkClass}>Home</a>
          <a href="#" className={navLinkClass}>About</a>
          <a href="#" className={navLinkClass}>Services</a>
          <a href="#" className={navLinkClass}>Contact</a>
        </div>

        {/* Social Media */}
        <div>
          <h3 className={sectionTitleClass}>Follow Us</h3>
          <div className={socialContainerClass}>
            <a href="#" className={navLinkClass}><FacebookIcon /></a>
            <a href="#" className={navLinkClass}><TwitterIcon /></a>
            <a href="#" className={navLinkClass}><LinkedInIcon /></a>
            <a href="#" className={navLinkClass}><InstagramIcon /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={copyrightClass}>
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
