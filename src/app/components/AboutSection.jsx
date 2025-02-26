"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 space-y-2">
        <li><span className="font-semibold text-primary-400">Cloud Computing:</span> AWS, Google Cloud, Azure, VMware</li>
        <li><span className="font-semibold text-primary-400">Development:</span> Node.js, Express.js, React.js, Next.js, HTML, CSS, JavaScript, Tailwind CSS</li>
        <li><span className="font-semibold text-primary-400">DevOps & Automation:</span> Terraform, Ansible, Docker, Kubernetes, Jenkins, GitHub Actions</li>
        <li><span className="font-semibold text-primary-400">Database Management:</span> PostgreSQL, MongoDB, MySQL</li>
        <li><span className="font-semibold text-primary-400">AI & Data Science:</span> Python, TensorFlow, Scikit-Learn, Pandas, NumPy</li>
        <li><span className="font-semibold text-primary-400">Version Control & Tools:</span> Git, GitHub, GitLab, JIRA, Agile, Shell Scripting</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 space-y-2">
        <li><span className="font-semibold text-primary-400">Master's in Computer Science:</span> University of North Texas (UNT)</li>
        <li><span className="font-semibold text-primary-400">Bachelor's in Computer Science:</span> Raghu Engineering College</li>
        <li><span className="font-semibold text-primary-400">Relevant Coursework:</span> Software Engineering, SDAI, NLP, Analysis of Computer Algorithms, Machine Learning, Big Data, and Data Science</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4 space-y-2">
        <li><span className="font-semibold text-primary-400">MERN Full Stack Web Development:</span> Digital Lync</li>
        <li><span className="font-semibold text-primary-400">100 Days of Code - The Complete Python Pro Bootcamp:</span> Udemy</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white scroll-mt-20" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About Image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg leading-relaxed">
            🚀 I’m a <span className="text-primary-400 font-semibold">Software Engineer</span> with 
            <span className="text-secondary-400 font-semibold"> 2+ years of experience</span> in 
            <span className="text-primary-400 font-semibold"> Cloud Computing and Infrastructure Automation.</span>  
            At <span className="text-primary-400 font-semibold">Accenture</span>, I managed 
            <span className="text-secondary-400 font-semibold"> enterprise cloud infrastructure</span>, overseeing 
            <span className="text-primary-400 font-semibold"> 300+ client servers</span> and optimizing 
            <span className="text-secondary-400 font-semibold"> 8000+ Linux servers</span> with 
            <span className="text-primary-400 font-semibold"> AWS, Google Cloud, and Azure.</span>  
            As a <span className="text-secondary-400 font-semibold">Cloud Engineer</span>, I handled  
            <span className="text-primary-400 font-semibold"> server operations, infrastructure management, and cloud automation</span> 
            using <span className="text-secondary-400 font-semibold"> SAP</span>, ensuring performance optimization and system reliability.
            <br /><br />
            Beyond cloud computing, I develop 
            <span className="text-primary-400 font-semibold"> scalable, high-performance web applications</span> 
            with <span className="text-secondary-400 font-semibold"> React.js, Node.js, PostgreSQL, and Express.js</span>,  
            focusing on <span className="text-primary-400 font-semibold">backend optimization</span> and  
            <span className="text-secondary-400 font-semibold"> enhancing user experience</span>.  
            I have also explored <span className="text-primary-400 font-semibold"> AI and Machine Learning</span>,  
            working with <span className="text-secondary-400 font-semibold"> Python and TensorFlow</span>  
            on projects like <span className="text-primary-400 font-semibold"> predictive analytics and automation tools</span>,  
            leveraging AI for intelligent decision-making.
            <br /><br />
            💡 I’m passionate about 
            <span className="text-primary-400 font-semibold"> building resilient, scalable, and cost-efficient cloud solutions</span> 
            that drive business transformation.
            <br /><br />
            Let’s build solutions that are not just functional but  
            <span className="text-primary-400 font-semibold"> transformative—scalable, innovative, and built for real-world impact.</span>
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
