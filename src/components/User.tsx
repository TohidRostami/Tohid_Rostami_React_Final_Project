import React from "react";
import UserType from "../Models/User";

const User: React.FC<{ user: UserType }> = React.memo((props) => {
  const user: UserType = props.user;

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-14">
        <div className="flex flex-col items-center my-4">
          <h1 className="text-2xl font-bold mb-2	">Account info</h1>
          <p>
            <span className="font-bold">Id: </span>
            {user.id}
          </p>
          <p>
            <span className="font-bold">Username: </span>
            {user.username}
          </p>
        </div>

        <div className="flex flex-col items-center my-4">
          <h1 className="text-2xl font-bold mb-2	">User info</h1>
          <p>
            <span className="font-bold">Fistname: </span>
            {user.name.firstname}
          </p>
          <p>
            <span className="font-bold">Lastname: </span>
            {user.name.lastname}
          </p>
        </div>

        <div className="flex flex-col items-center my-4">
          <h1 className="text-2xl font-bold mb-2">User Address</h1>
          <p>
            <span className="font-bold">City: </span>
            {user.address.city}
          </p>
          <p>
            <span className="font-bold">Street: </span>
            {user.address.street}
          </p>
          <p>
            <span className="font-bold">Zipcode: </span>
            {user.address.zipcode}
          </p>
        </div>

        <div>
          <p>
            <span className="font-bold">Phone: </span>
            {user.phone}
          </p>
        </div>
      </div>
    </>
  );
});

export default User;
