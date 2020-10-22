export default function Course() {
  return (
    <>
      <div class="jumbotron jumbotron-fluid py-5 m-0">
        <div class="container">
          <h2 class="text-center">Bakery Specialization</h2>
        </div>
      </div>
      <section id="colouredSection">
        <div class="container py-2">
          <p>
            We work all the time with our students & together we are able to
            create beautiful & amazing things that surely bring positive results
            and complete satisfaction.
          </p>
          <p>
            Our chef’s dedication and team work enhance the confidence of
            students by taking personal attention of them all the time.
          </p>
          <p>
            Our courses are designed as per requirements of baking industry.
          </p>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
              <h4 className="sectionHeader"> Course Details</h4>
              <div className="d-flex justify-content-between">
                <h6>Duration</h6>
                <p>3 Months</p>
              </div>
              <div className="d-flex justify-content-between">
                <h6>Course Type</h6>
                <p>Entrepreneur</p>
              </div>
              <div className="d-flex justify-content-between">
                <h6>Age Criterea</h6>
                <p>min 16yrs.</p>
              </div>
              <div className="d-flex justify-content-between">
                <h6>Joining Kit</h6>
                <p className="text-right">
                  Apron, Chef Caps, Ingredients, Study Material, Tool Kits.
                </p>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2" />
            <div class="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
              <h4 className="sectionHeader">Why Our Course?</h4>
              <p>
                <ul>
                  <li>100% Hands on Learning Experience</li>
                  <li>Individual Attention</li>
                  <li>Highly Experienced Chefs</li>
                  <li>Providing World Class Education Experience</li>
                  <li>100% Vegetarian Recipes (Egg and Gelatin Free) </li>
                </ul>
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-success">Enroll Now</button>
                <b>Fees: ₹ 85000</b>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
