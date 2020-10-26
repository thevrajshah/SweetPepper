export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-12 order-1 order-sm-12 px-0">
            <div
              id="carouselControls"
              class="carousel slide"
              data-ride="carousel"
              data-interval="2000"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    src="/assets/cake-1.jpg"
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="/assets/cake-2.jpg"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="/assets/cake-3.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselControls"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselControls"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-12 order-12 order-sm-1 py-4">
            <h2 className="my-lg-5">Some Catchy Line </h2>
          </div>
        </div>
      </div>
      <section id="colouredSection">
        <div
          class="container py-5"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          data-aos-delay="25"
        >
          <h3 className="sectionHeader">OUR COURSES</h3>
          <div style={{ textAlign: "center" }}>
            <i>"No one is born a great Chef, one learns by doing."</i>
            <p>
              So learn and discover the language of Baking and elevate your
              culinary skills to the higher levels. Join our Diploma in Baking &
              Patisserie courses, short term courses and weekend courses.
            </p>
            <p>
              SweetPepper is recognized in Vadodara, Gujarat for providing
              Diploma in Baking & Patisserie Level 2 Certified Pastry School
              from City & Guilds London, UK. C&G certificates are recognized and
              accepted by over 100 countries and major 5 Star+ Hotels, Cruises,
              etc. Students will find it much easier if they go for an interview
              in India and abroad.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-3">
          <div
            class="row"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-delay="25"
          >
            <a href="" class="col-lg-2 col-md-12 col-7 mx-auto">
              <img
                src="assets/city_n_guild_level2_accrediation.png"
                class="img-thumbnail my-4"
                alt=""
              />
            </a>
            <div class="col-lg-10 col-md-12 col-12 py-4">
              <h3>WHO ARE WE?</h3>
              <p>
                We cover Diploma in Baking & Patisserie - Level 2, students can
                also continue to study abroad. City & Guilds have been global
                skills development leaders for over 140 years. C&G
                qualifications set the standard with employers around the world
                with over one million people earning a City & Guilds
                qualification every year. C&G qualifications are designed to
                unleash your talent and realise your full potential. This means
                we ensure you have the skills you need to get into your first
                job and progress onto the next job and a life-long career.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="colouredSection">
        <div className="container">
          <div className="imgContainer">
            {/* {pictures.map((url, key) => (
            <div className='imgWrapper'>
              <img key={key} src={url} />
            </div>
          ))} */}
          </div>
        </div>
      </section>
    </>
  );
}
