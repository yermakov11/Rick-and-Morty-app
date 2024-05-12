import axios from "axios";
import { KEY } from "./key_movies";

export interface Episode {
  id: number;
  still_path: string;
  season_number: number;
  episode_number: number;
  overview:string,
  guest_stars:[
    {
      id:number,
      character:string,
    },
  ],

}

export async function getDataSeasons(seasonNumber: number): Promise<Episode[]>{
  const URL = `https://api.themoviedb.org/3/tv/60625/season/${seasonNumber}?api_key=${KEY}&language=en-US`;
  try {
    const response = await axios.get(URL);
    return response.data.episodes;
  } catch (error) {
    console.log(error);
    throw error; 
  }
}



