import { useRouteError } from "react-router-dom";
import Logo from "assets/not_found.png";

export default function NotFound() {
  const error = useRouteError();
  return (
    <>
      <div
        className="container d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <img src={Logo} alt="Logo" style={{width: "50vw"}}/>
        <h1>Oops! Page Not Found</h1>
        <a
          href="/"
          className="btn btn-primary btn-lg active"
          role="button"
          aria-pressed="true"
        >
          Back to Home
        </a>
      </div>
    </>
  );
}
