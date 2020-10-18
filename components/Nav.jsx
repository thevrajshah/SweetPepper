import Link from "next/link";
import NavLink from "./NavLink";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Nav() {
  return (
    <>
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark ">
        <div class="container">
          <ul
            class="nav navbar-nav flex-row justify-content-center flex-nowrap mr-2"
            id="social"
          >
            <li class="nav-item">
              <a class="nav-link" href="">
                <FaFacebookSquare />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                <FaInstagram />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                <FaTwitter />{" "}
              </a>{" "}
            </li>
          </ul>
          <Link href="/">
            <a class="navbar-brand">SweetPepper</a>
          </Link>
          <button
            class="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
              <NavLink href="/">
                <li class="nav-item active">
                  <a class="nav-link">Home</a>
                </li>
              </NavLink>
              <NavLink href="/about">
                <li class="nav-item">
                  <a class="nav-link">About Us</a>
                </li>
              </NavLink>
              <NavLink href="/register">
                <li class="nav-item">
                  <a class="nav-link">Registration</a>
                </li>
              </NavLink>
              <li class="nav-item dropdown ">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Courses
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink href="/about-us">
                    <a class="dropdown-item">About Us</a>
                  </NavLink>
                  <NavLink href="/gallery">
                    <a class="dropdown-item">Gallery</a>
                  </NavLink>
                  <NavLink href="/contact">
                    <a class="dropdown-item" href="#">
                      Get in Touch
                    </a>
                  </NavLink>
                </div>
              </li>
              {/* <li class="nav-item"> <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a></li> */}
            </ul>
            <button class="btn my-2" id="CTA">
              Enroll Now!
            </button>
            {/* <button class="btn btn-outline-success" type="button">Main button</button> */}
          </div>
        </div>
      </nav>
    </>
  );
}
