import { ReactComponent as NotFoundLogo } from "../assets/notfound.svg";

const NotFound = () => {
  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <NotFoundLogo
        style={{ width: "100%", height: "100%", maxHeight: "480px" }}
      />
      <h1>Page Not Found</h1>
      <a
        href="/"
        class="btn btn-primary btn-lg active"
        role="button"
        aria-pressed="true"
      >
        Back to Home
      </a>
    </div>
  );
};

export default NotFound;
