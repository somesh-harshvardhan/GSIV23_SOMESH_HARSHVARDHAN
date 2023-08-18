import axios from "axios";
import { BASE_URL, IMAGE_URL } from "./urls";

const instance = axios.create({
    baseURL : BASE_URL,
});


export const searchMoviesUrl = (searchTerm,page)=>instance.get("/3/search/movie",{
    params : {include_adult: 'false', language: 'en-US', page: page,query : searchTerm},
    headers : {
        Accept : 'application/json',
        Authorization : `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`
    }
})
export const movideCreditsUrl = (movieid)=>instance.get(`/3/movie/${movieid}/credits`,{
    params: {language: 'en-US'},
    headers : {
        Accept : 'application/json',
        Authorization : `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`
    }
}
)
export const movieDetailsUrl = (movieid) =>instance.get(`/3/movie/${movieid}`,{
    params: {language: 'en-US'},
    headers : {
        Accept : 'application/json',
        Authorization : `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`
    }
})
export const moviePosterUrl = (path)=>`${IMAGE_URL}${path}`;
export const fetchUpcomingMoviesUrl = (params={language: 'en-US', page: 1})=>instance.get("/3/movie/upcoming",{
    headers : {
        'Content-Type'  : 'application/json',
        Authorization  : `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`
    },
    params
})