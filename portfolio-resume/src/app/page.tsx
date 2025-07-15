"use client"
import Image from "next/image";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { WavyBackground } from "@/components/ui/wavy-background";
import { motion } from "motion/react";
import { BentoGrid } from "@/components/ui/bento-grid";

export default function Home() {
  return (
       <motion.div 
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}>

          
        
      <main className="w-screen max-w-[1600px] mx-auto pt-6 px-32 grid grid-cols-5" >
     
                    <div>
                  {/* Tech Stack CARD */}
                  <CardContainer className="pt-37 right-50" mouseSensitivity="10">
                  <CardBody className="-rotate-10 bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.3] w-auto sm:w-[15rem] h-[20rem] rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      Make things float in air
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      Hover over this card to unleash the power of CSS perspective
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="w-full mt-4"
                    >
                      <Image
                        src="/pics/profile_momiji.jpg"
                        height="2000"
                        width="500"
                        className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    </CardBody>
                  </CardContainer>
          </div>
                  {/* RESUME CARD */}
                  <CardContainer className="pb-20 inter-var right-40" mouseSensitivity="15">
                  <CardBody className="-rotate-5 bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.3] w-auto sm:w-[20rem] h-[30rem] rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      Make things float in air
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      Hover over this card to unleash the power of CSS perspective
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="w-full mt-4"
                    >
                      <Image
                        src="/pics/profile_momiji.jpg"
                        height="2000"
                        width="500"
                        className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    </CardBody>
                  </CardContainer>
          <div>
                  {/* PROFILE CARD */}
                  <CardContainer className="pb-20">
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.3] w-auto sm:w-[30rem] h-[42rem] rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      Cedric De Leon
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      Software Developer
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="w-full mt-4"
                    >
                      <Image
                        src="/pics/profile_momiji.jpg"
                        height="3000"
                        width="1000"
                        className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={20}
                        translateX={-40}
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                        Try now →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        translateX={40}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        Sign up
                      </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
          </div>
                  {/* PROJECT CARD */}
                  <CardContainer className="pb-20 inter-var left-40" mouseSensitivity="15">
                  <CardBody className="rotate-5 bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.3] w-auto sm:w-[20rem] h-[30rem]  rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      Projects
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      Hover over this card to unleash the power of CSS perspective
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="w-60 mt-4"
                    >
                      <Image
                        src="/pics/profile_momiji.jpg"
                        height="300"
                        width="300"
                        className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    </CardBody>
                  </CardContainer>
          <div>
                   {/* Misc CARD */}
                   <CardContainer className="pt-37 left-50" mouseSensitivity="10">
                  <CardBody className="rotate-10 bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.3] w-auto sm:w-[15rem] h-[20rem] rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      Projects
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      Hover over this card to unleash the power of CSS perspective
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="w-full mt-4"
                    >
                      <Image
                        src="/pics/profile_momiji.jpg"
                        height="2000"
                        width="500"
                        className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    </CardBody>
                  </CardContainer>
                  </div>
      </main>
      </motion.div>
  );
}
