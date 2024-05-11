import axios from "axios";
import { KEY } from "./key_movies";

export interface Episode {
  id: number;
  still_path?: string;
  episode_number: number;
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
