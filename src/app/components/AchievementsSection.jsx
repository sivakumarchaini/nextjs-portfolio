"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  { metric: "Projects", value: 8 },
  { metric: "Contribution", value: 800 },
  { metric: "Certificates", value: 7 },
  { metric: "Experience", value: 2 },
];

const AchievementsSection = () => {
  return (
    <div className="py-12 px-6 sm:px-12 lg:px-20 xl:px-32">
      <div className="border border-[#33353F] rounded-lg py-10 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between shadow-lg bg-[#181818] hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-6 my-4 sm:my-0 transition-transform transform hover:scale-110 duration-300 ease-in-out"
          >
            {/* Animated Color Changing Number */}
            <motion.h2
              className="text-4xl sm:text-5xl font-extrabold"
              animate={{ color: ["#3B82F6", "#A855F7", "#EC4899"] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <AnimatedNumbers
                includeComma
                animateToNumber={Number(achievement.value)}
                locale="en-US"
                className="text-4xl sm:text-5xl font-extrabold"
                configs={() => ({
                  mass: 1,
                  friction: 100,
                  tensions: 140,
                })}
              />
            </motion.h2>
            <p className="text-[#ADB7BE] text-lg sm:text-xl">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
