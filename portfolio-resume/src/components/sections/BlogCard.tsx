import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { motion } from "motion/react";
import { ReactNode } from "react";

export function BlogCard({ className = "", mouseSensitivity = 0, isCentered = false }: { className?: string, mouseSensitivity?: number, isCentered?: boolean }) {
  if (isCentered) {
    return (
      <CardContainer className="" mouseSensitivity={mouseSensitivity}>
        <CardBody className={`bg-gray-50 relative group/card 
                       dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
                       dark:bg-black dark:border-white/[0.2] border-black/[0.3] 
                       rounded-xl p-6 border grid grid-cols-2 ${className}`}>
          <CardItem
            translateZ="80"
            className="h-1/2 w-auto flex justify-end"
          >
            <Image
              src="/pics/pokecards/Blog.png"
              height="100"
              width="100"
              className=" w-auto object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>

          <CardItem
            className="order-first text-xl font-bold text-neutral-600 dark:text-white"
          >
            Projects
            <div>
              tdrhdthdhd
            </div>
          </CardItem>
          <CardItem
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Projects
          </CardItem>
          <CardItem
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Projects
          </CardItem>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
              ease: "easeInOut",
            }}>
            <ProgrammingLanguages />
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

function ProgrammingLanguages() {
  return (
    <div
      className="col-span-2 rounded-xl bg-spotify-light-dark overflow-hidden"
      id="programming-languages"
    >
      <div className="p-6">
        <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 gap-2">
          {languageItems.map((item) => (
            <CardItem
              translateZ="100"
              className="flex items-center justify-center p-2.5 sm:hover:scale-200 rounded-lg transition-all duration-200"
              key={item.name}
            >
              {item.component}
            </CardItem>
          ))}
        </div>
      </div>
    </div>
  );
}
const languageItems: {
  name: string;
  component: ReactNode;
}[] = [
    {
      name: "C#",
      component: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
          width={40}
          height={40}
          alt="C#"
        />
      ),
    }, {
      name: "HTML",
      component: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          width={40}
          height={40}
          alt="HTML"
        />
      ),
    },
    {
      name: "CSS",
      component: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          width={40}
          height={40}
          alt="CSS"
        />
      ),
    },
    {
      name: "JavaScript",
      component: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          width={40}
          height={40}
          alt="JavaScript"
        />
      ),
    },
    {
      name: "TypeScript",
      component: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          width={40}
          height={40}
          alt="TypeScript"
        />
      ),
    },
    {
      name: "C",
      component: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
          width={40}
          height={40}
          alt="C"
        />
      ),
    },

    {
      name: "Java",
      component: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
          width={40}
          height={40}
          alt="Java"
        />
      ),
    },
    {
      name: "Python",
      component: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          width={40}
          height={40}
          alt="Python"
        />
      ),
    },
    {
      name: "SQL",
      component: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
          width={40}
          height={40}
          alt="SQL"
        />
      ),
    },
    {
      name: "Azure",
      component: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
          width={40}
          height={40}
          alt="Azure"
        />
      ),
    },
  ];
