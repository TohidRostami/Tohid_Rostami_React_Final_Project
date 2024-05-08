import { useLoaderData } from "react-router-dom";
import User from "../components/User";
import UserType from "../Models/User";
import React, { useMemo } from "react";

const UserDetail: React.FC<{}> = () => {
  const loadedUser = useLoaderData() as UserType;
  
  const memoizedUserComponent = useMemo(() => <User user={loadedUser} />, [loadedUser]);

  return memoizedUserComponent;
};

export default React.memo(UserDetail);
export async function loader() {
  const apiUrl ="https://fakestoreapi.com/users/1";
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch User!" }),
      { status: 500 }
    );
  } else {
    return response;
  }
}
