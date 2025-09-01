import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { motion } from "motion/react";

export function BlogCard({ className = "", mouseSensitivity = 0, isCentered = false }: { className?: string, mouseSensitivity?: number, isCentered?: boolean }) {
  if (isCentered) {
    mouseSensitivity = 100;
    return (
      <CardContainer className="" mouseSensitivity={mouseSensitivity}>
        <CardBody className={`bg-gray-50 relative group/card 
                       dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
                       dark:bg-black dark:border-white/[0.2] border-black/[0.3] 
                       rounded-xl p-6 border grid grid-cols-2 ${className}`}> 
                       {/* overflow-y-auto <- remember to add this back when adding content */}
          <CardItem
            translateZ="80"
            className="h-1/2 w-auto flex justify-end"
          >
            <Image
              src="/pics/pokecards/Blog.png"
              height="100"
              width="100"
              className="w-auto object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>

          <CardItem
            translateZ="50"
            className="order-first text-xl font-bold text-neutral-600 dark:text-white"
          >
            My Blogs 🌸
              <CardItem
              className="font-semibold text-neutral-600 text-lg mt-2 dark:text-neutral-300"
              >
                No content here yet! so watch a cat video instead haha
              </CardItem>
          </CardItem>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="col-span-2">
          <iframe className="w-full h-[15vw]" width="560" height="315" src="https://www.youtube.com/embed/J---aiyznGQ?si=ftlqxxOAIGJSuuUm" 
          title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <CardItem className="font-semibold text-neutral-600 text-lg mt-2 ml-8 dark:text-neutral-300">
            Isn&apos;t he so jazzy?
          </CardItem>
          
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
            src="/pics/pokecards/Blog.png"
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