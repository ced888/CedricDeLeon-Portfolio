import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { motion } from "motion/react";
import { useState, useEffect } from 'react';


// Replace the existing DisplayTime component with this:
function DisplayTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);
    return (
    <div className="flex flex-col gap-2">
      <span className="text-7xl text-gray-600 dark:text-gray-400">
        {time.toLocaleTimeString()}
      </span>
    </div>
  );
}
export function MiscCard({ className = "", mouseSensitivity = 0, isCentered = false }: { className?: string, mouseSensitivity?: number, isCentered?: boolean }) {
  if (isCentered) {
    return (
      <CardContainer className="" mouseSensitivity={mouseSensitivity}>
        <CardBody className={`bg-gray-50 relative group/card 
                      dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
                      dark:bg-black dark:border-white/[0.2] border-black/[0.3] 
                      rounded-xl p-6 border overflow-y-auto ${className}`}>
          <CardItem>
            {/* TODO: remove card item and fix center positioning*/}
            <Image src="/pics/pokecards/Resume.png" height="0" width="0" className="w-0" alt="" />
          </CardItem>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
              ease: "easeInOut",
            }}>
            <CardItem
              className="text-xl font-bold text-neutral-700 dark:text-white"
            >
              My Playlist 🎶
              <CardItem
              className="font-semibold text-neutral-600 text-lg mt-2 dark:text-neutral-300"
              >
                Here&apos;s my odd music taste if you&apos;re interested.
              </CardItem>
            </CardItem>
            <CardItem
              className="jusify-center items-center mt-4"
            >
              <iframe data-testid="embed-iframe" className="w-[25vw] h-[25vw] rounded-lg border-2 shadow-lg"
              src="https://open.spotify.com/embed/playlist/30UqV2QvL5CrwRhw3iMJUI?utm_source=generator" 
              width="200%" height="600" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"></iframe>
              
            </CardItem>
            <div className="flex flex-cols-2 mt-4">
            <CardItem className="bg-white dark:bg-gray-900 rounded-lg shadow-xl border-3 p-4 flex">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-gray-700 dark:text-white">Local Time:</span>
                <DisplayTime />
              </div>
            </CardItem>
            {/* <CardItem className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 flex">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">Your time:</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">A collection of my favorite tunes</span>
              </div>
            </CardItem> */}
            </div>
          </motion.div>
        </CardBody>
      </CardContainer>
    );
  }
  return (
    <CardContainer className="" mouseSensitivity={mouseSensitivity}>
      <CardBody className={`relative group/card${className}`}>
        <CardItem
          translateZ="50"
          position="absolute"
          className="h-full w-full flex items-center justify-center"
        >
          <Image
            src="/pics/pokecards/Playlist.png"
            height="3000"
            width="1000"
            className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

{/* Misc CARD */ }
