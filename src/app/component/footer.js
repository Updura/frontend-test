import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Foot() {
  return (
    <>
<footer className="bg-dark text-light py-4">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <p>© 2024 Pacharapon. All rights reserved.</p>
      </div>
      <div className="col-md-6 text-md-end">
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
          <li className="list-inline-item"><a href="#">Terms of Use</a></li>
          <li className="list-inline-item"><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

</>
  );
}