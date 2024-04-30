import { useRouteError } from "react-router-dom";
import Mainheader from "../Mainheader";

function ErrorPage() {
  const error = useRouteError();

  let title = "An Error occoured!";
  let message = "Could not find this page!";
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }
  return (
    <>
      <Mainheader />
      <h1>{title}</h1>
      <p>{message}</p>
    </>
  );
}

export default ErrorPage;
