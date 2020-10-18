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
      <section id="colouredSection">
        <div class="container">
          <div class="row py-5">
            <div class="col-lg-6 col-md-6 col-12">
              <img
                src="assets/ownerimg.png"
                id="ownerImg"
                class="img-fluid float-right my-2"
                alt=""
              />
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              The Cooking & Baking School
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
