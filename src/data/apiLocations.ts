import axios from "axios";

export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
  }
  
  export async function getDataLocation(): Promise<Location[]> {
    const URL = `https://rickandmortyapi.com/api/location`;
    try {
      const response = await axios.get(URL);
      const data = response.data;
      return data.results; 
    } catch (error) {
      console.error("Error fetching location data:", error);
      throw error;
    }
  }