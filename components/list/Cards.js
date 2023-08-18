import React, { useEffect, useState } from "react";
import { moviePosterUrl } from "../axios";
import Image from "next/image";
import Link from "next/link";
export const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const Card = ({ movie }) => {
  const {
    id,
    release_date,
    vote_average,
    overview,
    original_title,
    poster_path,
  } = movie;

  return (
    <Link href={{pathname : `/details/${id}`,query :{ 'movie-name' :original_title}}} >
    <div className=" rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] relative overflow-hidden flex-wrap pb-3 transition hover:translate-y-1 cursor-pointer hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_20px]">
      <div className=" h-[230px] relative">
        <Image
          src={moviePosterUrl(poster_path)}
          alt="poster"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
      </div>
      <div className=" flex justify-between items-center px-2 py-4 gap-x-2">
        <h3 className=" break-words font-medium">{original_title}</h3>
        <p className=" self-baseline">{vote_average}</p>
      </div>
      <div className=" line-clamp-2 px-2">{overview}</div>
    </div>
    </Link>
  );
};

const Cards = ({ movies }) => {
  return (
    <div className=" grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]  gap-x-4 gap-y-5 p-6">
      {movies.map((item, indx) => (
        <Card movie={item} key={indx} />
      ))}
    </div>
  );
};

export default Cards;
