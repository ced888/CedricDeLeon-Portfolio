import { IoCloudDownloadOutline } from "react-icons/io5";

interface ButtonProps {
  name: string;
}

export default function NavButton({ name }: ButtonProps) {
  return (
    <a
      href=""
      target="_blank"
    >
      <button
        type="button"
        className="flex items-center text-md px-2 py-2 rounded-full bg-blue-300 font-semibold hover:bg-blue-400 gap-2 cursor-pointer"
      >
        {name}
        <IoCloudDownloadOutline className="text-xl" />
      </button>
    </a>
  );
}
