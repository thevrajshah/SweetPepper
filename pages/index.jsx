export default function Home() {
  return (
    <>
      <div id="carouselControls" class="carousel slide" data-ride="carousel">
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
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <section id="colouredSection">
        <div class="container p-5">
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
        <div className="container">
          <div class="row py-5">
            <a href="" class="col-lg-2 col-md-12 col-7 mx-auto">
              <img
                src="assets/city_n_guild_level2_accrediation.png"
                class="img-thumbnail"
                alt=""
              />
            </a>
            <div class="col-lg-10 col-md-12 col-12 py-4">
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
    </>
  );
}
