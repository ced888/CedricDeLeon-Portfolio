"use client"
import Image from "next/image";

import React, {useState} from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { WavyBackground } from "@/components/ui/wavy-background";
import { motion } from "motion/react";
import { BentoGrid } from "@/components/ui/bento-grid";
import { ProfileCard } from "@/components/sections/ProfileCard";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ResumeCard } from "@/components/sections/ResumeCard";
import { MiscCard } from "@/components/sections/MiscCard";
import { BlogCard } from "@/components/sections/BlogCard";

const cardList = [
  { key: "blog", component: BlogCard },
  { key: "resume", component: ResumeCard },
  { key: "profile", component: ProfileCard },
  { key: "project", component: ProjectCard },
  { key: "misc", component: MiscCard },
];

export default function Home() {
  const [centerKey, setCenterKey] = useState<string>(cardList[2].key); // default center

  // Carousel logic: always show 5 cards, with centerKey in the middle
  const centerIdx = cardList.findIndex(card => card.key === centerKey);
  const total = cardList.length;

  // Get indices for carousel order: [left2, left1, center, right1, right2]
  const getCarouselIndices = () => {
    const indices = [];
    for (let i = -2; i <= 2; i++) {
      indices.push((centerIdx + i + total) % total);
    }
    return indices;
  };

  const orderedCards = getCarouselIndices().map(idx => cardList[idx]);

  return (
    <motion.div 
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.6,
        ease: "easeInOut",
      }}>
      <main className="w-screen mx-auto justify-evenly pt-6 px-32 flex gap-12 overflow-visible">
        {orderedCards.map(({ key, component: CardComponent }, idx) => {
          // Assign styles based on position
          let positionClass = "transition-transform ease-in-out duration-500";
          let mouseSens = 100;
          // Center card is larger and more prominent
          if (idx === 2) {
            positionClass += "w-auto sm:w-[30rem] h-[42rem] scale-110 rotate-0 z-10 shadow-2xl";
            mouseSens = 100;
          }
          // Left card is slightly rotated and smaller 
          else if (idx === 1) {
            positionClass += "w-auto sm:w-[20rem] h-[30rem] -rotate-5 z-0 mt-5";
            mouseSens = 15;
          } 
          //Right card is also slightly rotated and smaller
          else if (idx === 3) {
            positionClass += "w-auto sm:w-[20rem] h-[30rem] rotate-5 z-0 mt-5";
            mouseSens = 15;
          } 
          // Other cards are smaller and less prominent
          else if (idx === 4) {
            positionClass += "w-auto sm:w-[15rem] h-[20rem] rotate-8 opacity-90 mt-20";
            mouseSens = 5;
          }
          else if (idx === 0) {
            positionClass += "w-auto sm:w-[15rem] h-[20rem] -rotate-8 opacity-90 mt-20";
            mouseSens = 5;
          }
          else {
            positionClass += "w-auto sm:w-[15rem] h-[20rem] opacity-90";
          }

          const isCentered = idx === 2 && centerKey !== null;

          return (
            <div
              key={key}
              onClick={() => {if (!isCentered) setCenterKey(key); }}
              style={{ cursor: !isCentered ? "pointer" : "default" }}
            >
              <CardComponent mouseSensitivity={mouseSens} className={positionClass}/>
            </div>
          );
        })}
      </main>
    </motion.div>
  );
}
