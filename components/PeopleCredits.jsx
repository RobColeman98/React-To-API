import React, { Fragment } from "react";
// import

const PeopleCredits = (props) => {
  return (
    <div className="card text-white bg-secondary mb-3">
      <div className="card-header">Name: {props.people.name}</div>
      <div className="card-body">
        <h5 className="card-title">Age: {props.people.age}</h5>
        <p className="card-text">Gender: {props.people.gender}</p>
      </div>
    </div>
  );
};

export default PeopleCredits
