import { FaMobile, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="row pt-5">
          <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <h5>CONTACT US</h5>
            <p>1st Floor, 18-A Aditi Park,</p>
            <p>Beside Akota Stadium, Akota,</p>
            <p> Vadodara-390020, Gujarat, India.</p>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <h5>WORKING HOURS</h5>
            <p>Monday - Saturday : 9:00 Am - 7:00 Pm</p>
            <p>
              <FaMobile /> &nbsp;+91 99243 080 99
            </p>
            <p>
              <FaEnvelope /> &nbsp;
              <a href="mailto:info@sweetpepper.net">info@sweetpepper.net</a>
            </p>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12 col-12">
            <h5>SITEMAP</h5>
            <div class="row">
              <a href="index.html">HOME</a>
              <br />
              <a href="aboutus.html">About </a>
              <br />
              <a href="registration.html">Registration </a>
            </div>
          </div>
        </div>
      </div>
      <hr class="w-75 mx-auto" />
      <div class="copyright">
        Copyright © 2020 Sweetpepper - All Rights Reserved.
      </div>
    </footer>
  );
}
