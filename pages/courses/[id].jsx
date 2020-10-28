import Head from "next/head";
import { useRouter } from "next/router";
import Axios from "axios";
import courses from "../../data.json";
import loadFirebase from "../../db";
import useSWR from "swr";
import Loader from "../../components/Loader";

// export async function getServerSideProps(context) {
//   // let firebase = await loadFirebase;
//   // let db = firebase.firestore();
//   // Fetch data from external API
//   //  const res = await fetch(` `)
//   //  const data = await res.json()

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Course() {
  /*  var options = {
    key: 'YOUR_KEY_ID', // Enter the Key ID generated from the Dashboard
    amount: '50000', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: 'INR',
    name: 'Acme Corp',
    description: 'Test Transaction',
    image: 'https://example.com/your_logo',
    order_id: 'order_9A33XWu170gUtm', //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: 'Gaurav Kumar',
      email: 'gaurav.kumar@example.com',
      contact: '9999999999',
    },
    notes: {
      address: 'Razorpay Corporate Office',
    },
    theme: {
      color: '#F37254',
    },
  };
  var rzp1 = new Razorpay(options);
  rzp1.on('payment.failed', function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata);
  });
  const pay = () => {
    e.preventDefault();
    rzp1.open();
  }; */

  // const [data, setData] = React.useState({});
  // const router = useRouter();
  // const { id } = router.query;
  // const idFn = () => {
  //   return id == id;
  // };
  // React.useEffect(() => {
  //   setData(courses.find(idFn));
  //   console.log(data);
  // });

  const handleRazorPay = async (e) => {
    const API_URL = "http://localhost:3001/api/";
    e.preventDefault();
    const orderUrl = `${API_URL}order`;
    const response = await Axios.get(orderUrl);
    const { data } = response;
    const options = {
      key: process.env.RAZORPAY_KEY_SECRET,
      name: "SweetPepper",
      description: "The Baking & Cooking School",
      order_id: data.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          const url = `${API_URL}capture/${paymentId}`;
          const captureResponse = await Axios.post(url, {});
          console.log(captureResponse.data);
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#d3737d",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/courses/${query.id}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <Loader />;

  return (
    <>
      <Head>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </Head>

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
        <div className="container">
          <div className="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 py-5">
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
              <div className="d-flex justify-content-between align-items-center">
                <button onClick={handleRazorPay} className="btn btn-success">
                  Enroll Now
                </button>
                <b>Fees: ₹ {data.fees}</b>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2" />
            <div class="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 py-5">
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

              <button className="btn btn-primary float-right">
                Download Curriculum
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* export async function getServerSideProps({params:{id}}) {
  const res= 
} */
