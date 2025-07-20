import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function BlogCard({ className = "", mouseSensitivity = 0 }: { className?: string, mouseSensitivity?: number }) {
  return (
    <CardContainer className="" mouseSensitivity={mouseSensitivity}>
        <CardBody className={`bg-red-50 relative group/card 
            dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
            dark:bg-black dark:border-white/[0.2] border-black/[0.3] 
            rounded-xl p-6 border ${className}`}>
        <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
        >
            Blog
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
  );
}

{/* Misc CARD */}
