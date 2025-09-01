import Image from "next/image";
import { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { motion } from "motion/react";
import { ProjectPages } from "./ProjectLayouts/ProjectPages";



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
            className="text-xl font-bold text-neutral-700 dark:text-white"
          >
            My Projects 🦖
            <CardItem
            className="font-semibold text-neutral-600 text-lg mt-2 dark:text-neutral-300"
            >
              Click on a project to see more details!
            </CardItem>
            </CardItem>
            {/* Bento grid skeleton */}
            <div className="h-[33vw] overflow-y-auto">
            <Projects selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
            </div>
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
    <div className={`grid ${selectedIdx === null ? "grid-cols-1 md:grid-cols-2" : ""} gap-4 mt-4 m-2`}>
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
            <p className="text-s text-gray-700 dark:text-gray-300 text-left ml-2">
              {project.description}
            </p>
            <div className="flex flex-cols flex-wrap gap-1">
              {
                project.technologies.map((tech) => (
                    <div key={tech} className="text-xs bg-green-800 p-2 rounded-lg text-gray-100 dark:text-gray-600 mt-1">
                      {tech}
                    </div>
                ))
              }
            </div>
          </button>
        ))
        : (
          <div key={projectList[selectedIdx].title} className="col-span-2 bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col items-center animate-in fade-in overflow-y-auto">
            <button
              className="self-end mb-2 px-3 py-1 text-m rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 cursor-pointer"
              onClick={() => setSelectedIdx(null)}
            >
              ← Back
            </button>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4">{projectList[selectedIdx].title}</h1>
            <ProjectPages ProjectName= {`${projectList[selectedIdx].title}`}/>
            
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
  technologies: string[];
}

const projectList: projectProps[] = [
  {
    title: "Workflow Approval System",
    description: "Web application to create and organize workflows.",
    image: "/projects/workflow/MatrixDesigner.png",
    technologies: ["C#","TypeScript", "SQL", "Azure", "Angular", ".Net Framework" ]
  },
  {
    title: "HypeShifts",
    description: "An android shift scheduling app for small businesses.",
    image: "/projects/hypeshifts/HypeShifts logo.png",
    technologies: ["Java", "JUNIT", "Android Studio", "MongoDB"]
  },
  {
    title: "Massage Therapy Booking App",
    description: "An app to book massage therapy appointments.",
    image: "/projects/massage/Homepage.png",
    technologies: ["React", "MUI", "TypeScript", "Node.js", "Azure", "MSSQL"]
  },
  {
    title: "Data Visualizations",
    description: "Some data visualizations I created.",
    image: "/projects/datavisualizations/AvgTempMap.png",
    technologies: ["Tableau", "MS Excel"]
  },
  {
    title: "ArcGIS misc",
    description: "Some ArcGIS projects I worked on.",
    image: "/projects/arcgis/EdmontonRasterZoom.jpg",
    technologies: ["ArcGIS Pro"]
  },
  {
    title: "This Website!!!",
    description: "Pokemon trading card game (TCG) themed portfolio and resume website.",
    image: "/pics/pokecards/CedricDeLeon.png",
    technologies: ["Next.js", "TypeScript", "Aceternity UI", "TailwindCSS", "Framer Motion"]
  }  
];
