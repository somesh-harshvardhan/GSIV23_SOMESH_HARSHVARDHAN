import React, { useEffect, useState } from "react";
import useStore from "../store";
import usePageNumber from "./usePageNumber";

const useSearch = () => {
  const { searchTerm, setSearchTerm, searchMovies, searchResults } = useStore(
    (state) => ({
      searchTerm: state.searchTerm,
      setSearchTerm: state.setSearchTerm,
      searchMovies: state.searchMovies,
      searchResults: state.searchResults,
    })
  );
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const { loadingElement } = usePageNumber(loading, setPageNumber, hasMore);
  useEffect(() => {
    const fetchSearch = async () => {
      searchMovies(1, setLoading, setHasMore, setPageNumber,true);
    };
    let timer = setTimeout(fetchSearch, 1000);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    searchMovies(pageNumber, setLoading, setHasMore, setPageNumber);
  }, [pageNumber]);

  return { loadingElement, searchResults, loading, searchTerm };
};

export default useSearch;
