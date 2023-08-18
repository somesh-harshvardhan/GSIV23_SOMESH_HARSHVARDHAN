"use client";
import React from 'react'
import Search from './Search';
import {MdHome} from 'react-icons/md'
import Link from 'next/link';
import useStore from '../store';
import { shallow } from 'zustand/shallow';
const Home = ()=>{
    return <Link href={"/list"}><div className='cursor-pointer p-2 hover:bg-neutral-200 rounded-lg'><MdHome size={24}/></div></Link>
}

const Navbar = () => {
  const navItems = [
    {
        name : 'search',
        component : Search
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