import { KEY } from "./key_movies";
import axios from "axios";

export interface Character {
  id: number;
  profile_path?: string;
  name: string;
  gender: number;
}

export async function getDataCharacter(): Promise<Character[]> {
  const URL = `https://api.themoviedb.org/3/tv/60625/credits?api_key=${KEY}`;
  try {
    const response = await axios.get(URL);
    return response.data.cast;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
