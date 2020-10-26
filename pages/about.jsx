export default function About() {
  return (
    <>
      <div class="jumbotron jumbotron-fluid m-0">
        <div class="container">
          <h1 class="display-4 text-center">- About Us -</h1>
          {/* <p class="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p> */}
        </div>
      </div>
      <section id="colouredSection">
        <div
          class="container py-2"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          data-aos-delay="25"
        >
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12 p-3">
              <img
                src="assets/owner-sanjeevk.png"
                id="ownerImg"
                class="img-fluid mx-lg-5 mx-md-auto"
                alt=""
              />
            </div>
            <div class="col-lg-6 col-md-6 col-12 py-2">
              <h3 className="sectionHeader left">OUR STORY</h3>

              <p>
                Vijayalaxmi got training from SK Culinary Institute which
                belongs to well-known chef Sanjeev Kapoor and also started
                session courses for individuals in Baroda under the name of
                SweetPepper.
              </p>
              <p>
                Her dream grew to inspire individual women in the same way she
                got inspired to make them equipped and trained in baking and
                cooking. Vijayalaxmi started to take professional courses as
                well along with this.
              </p>
              <p>
                With the same passion she continued started to grow, got
                recognitions, received couple of dedicated TV cooking shows, and
                demand of her students started increasing. Considering the
                increase in demand and give a stronger platform in 2019
                SweetPepper got affiliated with City & Guild London, UK
                institute to give an international certification.
              </p>
              <p>
                Now SweetPepper is still growing and thriving for next advanced
                move in near future.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div
            className="row text-center"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-delay="25"
          >
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h3 className="sectionHeader">Our Vision</h3>
              <p>
                To be a renowned institute which will be a bridge to connect the
                talent driven trained professionals in Culinary Arts and some of
                the finest names in industry by giving them the best training
                with the help of professional instructors and chefs.
              </p>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h3 className="sectionHeader">Our Mission</h3>
              <p>
                Provide aspiring individuals a platform to showcase their talent
                and make them equipped with skills, tools, guidance, mentoring
                to be a professionals in the industry
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="colouredSection">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          data-aos-delay="25"
        >
          <h3 className="sectionHeader">The Team</h3>
          <div className="d-flex flex-wrap justify-content-center">
            <div class="card d-inline-block m-3" style={{ width: "200px" }}>
              <img class="card-img-top" src="/assets/owner.png" alt="Owner" />
              <div class="card-body">
                <h4 class="card-title">Vijayalaxmi Vitta</h4>
                <p class="card-text">CEO</p>
              </div>
            </div>
            <div class="card d-inline-block m-3" style={{ width: "200px" }}>
              <img
                class="card-img-top"
                src="/assets/dummy-profile.png"
                alt="Owner"
              />
              <div class="card-body">
                <h4 class="card-title">Deepak Vitta</h4>
                <p class="card-text">Director - Business Operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
