import Link from "next/link";
import NavLink from "./NavLink";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Nav() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <ul
            className="nav navbar-nav flex-row justify-content-center flex-nowrap mr-2"
            id="social"
          >
            <li className="nav-item">
              <a className="nav-link" href="">
                <FaFacebookSquare />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                <FaInstagram />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                <FaTwitter />
              </a>{" "}
            </li>
          </ul>
          <Link href="/">
            <a className="navbar-brand">SweetPepper</a>
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <NavLink href="/">
                <li className="nav-item">
                  <a className="nav-link">Home</a>
                </li>
              </NavLink>
              <NavLink href="/about">
                <li className="nav-item">
                  <a className="nav-link">About Us</a>
                </li>
              </NavLink>
              <NavLink href="/register">
                <li className="nav-item">
                  <a className="nav-link">Registration</a>
                </li>
              </NavLink>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Courses
                </a>
                <div
                  className="dropdown-menu border-0 mb-1 p-0 overflow-hidden"
                  id="nav-dropdown"
                  aria-labelledby="navbarDropdown"
                >
                  <NavLink href="/about-us">
                    <a className="dropdown-item">About Us</a>
                  </NavLink>
                  <NavLink href="/gallery">
                    <a className="dropdown-item">Gallery</a>
                  </NavLink>
                  <NavLink href="/contact">
                    <a className="dropdown-item" href="#">
                      Get in Touch
                    </a>
                  </NavLink>
                </div>
              </li>
              {/* <li className="nav-item"> <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a></li> */}
            </ul>
            <button
              className="btn my-2"
              // type="button"
              id="CTA"
              // data-toggle="modal"
              // data-target="#loginModal"
            >
              Enroll Now!
            </button>
            {/* <button className="btn btn-outline-success" type="button">Main button</button> */}
          </div>
        </div>
      </nav>
    </>
  );
}
