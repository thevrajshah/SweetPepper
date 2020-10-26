import Head from "next/head";

export default function Enroll() {
  function onSubmit(token) {
    document.getElementById("demo-form").submit();
  }
  return (
    <>
      <Head>
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </Head>
      {/* <div class="jumbotron jumbotron-fluid m-0">
        <div class="container">
          <h1 class="display-4">Enroll</h1>
          <p class="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p> 
        </div>
      </div> */}
      <section id="colouredSection">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
              <img className="w-100 mb-3" src="/assets/contact.svg" alt="" />
            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
              <h3>Send an Enquiry</h3>
              <p>
                Any Doubts? Write to us & we'll call you for more information.
              </p>
              <form>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email Address"
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Phone Number"
                  required
                />
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="What do you want to know about?"
                />
                <select id="inputState" class="form-control" required>
                  <option selected>Preferred Course</option>
                  <option>a</option>
                  <option>b</option>
                  <option>c</option>
                </select>
                <button type="submit"  class="g-recaptcha"
                  data-sitekey="6LcOstoZAAAAAOUpv_S2rB7wX1KHSS7s2nsV_wLk"
                  data-callback={onSubmit}
                  data-action="submit" class="btn btn-primary mr-2">
                  Send
                </button>
                <button type="reset" className="btn btn-outline-primary">
                  Clear
                </button>
                <button
                 
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
