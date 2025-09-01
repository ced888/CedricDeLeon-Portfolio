import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { BackgroundGradient } from "../ui/background-gradient";

export function ProfileCard({
  className = "",
  mouseSensitivity = 100,
  isCentered = false
}: {
  className?: string,
  mouseSensitivity?: number,
  isCentered?: boolean
}) {

  if (isCentered) {
    mouseSensitivity = 50;
  }

  return (
    <CardContainer className="" mouseSensitivity={mouseSensitivity}>
      <CardBody className={`rounded-xl relative group/card ${className}`}>
        <CardItem
          translateZ="60"
          position="absolute"
          className="h-full w-full flex items-center justify-center"
        >
          <BackgroundGradient>
            <Image
              src="/pics/pokecards/CedricDeLeon.png"
              height="3000"
              width="1000"
              className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </BackgroundGradient>
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