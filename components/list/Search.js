"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";
import useStore from "../store";
import { useSearchContext } from "@/app/list/SearchContext";

const Search = () => {
  const { searchTerm, setSearchTerm} = useStore((state) => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
    searchMovies: state.searchMovies,
  }));

  const {loading} = useSearchContext();
  return (
    <form className=" flex  items-center justify-start px-3 py-2 bg-disabled w-1/3 max-md:w-2/3 rounded-lg">
      <div>
        <BiSearch
          className=" text-light-gray cursor-pointer hover:text-black"
          size={20}
        />
      </div>
      <div className=" w-full relative">
        <input
          value={searchTerm}
          onChange={setSearchTerm}
          type="text"
          className=" w-full bg-transparent outline-none border-none ml-3"
          placeholder="Search"
        />
        {loading && (
          <span className="loading loading-spinner loading-sm right-0 absolute top-[3px]"></span>
        )}
      </div>
    </form>
  );
};

export default Search;
