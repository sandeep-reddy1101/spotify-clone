"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();
  const onClick = () => {
    // Add authenticaiton logoc
    router.push(href);
  };
  return (
    <button onClick={onClick} className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image className="object-cover" src={image} fill alt="Image" />
        
      </div>
      <p>{name}</p>
      <div className="absolute flex items-center justify-center opacity-0 rounded-full bg-green-500 group-hover:opacity-100 transition p-4 drop-shadow-md right-5 hover:scale-110">
        <FaPlay className="text-black"/>
      </div>
    </button>
  );
};

export default ListItem;
