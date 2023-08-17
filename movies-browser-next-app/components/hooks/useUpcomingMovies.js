import React, { useEffect, useState } from 'react'
import useStore from '../store'
import usePageNumber from './usePageNumber';

const useUpcomingMovies = () => {
  const {fetchUpcomingMovies,movies,searchTerm} = useStore(state=>({fetchUpcomingMovies : state.fetchUpcomingMovies,movies : state.movies,searchTerm : state.searchTerm}));
  const [pageNumber,setPageNumber] = useState(1);
  const [loading,setLoading] = useState(false);
  const [hasMore,setHasMore] = useState(false);
  let otherConditions = searchTerm === '';
  const {loadingElement} = usePageNumber(loading,setPageNumber,hasMore,otherConditions);

  useEffect(()=>{
  if(searchTerm === '')  fetchUpcomingMovies({page : pageNumber,setLoading,setHasMore})
   // eslint-disable-next-line 
  },[pageNumber]);
 return {movies,loadingElement,loading}
}

export default useUpcomingMovies