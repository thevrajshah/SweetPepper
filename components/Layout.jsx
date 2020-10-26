import NavBar from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

// [x] AOS
// [] Gallery
// [] Captcha
// [] Admin
// [x] Contact
// [] Login
// [] Razorpay
// [] Tesimonials
