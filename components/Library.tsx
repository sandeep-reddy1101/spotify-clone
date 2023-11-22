"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

const Library = () => {
  const onClick = () => {
    // Handle upload
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex gap-x-2 items-center">
          <TbPlaylist size={26} className="text-neutral-400 " />
          <p className="text-md font-medium text-neutral-400">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="text-neutral-400 hover:text-white transition cursor-pointer"
        />
      </div>
      <div className="flex flex-col mt-4 px-3 gap-y-2">List of songs</div>
    </div>
  );
};

export default Library;