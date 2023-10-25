import React from "react";

const style = {
  margin: "10px",
  width: "400px",
  height: "300px",
  border: "1px solid black",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const Characters = (props) => {
  console.log(props);
  return (
    <div style={style}>
      <img
        src={props.character.image}
        alt="characterImage"
        style={{
          height: "50px",
          width: "50px",
          marginTop: "10px",
          borderRadius: "50%",
        }}
      />
      <p>Character id: {props.character.id}</p>
      <p>Character name: {props.character.name}</p>
      <p>Character status: {props.character.status}</p>
      <p>Character species: {props.character.species}</p>
      <p>Character gender: {props.character.gender}</p>
    </div>
  );
};

export default Characters;
