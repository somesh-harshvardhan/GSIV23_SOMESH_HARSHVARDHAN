import { create } from "zustand";
import { fetchUpcomingMoviesUrl, searchMoviesUrl } from "../axios";

const useStore = create((set, get) => ({
  movies: [],
  searchTerm: "",
  searchResults : [],
  fetchUpcomingMovies: async (data) => {
    const { page: pageNumber, setLoading, setHasMore } = data;
    setLoading(true);
    try {
      const response = await fetchUpcomingMoviesUrl({ page: pageNumber });
      const { data: DATA } = response;
      const { total_pages, results, page } = DATA;
      if (page >= total_pages) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
      set({
        movies: [...get().movies, ...results.sort((a, b) => {
          const c = new Date(a.release_date);
          const d = new Date(b.release_date);

          return d - c;
        })],
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  },
  setSearchTerm: (event) => {
    set({ searchTerm: event.target.value });
  },
  searchMovies : async (page,setLoading,setHasMore,setPageNumber,resetSearchResults=false)=>{
    if(get().searchTerm === ''){
      set({searchResults : []});
      setHasMore(false);
      setPageNumber(1);
      return;
    }
    if(resetSearchResults){
      set({searchResults : []});
    }
    setLoading(true);
    try {
    const response = await searchMoviesUrl(get().searchTerm,page);
    const {data} = response;
    const {page : pageNumber,total_pages,results} = data;
    set({searchResults :  [...get().searchResults,...results]});
    if (pageNumber >= total_pages) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false);
    }
  }
}));
export default useStore;
