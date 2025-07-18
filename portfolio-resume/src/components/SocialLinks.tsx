import { ReactNode } from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <>
      {socialMedias.map((social) => (
        <Link
          href={social.url}
          className="text-3xl hover:text-spotify-green"
          key={social.title}
          target="_blank"
        >
          {social.icon}
        </Link>
      ))}
    </>
  );
}

type socialMediasProps = {
  title: string;
  url: string;
  icon: ReactNode;
}[];

const socialMedias: socialMediasProps = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/cedz.de_leon/",
    icon: <FaInstagram />,
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/cedric-dl/",
    icon: <FaLinkedin />,
  },
  {
    title: "Github",
    url: "https://github.com/ced888",
    icon: <FaGithub />,
  },
];
