'use client';
import useSearch from '@/components/hooks/useSearch'
import React, { createContext, useContext } from 'react'
const SearchContext = createContext({loading : false,loadingElement : null,searchResults : [],searchTerm : ''}) 
const SearchContextProvider = ({children}) => {
   const {loading,loadingElement,searchResults,searchTerm} = useSearch()
    return (
   <SearchContext.Provider value={{loading,loadingElement,searchResults,searchTerm}}>{children}</SearchContext.Provider>
  )
}
export const useSearchContext = ()=>useContext(SearchContext);
export default SearchContextProvider