import { Component } from "react";

class PersonCard extends Component {
    render() { 
        const {lastName, firstName, age, hairColor}= this.props;

        return (
        <div className="person">
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair color: {hairColor}</p>
        </div>
        );
    }
}
export default PersonCard;