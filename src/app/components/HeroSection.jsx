"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="bg-[#121212]">
      {/* Header Section */}
      <header className="bg-[#121212] text-white fixed top-0 left-0 w-full z-50" style={{ borderBottom: 'none', boxShadow: 'none' }}>
        <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-10">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                SIVAKUMAR
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex gap-8 text-base font-medium">
            <Link href="#about" className="hover:scale-110 transition-transform duration-200">
              About
            </Link>
            <Link href="#projects" className="hover:scale-110 transition-transform duration-200">
              Projects
            </Link>
            <Link href="#contact" className="hover:scale-110 transition-transform duration-200">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="lg:py-12 pt-12 pb-6 flex flex-col items-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 w-full max-w-3xl place-self-center text-center sm:text-left sm:justify-self-start"
          >
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mb-2">
              Hello, I&apos;m
            </p>

            <h1 className="text-white mb-2 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Siva Kumar
              </span>
            </h1>

            <p className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#ADB7BE]">
              <TypeAnimation
                sequence={[
                  "Data Scientist", 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"
              />
            </p>

            {/* Buttons Section */}
            <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start">
              <Link
                href="/#contact"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 
                bg-gradient-to-br from-primary-500 to-secondary-500 
                hover:bg-slate-200 hover:shadow-lg hover:shadow-secondary-500/50 text-white transition-all duration-300"
              >
                Hire Me
              </Link>
              <Link
                href="/Siva Kumar Chaini Data Scientist Resume.pdf"
                download="SivaKumar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full 
                bg-gradient-to-br from-primary-500 to-secondary-500 
                hover:bg-slate-800 hover:shadow-lg hover:shadow-secondary-500/50 text-white transition-all duration-300 mt-3 sm:mt-0"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </Link>
            </div>

            {/* Social Media Icons Section */}
            <div className="mt-6 flex justify-center sm:justify-start space-x-6">
              <Link href="https://www.linkedin.com/in/sivakumarchaini/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl text-blue-500 hover:text-blue-600 transition-all duration-300" />
              </Link>
              <Link href="https://github.com/sivakumarchaini" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-3xl text-gray-300 hover:text-white transition-all duration-300" />
              </Link>
              <Link href="https://wa.me/9408437647" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-3xl text-green-500 hover:text-green-600 transition-all duration-300" />
              </Link>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
              <Image
                src="/images/image.png"
                alt="hero image"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
                width={400}
                height={400}
                loading="lazy"
                priority={false}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
