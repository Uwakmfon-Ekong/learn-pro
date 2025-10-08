"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function StatsScroll() {
  const stats = [
    { value: "3+", label: "Roles", color: "text-[oklch(0.70_0.20_340)]" },
    { value: "50+", label: "Resources", color: "text-green-600" },
    { value: "10+", label: "Mentors", color: "text-primary" },
    { value: "20+", label: "Communities", color: "text-orange-600" },
  ];

  const controls = useAnimation();

  useEffect(() => {
    if (window.innerWidth < 768) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          ease: "linear",
          duration: 10,
          repeat: Infinity,
        },
      });
    }
  }, [controls]);

  return (
    <div className="pt-8">
      {/* Desktop layout */}
      <div className="hidden md:flex justify-between gap-6">
        {stats.map((item, index) => (
          <div key={index} className="text-center">
            <div className={`text-4xl font-bold ${item.color}`}>{item.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Mobile: scrolling version */}
      <div className="md:hidden overflow-hidden relative h-[100px]"> 
        {/* Fixed-height wrapper ensures layout stability */}
        <motion.div
          className="flex gap-10 absolute top-0 left-0"
          animate={controls}
        >
          {[...stats, ...stats].map((item, index) => (
            <div
              key={index}
              className="min-w-[120px] flex-shrink-0 text-center"
            >
              <div className={`text-4xl font-bold ${item.color}`}>{item.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
