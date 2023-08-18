"use client";
import React from 'react'
import {MdHome} from 'react-icons/md'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
const Home = ()=>{
    return <Link href={"/list"}><div className='cursor-pointer p-2 hover:bg-neutral-200 rounded-lg'><MdHome size={24}/></div></Link>
}

const MovieDetails = ()=>{
    const searchParams = useSearchParams();
    const movieName = searchParams.get('movie-name') ?? '';
    return <div className=' font-semibold text-3xl'>
      {movieName}
    </div>
}

const Navbar = () => {
  const navItems = [
    {
     name : 'movie-details',
     component : MovieDetails
    },
    {
        name : 'home',
        component : Home
    }
  ]
  return (
    <nav className=' flex justify-between items-center px-4 py-2 shadow-lg'>
         {navItems.map((item)=><item.component key={item.name}/>)}
    </nav>
  )
}

export default Navbar