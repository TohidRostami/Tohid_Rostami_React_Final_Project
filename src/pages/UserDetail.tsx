import { useLoaderData } from "react-router-dom";
import User from "../components/User";

function UserDetail() {
  const user = useLoaderData();
  return <User user={user} />;
}

export default UserDetail;

export async function loader() {
  const response = await fetch("https://fakestoreapi.com/users/1");

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ messahe: "Could not fetch products!" }),
      { status: 500 }
    );
  } else {
    return response;
  }
}
