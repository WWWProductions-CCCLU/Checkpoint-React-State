import React from "react";

const ProfileCard = ({ person, mountedTime }) => (
  <div style={{ border: "1px solid #ccc", padding: "20px", margin: "20px" }}>
    <img
      src={person.imgSrc}
      alt={person.fullName}
      style={{ width: "150px", height: "150px", borderRadius: "50%" }}
    />
    <h2>{person.fullName}</h2>
    <p>{person.bio}</p>
    <p>Profession: {person.profession}</p>
    <p>Mounted for: {mountedTime} seconds</p>
  </div>
);

export default ProfileCard;
