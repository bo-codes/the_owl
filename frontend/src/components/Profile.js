import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const params = useParams();
  const { userId } = params;

  return <h1>Uhli's Th0ughts {userId}</h1>;
}

export default Profile;
