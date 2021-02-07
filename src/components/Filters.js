import React from "react";

function Filters({type}) {
  let petType

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" onChange={(e) => petType = e.target.value}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={() => type({type: petType})}>Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
