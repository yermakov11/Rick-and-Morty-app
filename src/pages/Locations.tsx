import Header from "../components/Header"
import { useState,useEffect } from "react"
import './stylePages/LocationsStyle.scss'
import { getDataLocation,Location } from "../data/apiLocations"

export default function Locations() {
  const [dataLocation,setDataLocations]=useState<Location[]|null>(null);

  useEffect(()=>{
    getDataLocation().then(data=>{
      setDataLocations(data)
    })
  },[])

  return (
    <main>
      <Header />
      <h1>Locations</h1>
      <div className="block-location">
      {dataLocation?.map((location)=>(
        <div key={location.id} className="list-location">
         <p>{location.name}</p>
         <p>{location.type}</p>
         <p>{location.dimension}</p>
        </div>
      ))}
      </div>
    </main>
  )
}
