import React from "react";

const PersonCard = ({lastName, firstName, age, hairColor}) => {    

        return (
        <div className="person">
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair color: {hairColor}</p>
        </div>
        );
}

export default PersonCard;