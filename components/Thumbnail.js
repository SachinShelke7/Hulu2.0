import React, { forwardRef } from "react";
import Image from "next/image";
import { HiOutlineThumbUp } from "react-icons/hi";

const Thumbnail=forwardRef(({ result }, ref) => {
  const Base_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div ref={ref} className="cursor-pointer p-2 group transition ease-in-out duration-200 sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        src={
          `${Base_URL}${result.backdrop_path || result.poster_path}` ||
          `{BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
        alt='check internet'
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="text-xl font-medium group-hover:text-white">{result.title || result.original_name}</h2>
        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100">
          <p>{result.release_date || result.first_air_date}</p>
          <p>•</p>
          <div className="flex items-center">
            <HiOutlineThumbUp />
            <p>{result.vote_count}</p>
          </div>
        </div>
      </div>
    </div>
  );
})
Thumbnail.displayName = 'Thumbnail';
export default Thumbnail;
