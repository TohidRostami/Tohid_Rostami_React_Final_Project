import React from "react";
import UserType from '../Models/User';

const User: React.FC<{user : UserType}> = (props)=> {

  return <h1>{props.user.name.firstname}</h1>;
}

export default User;
