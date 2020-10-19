export default function About() {
  return (
    <>
      <div class="jumbotron jumbotron-fluid m-0">
        <div class="container">
          <h1 class="display-4">About Us</h1>
          {/* <p class="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p> */}
        </div>
      </div>
      <div className="container py-5">
        <div className="row text-center">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h3>Our Vision</h3>
            <p>
              To be a renowned institute which will be a bridge to connect the
              talent driven trained professionals in Culinary Arts and some of
              the finest names in industry by giving them the best training with
              the help of professional instructors and chefs.
            </p>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h3>Our Mission</h3>
            <p>
              Provide aspiring individuals a platform to showcase their talent
              and make them equipped with skills, tools, guidance, mentoring to
              be a professionals in the industry
            </p>
          </div>
        </div>
      </div>
      <section id="colouredSection">
        <div class="container">
          <div class="row py-2">
            <div class="col-lg-6 col-md-6 col-12">
              <img
                src="assets/ownerimg.png"
                id="ownerImg"
                class="img-fluid mx-5"
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
    </>
  );
}
