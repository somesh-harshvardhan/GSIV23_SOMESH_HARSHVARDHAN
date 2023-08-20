import { movideCreditsUrl, movieDetailsUrl, moviePosterUrl } from '@/components/axios';
import Image from 'next/image';
import React from 'react'

const fetchDetails = async (movie)=>{
  try {
    const response = await movieDetailsUrl(movie);
    const {data} = response;
    const {poster_path,vote_average,vote_count,overview,original_title,runtime,release_date} = data;
    return {poster_path,vote_average,overview,original_title,runtime,release_date}
  } catch (error) {
    console.log(error)
  }
    
}
const fetchCredits = async (movie)=>{
  try {
     const response  = await movideCreditsUrl(movie);
    const {data} = response;
    const {cast,crew} = data;
    const allCasts = [...cast,...crew].filter(item=>item.known_for_department === 'Acting').map(item=>item.name);
    const director = [...cast,...crew].filter(item=>item.known_for_department === 'Directing').map(item=>item.name);
    return {allCasts,director : director[0]};
  } catch (error) {
    console.log(error)
  }
   
}
function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
  
    return { hours, minutes };
  }
const Page =async ({params,searchParams}) => {
  const {movie} = params;
 const [credits,details] =await Promise.all([fetchCredits(movie),fetchDetails(movie)]);
  const {poster_path,vote_average,overview,original_title,runtime,release_date}= details;
  const {allCasts,director} = credits;
  const {hours,minutes} = toHoursAndMinutes(runtime)
  return (
    <div className=' p-4 flex items-center gap-x-4 max-md:flex-col'>
       <div className=' h-[300px] w-[200px] rounded-lg overflow-hidden relative max-md:w-3/4 max-sm:w-full'>
       <Image
          src={moviePosterUrl(poster_path)}
          alt="poster"
          fill
          />
       </div>
       <div className=' flex-1 self-stretch'>
         <h3>{original_title} <span>({vote_average})</span></h3>
         <p>{release_date} | {`${hours} : ${minutes}`} | {director}</p>
         <p className=' mb-3 mt-2'>Cast: {allCasts.map(item=>`${item},`)}</p>
         <p>Description: {overview}</p>
       </div>
    </div>
  )
}

export default Page