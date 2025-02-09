import { headerLogo } from '../assets/images';
import { Menu, X } from "lucide-react";
import { navLinks } from '../static';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <motion.header 
      className="padding-x py-6 absolute z-20 w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <motion.a 
          href="/" 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.2 }}
        >
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="flex-1 flex justify-center items-center gap-10 max-lg:hidden">
          {navLinks.map((item, index) => (
            <motion.li 
              key={item.label} 
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a 
                href={item.href} 
                className="font-montserrat text-lg text-gray-700 transition-all duration-300 relative group-hover:text-coral-red"
              >
                {item.label}
                <motion.span 
                  className="absolute left-0 bottom-0 w-0 h-[2px] bg-coral-red transition-all duration-300 group-hover:w-full"
                />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Auth Links */}
        <div className="hidden lg:flex text-lg font-montserrat  text-gray-800 justify-center space-x-4 items-center">
          <motion.a href="#" className='hover:underline' whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            Sign In
          </motion.a>
          <motion.a 
            href="#" 
            className="text-coral-red hover:underline"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Create an account
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button 
          onClick={toggleNavbar} 
          className="lg:hidden z-30 relative p-2 rounded-md hover:bg-gray-200 transition-all duration-200"
          whileTap={{ scale: 0.9 }}
        >
          {mobileDrawerOpen ? <X size={32} /> : <Menu size={32} />}
        </motion.button>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileDrawerOpen && (
            <motion.div
              className="fixed top-0 right-0 z-50 bg-white h-1/2 w-3/4 sm:w-1/2 p-6 flex flex-col justify-start shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* X Button */}
              <motion.button 
                onClick={toggleNavbar} 
                className="self-end p-2 rounded-md hover:bg-gray-200 transition-all duration-200"
                whileTap={{ scale: 0.9 }}
              >
                <X size={32} />
              </motion.button>

              {/* Navigation Links */}
              <ul className="mt-8 text-center">
                {navLinks.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="py-4 text-lg text-gray-800 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <a 
                      href={item.href} 
                      className="transition-all duration-300 group-hover:text-coral-red group-hover:font-semibold"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Auth Links */}
              <div className="flex flex-col space-y-4 mt-6 w-full text-center">
                <motion.a 
                  href="#" 
                  className="py-2 px-4 border rounded-full w-full transition-all duration-300 hover:bg-gray-100"
                  whileHover={{ scale: 1.05 }}
                >
                  Sign In
                </motion.a>
                <motion.a 
                  href="#" 
                  className="py-2 px-4 rounded-full bg-coral-red text-white w-full transition-all duration-300 hover:bg-opacity-80"
                  whileHover={{ scale: 1.05 }}
                >
                  Create an account
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Nav;
