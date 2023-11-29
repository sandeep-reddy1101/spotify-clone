import Image from "next/image";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import PlayButton from "./PlayButton";

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);
  return (
    <div
      onClick={() => onClick(data.id)}
      className="relative group flex flex-col justify-center items-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 hover:bg-neutral-400/10 cursor-pointer transition p-3"
    >
      <div className="relative w-full h-full aspect-square rounded-md overflow-hidden">
        <Image
          src={imagePath || "/images/liked.png"}
          fill
          className="object-cover"
          alt={data.title}
        />
      </div>
      <div className="flex flex-col w-full items-start pt-4 gap-y-1">
        <p className="font-semibold w-full truncate">{data.title}</p>
        <p className="text-sm text-neutral-400 pb-4 w-full truncate">
          By {data.author}
        </p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
};

export default SongItem;
