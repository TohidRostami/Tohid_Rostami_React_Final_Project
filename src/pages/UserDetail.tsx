import { useLoaderData } from "react-router-dom";
import User from "../components/User";
import UserType from "../Models/User";

const UserDetail: React.FC<{}> = () => {
  const loadedUser = useLoaderData() as UserType;
  console.log(loadedUser);
  return <User user={loadedUser} />;
};

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
