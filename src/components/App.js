import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

const API = "http://localhost:3001/pets"

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  const [pet, setPet] = useState()
  
  useEffect(() => {
    fetch(API)
    .then((response) =>response.json())
    .then(data => {
      if (filters.type === "all") {
        setPets(data)
      } else {
        let petsByType = data.filter((pet) => filters.type === pet.type ? pet : null)
        setPets(petsByType)
      }
    })
  }, [filters]);

  useEffect(() => {
    if(pet !== undefined) {
      console.log(pet.id)
      fetch(API+"/"+pet.id, {
        method:'PATCH',
        body: JSON.stringify(pet),
        headers: {'Content-type': 'application/json'}
      })
    }

  },[pet])

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters type={setFilters}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets = {pets} setPet = {setPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
