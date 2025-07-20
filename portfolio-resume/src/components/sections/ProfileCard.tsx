import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ProfileCard({ className = "", mouseSensitivity = 0 }: { className?: string, mouseSensitivity?: number }) {
    const handleTryNow = () => {
    // Replace with your logic, e.g., navigate or open modal
    window.open("https://www.google.com/search?q=cat&rlz=1C1GCEA_enCA1156CA1156&oq=cat&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyCggBEC4YsQMYgAQyBwgCEAAYgAQyEwgDEC4YgwEYxwEYsQMY0QMYgAQyDQgEEC4YrwEYxwEYgAQyEAgFEC4YrwEYxwEYgAQYjgUyDQgGEAAYgwEYsQMYgAQyBggHEEUYPdIBCDEwNzBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8", "_blank");
  };
  return (
    <CardContainer className="" mouseSensitivity={mouseSensitivity}>
      <CardBody className={`bg-gray-50 relative group/card 
        dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
        dark:bg-black dark:border-white/[0.2] border-black/[0.3] 
        rounded-xl border ${className}`}>
        <CardItem
          translateZ="50"
          position="absolute"
          className="h-full w-full flex items-center justify-center"
        >
          <Image
            src="/pics/Pokecardmaker.png"
            height="3000"
            width="1000"
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            onClick={handleTryNow}
            style={{cursor: "pointer"}}
          >
            Try now →
          </CardItem>
          <CardItem
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
  );
}