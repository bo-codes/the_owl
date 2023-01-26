import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const params = useParams();
  const { userId } = params;

  // We can implement curly braces in jsx to either call a variable and use its value
  // Or to write a function directly into the curly braces
  // You can only render numbers and strings in jsx. Can't render booleans or objects or null or undefined

  return <h1>{userId}</h1>;
}

export default Profile;
