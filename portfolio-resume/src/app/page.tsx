"use client"
import Image from "next/image";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { WavyBackground } from "@/components/ui/wavy-background";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen gap-1 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-[32px] items-center sm:items-start" >
        <motion.div 
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}>
        <div className="flex justify-between gap-5">
        </div>
        </motion.div>
      </main>
    </div>
  );
}
