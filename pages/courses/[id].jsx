import { useRouter } from "next/router";
import data from "../../data.json";

export default function Course() {
  const router = useRouter();
  const { id } = router.query;
  const idFn = () => {
    return id == id;
  };
  const course = data.find(idFn);
  console.log(course);
  return data.map((data, key) => {
    key = data.id;
    return (
      <>
        <div className="jumbotron jumbotron-fluid py-5 m-0">
          <div className="container">
            <h2 className="text-center">{data.name} </h2>
          </div>
        </div>
        <section id="colouredSection">
          <div className="container py-5">
            {data.description.map((desc, key) => {
              key = desc.index;
              return <p>{desc}</p>;
            })}
          </div>
        </section>
        <section>
          <div className="container py-5">
            <div className="row">
              <div class="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                <h4 className="sectionHeader"> Course Details</h4>
                <div className="d-flex justify-content-between">
                  <h6>Duration</h6>
                  <p>{data.duration} </p>
                </div>
                <div className="d-flex justify-content-between">
                  <h6>Course Type</h6>
                  <p>{data.type}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <h6>Age Criterea</h6>
                  <p>{data.ageCriterea}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <h6>Joining Kit</h6>
                  <p className="text-right">{data.joiningKit}</p>
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
                  <b>Fees: ₹ {data.fees}</b>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  });
}

/* export async function getServerSideProps({params:{id}}) {
  const res= 
} */
