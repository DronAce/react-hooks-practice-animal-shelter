import React from "react";
import Pet from "./Pet";

function PetBrowser({pets, setPet}) {
  const allPets = pets.map((pet) => <Pet key={pet.id} pet={pet} setPet = {setPet}/>)
  return (
    <div className="ui cards">
      {allPets}
    </div>
    
  );
}

export default PetBrowser;
