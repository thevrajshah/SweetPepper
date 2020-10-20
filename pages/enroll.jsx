export default function Enroll() {
  return (
    <>
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
        <div className="container">
          <form>
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                />
              </div>
              <div class="col">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter password"
                  name="pswd"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
