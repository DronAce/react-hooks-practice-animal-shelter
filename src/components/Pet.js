import React from "react";

function Pet({pet, setPet}) {
  function adoptePet(){
    pet.isAdopted = true
    setPet(pet)
  }

  return (
    <div className="card">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button className={pet.isAdopted? "ui primary button" : "ui disabled button"}>Already adopted</button>
        <button className={pet.isAdopted? "ui disabled button" : "ui primary button" } onClick={adoptePet}>Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;
