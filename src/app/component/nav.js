import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYoEcTkTPc-ZU76mvFYFRfE7739_86mXG47A&s" alt="..." width={60} height={54} className="d-inline-block align-text-top" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2 fs-5 mt-2"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item frontsize">
                <Link className="nav-link active mx-2 fs-5 mt-2" href="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-2 fs-5 mt-2" href="/service">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-2 fs-5 mt-2" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-outline-primary mx-2 fs-5" type="submit">
                SignUp
              </button>
              <button className="btn btn-outline-success mx-2 fs-5" type="submit">
                SignIn
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}