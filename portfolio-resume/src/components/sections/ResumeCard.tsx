import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { motion } from "motion/react";
import { ReactNode } from "react";

export function ResumeCard({ className = "", mouseSensitivity = 0, isCentered = false }: { className?: string, mouseSensitivity?: number, isCentered?: boolean }) {
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
            }}
          >
            <CardItem
              className="text-xl font-bold text-neutral-700 dark:text-white"
            >
              Resume & Experiences
              <CardItem
              className="font-semibold text-neutral-600 text-lg mt-2 dark:text-neutral-300"
              >
                Here are the list of my professional experiences!
              </CardItem>
            </CardItem>
            

            <Positions />

            <CardItem
              as="p"
              translateZ="0"
              className="text-xl mt-10 font-bold text-neutral-800 dark:text-white"
            >
              Programming Languages & Tools
            </CardItem>

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
            src="/pics/pokecards/Resume.png"
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

function Positions() {
  return (
    <div className="col-span-full mt-4 px-4 pb-4 md:overflow-y-auto sm:h-[400px] shadow-lg rounded-lg">
      {experienceLists.map((position: experienceListsProps, index) => (
        <div
          className="flex items-center gap-4 p-2.5 sm:hover:bg-[#A8DCAB] rounded-lg transition-colors group"
          key={position.companyName}
        >
          <span className="sm:group-hover:text-white min-w-[20px]">
            {index + 1}
          </span>
          <div className="flex-1">
            <p className="text-m  text-blue-900 rounded-lg font-semibold mb-0.5">
              <a href={position.url} target="_blank" className="hover:underline sm:group-hover:bg-blue-100 rounded-lg p-1" rel="noreferrer">
                {position.companyName}
              </a>
            </p>
            <p className="font-semibold text-base text-gray-800 dark:text-white mb-1 text-md mb-0.5">{position.positionTitle}</p>
            <p className="text-sm">{position.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProgrammingLanguages() {
  return (
    <div
      className="rounded-xl overflow-hidden"
      id="programming-languages"
    >
      <div className="p-6">
        <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 gap-2">
          {languageItems.map((item) => (
            <CardItem
              translateZ="100"
              className={`flex items-center justify-center p-2.5 sm:hover:scale-200 rounded-lg transition-all duration-200`}
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

type experienceListsProps = {
  companyName: string;
  positionTitle: string;
  date: string;
  url?: string;
};

const experienceLists: experienceListsProps[] = [
  {
    companyName: "MacEwan University",
    positionTitle: "IT Support Analyst",
    date: "Aug 2021 - Present",
    url: "https://www.macewan.ca",
  },
  {
    companyName: "PCL Construction",
    positionTitle: "Software Developer Intern",
    date: "Sep 2022 - Jul 2023",
    url: "https://www.pcl.com",
  },
  {
    companyName: "Academy of Health Care Services",
    positionTitle: "Web Developer",
    date: "Oct 2020 - Aug 2021",
    url: "https://academyhcs.ca/",
  },
  {
    companyName: "GAOTek Inc.",
    positionTitle: "Information Technology Intern",
    date: "Aug 2020 - Dec 2020",
    url: "https://www.gaotek.com",
  },
  {
    companyName: "Freshii",
    positionTitle: "Restaurant Team Member",
    date: "Apr 2017 - Jul 2020",
    url: "https://www.freshii.com",
  }
];

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
