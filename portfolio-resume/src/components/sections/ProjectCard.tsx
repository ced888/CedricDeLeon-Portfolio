import Image from "next/image";
import { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { motion } from "motion/react";


export function ProjectCard({
  className = "",
  mouseSensitivity = 0,
  isCentered = false,
}: {
  className?: string;
  mouseSensitivity?: number;
  isCentered?: boolean;
}) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  if (isCentered) {
    return (
      <CardContainer className="" mouseSensitivity={mouseSensitivity}>
        <CardBody
          className={`bg-gray-50 relative group/card 
            dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
            dark:bg-black dark:border-white/[0.2] border-black/[0.3] 
            rounded-xl p-6 border overflow-y-auto ${className}`}
        >
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
              as="p"
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Projects
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Click a project to see more details.
            </CardItem>
            {/* Bento grid skeleton */}
            <Projects selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
          </motion.div>
        </CardBody>
      </CardContainer>
    );
  }
  return (
    <CardContainer className="" mouseSensitivity={mouseSensitivity}>
      <CardBody className={`relative group/card ${className}`}>
        <CardItem
          translateZ="50"
          position="absolute"
          className="h-full w-full flex items-center justify-center"
        >
          <Image
            src="/pics/pokecards/Projects.png"
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

function Projects({ selectedIdx, setSelectedIdx, }: { selectedIdx: number | null; setSelectedIdx: React.Dispatch<React.SetStateAction<number | null>>; }) {
  return (
    <div className={`grid ${selectedIdx === null ? "grid-cols-1 md:grid-cols-2" : ""} gap-4 mt-6`}>
      {selectedIdx === null
        ? projectList.map((project: projectProps, idx) => (
          <button
            key={project.title}
            className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 flex flex-col items-center hover:ring-2 ring-blue-400 transition-all cursor-pointer"
            onClick={() => setSelectedIdx(idx)}
          >
            <div
              className="w-full h-40 bg-gray-200 dark:bg-gray-800 rounded mb-2 flex items-center justify-center overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={350}
                height={350}
                className="object-cover rounded"
              />
            </div>
            <h3 className="font-semibold text-base text-gray-800 dark:text-white mb-1">
              {project.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
              {project.description}
            </p>
          </button>
        ))
        : (
          <div key={projectList[selectedIdx].title} className="col-span-2 bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col items-center animate-in fade-in overflow-y-auto">
            <button
              className="self-end mb-2 px-3 py-1 text-s rounded bg-gray-200 dark:bg-gray-700 cursor-pointer"
              onClick={() => setSelectedIdx(null)}
            >
              ← Back
            </button>
            <div className="w-full h-70 bg-gray-200 dark:bg-gray-800 rounded mb-4 flex items-center justify-center overflow-hidden">
              <Image
                src={projectList[selectedIdx].image}
                alt={projectList[selectedIdx].title}
                width={1000}
                height={1000}
                className="w-full object-cover rounded"
              />
            </div>
            <h2 className="font-bold text-lg text-gray-800 dark:text-white mb-2">
              {projectList[selectedIdx].title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-4 text-center">
              {projectList[selectedIdx].description}
            </p>
            <div className="text-base text-gray-700 dark:text-gray-200 text-center">
              {projectList[selectedIdx].details}
            </div>
          </div>
        )
      }
    </div>
  );
}

type projectProps = {
  title: string;
  description: string;
  image: string;
  details: string;
}

const projectList: projectProps[] = [
  {
    title: "Workflow Approval System",
    description: "Short description for project one.",
    image: "/projects/workflow/MatrixDesigner.png",
    details: "This is a longer description for Project One. It includes features, technologies, and links."
  },
  {
    title: "HypeShifts",
    description: "Short description for project two.",
    image: "/projects/hypeshifts/HypeShifts logo.png",
    details: "This is a longer description for Project Two. It includes features, technologies, and links."
  },
  {
    title: "Massage Therapy Booking App",
    description: "Short description for project three.",
    image: "/projects/massage/Homepage.png",
    details: "This is a longer description for Project Three. It includes features, technologies, and links."
  },
  {
    title: "ArcGIS misc",
    description: "Short description for project four.",
    image: "/projects/arcgis/Alberta Reintroduction species.png",
    details: "This is a longer description for Project Four. It includes features, technologies, and links."
  },
  {
    title: "Data Visualizations",
    description: "Short description for project four.",
    image: "/projects/datavisualizations/AvgTempMap.png",
    details: "This is a longer description for Project Four. It includes features, technologies, and links."
  },
];
