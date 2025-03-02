"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaCode, FaGraduationCap, FaCertificate } from "react-icons/fa";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("about");

  // Content for each tab
  const TAB_DATA = [
    {
      id: "about",
      title: "About Me",
      icon: FaUser,
      content: (
        <div className="space-y-4">
          <p>
            🚀 As a <span className="text-primary-400 font-semibold">tech enthusiast passionate about scalable systems</span>, I specialize in <span className="text-secondary-400 font-semibold">Cloud Computing & DevOps</span> with over <span className="text-primary-400 font-semibold">2+ years of hands-on experience</span> in optimizing enterprise cloud infrastructure.
          </p>
          <p>
            I&apos;ve managed <span className="text-primary-400 font-semibold">enterprise cloud infrastructure</span> across AWS, Google Cloud, and Azure platforms. My experience includes optimizing <span className="text-secondary-400 font-semibold">8,000+ Linux servers</span>, significantly improving cloud efficiency and reducing operational costs. I&apos;ve also automated <span className="text-primary-400 font-semibold">server operations and infrastructure management</span> using Terraform, Ansible, and Kubernetes to create more resilient and maintainable systems.
          </p>
          <p>
            Throughout my career, I&apos;ve developed <span className="text-primary-400 font-semibold">high-performance web applications</span> using React.js, Node.js, PostgreSQL, and Express.js. My work has focused particularly on <span className="text-secondary-400 font-semibold">backend optimization</span> to enhance user experience. I&apos;ve also worked extensively on <span className="text-primary-400 font-semibold">AI-driven automation tools</span> using Python & TensorFlow to solve complex operational challenges.
          </p>
          <p>
            💡 <span className="text-primary-400 font-semibold">I believe technology should not just work but innovate.</span> I&apos;m driven by the challenge of <span className="text-secondary-400 font-semibold">building resilient, scalable, and cost-efficient cloud solutions</span> that empower businesses to scale seamlessly.
          </p>
          <p className="text-center">
            <span className="text-primary-400 font-semibold">Let&apos;s build something great together! 🚀</span>
          </p>
        </div>
      )
    },
    {
      id: "skills",
      title: "Skills",
      icon: FaCode,
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-primary-400 mb-4">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Cloud Computing", level: "90%", skills: ["AWS", "Google Cloud", "Azure", "VMware"] },
              { title: "Development", level: "85%", skills: ["Node.js", "React.js", "Next.js", "Tailwind CSS"] },
              { title: "DevOps & Automation", level: "80%", skills: ["Terraform", "Docker", "Kubernetes", "Jenkins"] },
              { title: "Database & AI", level: "75%", skills: ["PostgreSQL", "MongoDB", "TensorFlow", "Scikit-Learn"] },
            ].map((category, index) => (
              <div key={index} className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold text-purple-400 mb-2">{category.title}</h4>
                <div className="w-full bg-gray-700 h-2 rounded-full">
                  <motion.div
                    className="bg-purple-500 h-2 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: category.level }}
                    transition={{ duration: 1.5 }}
                  />
                </div>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  {category.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )
    },
    
    {
      id: "education",
      title: "Education",
      icon: FaGraduationCap,
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-primary-400 mb-4">Educational Background</h3>
          <div className="bg-gray-800/30 p-5 rounded-lg border border-gray-700">
            <div className="flex justify-between items-start">
              <h4 className="text-xl font-semibold text-purple-400">Master&apos;s in Computer Science</h4>
              <span className="text-sm bg-purple-900/40 px-3 py-1 rounded-full">2023-2025</span>
            </div>
            <p className="text-lg mt-1">University of North Texas (UNT)</p>
            <div className="mt-3 pt-3 border-t border-gray-700">
              <h5 className="font-medium text-gray-300 mb-2">Relevant Coursework:</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>Software Engineering</li>
                <li>SDAI, NLP</li>
                <li>Analysis of Computer Algorithms</li>
                <li>Machine Learning, Big Data, and Data Science</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-800/30 p-5 rounded-lg border border-gray-700">
            <div className="flex justify-between items-start">
              <h4 className="text-xl font-semibold text-purple-400">Bachelor&apos;s in Computer Science</h4>
              <span className="text-sm bg-purple-900/40 px-3 py-1 rounded-full">2017-2021</span>
            </div>
            <p className="text-lg mt-1">Raghu Engineering College</p>
          </div>
        </div>
      )
    },
    {
      id: "certifications",
      title: "Certifications",
      icon: FaCertificate,
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-primary-400 mb-4">Professional Certifications</h3>
    
          {/* MERN Full Stack Web Development */}
          <div
            className="bg-gray-800/30 p-5 rounded-lg border border-gray-700 cursor-pointer hover:bg-gray-700 transition duration-300"
            onClick={() => window.open("https://drive.google.com/file/d/1oqLB9FN7xPXJAeFCGsi15neL2ID9DFjL/view?usp=sharing", "_blank")}
          >
            <h4 className="text-xl font-semibold text-purple-400">MERN Full Stack Web Development</h4>
            <p className="text-lg mt-1">Digital Lync</p>
            <div className="mt-4 flex items-center">
              <div className="w-10 h-1 bg-purple-500 rounded-full"></div>
              <span className="ml-2 text-sm text-gray-400">Credential ID: MERN-2023</span>
            </div>
          </div>
    
          {/* 100 Days of Code - Python Bootcamp */}
          <div
            className="bg-gray-800/30 p-5 rounded-lg border border-gray-700 cursor-pointer hover:bg-gray-700 transition duration-300"
            onClick={() => window.open("https://www.udemy.com/certificate/UC-f644d317-bd67-4ace-a241-93ab5f7217b5/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email", "_blank")}
          >
            <h4 className="text-xl font-semibold text-purple-400">100 Days of Code - The Complete Python Pro Bootcamp</h4>
            <p className="text-lg mt-1">Udemy</p>
            <div className="mt-4 flex items-center">
              <div className="w-10 h-1 bg-purple-500 rounded-full"></div>
              <span className="ml-2 text-sm text-gray-400">Credential ID: UC-PYTHON-2023</span>
            </div>
          </div>
    
          {/* AWS Certified Cloud Practitioner */}
          <div
            className="bg-gray-800/30 p-5 rounded-lg border border-gray-700 cursor-pointer hover:bg-gray-700 transition duration-300"
            onClick={() => window.open("https://www.credly.com/badges/c679b01f-040a-4f83-8a45-7136c1478cc7/linked_in_profile", "_blank")}
          >
            <h4 className="text-xl font-semibold text-purple-400">AWS - AWS Certified Cloud Practitioner</h4>
            <p className="text-lg mt-1">Amazon Web Services (AWS)</p>
            <div className="mt-4 flex items-center">
              <div className="w-10 h-1 bg-purple-500 rounded-full"></div>
              <span className="ml-2 text-sm text-gray-400">Credential ID: AWS-CLF-CO2-Feb2025</span>
            </div>
          </div>
        </div>
      )
    }
    
  ];

  return (
    <section className="text-white pt-28 pb-2" id="about">
      <div className="container mx-auto px-8 mb-12">
        <h2 className="text-4xl font-bold text-center mb-14">About Me</h2>
        
        <div className="max-w-7xl mx-auto min-h-[650px] flex flex-col md:flex-row gap-16 items-start">
          <div className="md:flex gap-12">
            {/* Left side - Image */}
            <div className="md:w-1/3 justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <Image
                  src="/images/about-image.png"
                  width={600}
                  height={600}
                  alt="About Image"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              
              {/* Icons navigation */}
              <div className="flex justify-start mt-12 space-x-8" style={{ marginLeft: "10px" }}>
                {TAB_DATA.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group relative flex items-center justify-center p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      activeTab === tab.id
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white hover:shadow-lg hover:shadow-purple-500/50"
                    }`}
                    aria-label={tab.title}
                  >
                    <tab.icon className="text-3xl" />
                    
                    {/* Active indicator dot */}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 w-2 h-2 bg-white rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    {/* Tooltip */}
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-auto p-1 px-2 text-xs font-semibold rounded-md bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {tab.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="md:w-2/3 min-h-[550px] flex items-start pl-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full text-lg lg:text-l leading-relaxed text-justify"
                >
                  {TAB_DATA.find((t) => t.id === activeTab)?.content}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;