"use client";
import useUpcomingMovies from "@/components/hooks/useUpcomingMovies";
import Cards from "@/components/list/Cards";
import React from "react";
import { useSearchContext } from "./SearchContext";

const List = (props) => {
  const { movies, loadingElement, loading } = useUpcomingMovies();
  const {
    loading: searching,
    loadingElement: searchLoadingElement,
    searchResults,
    searchTerm,
  } = useSearchContext();
  return (
    <div className=" pb-10">
      <Cards
        movies={
          searchResults.length > 0 && searchTerm !== "" ? searchResults : movies
        }
      />
      {(loading || searching) && (
        <div className=" text-center">
          <span className="loading loading-dots w-16 max-md:w-5 max-sm:w-3"></span>{" "}
        </div>
      )}
      <div ref={loadingElement}></div>
      <div ref={searchLoadingElement}></div>
    </div>
  );
};

export default List;
