import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const BookService = () => {
  const service = useLoaderData();
  const { _id, title, price, img } = service;

  const { user } = useAuth();
  //   console.log(user);

  const handleBooking = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = user?.email;
    const date = e.target.date.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;
    // console.log(name, email, date, phone, message);
    const order = {
      customerName: name,
      email,
      date,
      phone,
      message,
      price: price,
      service: title,
      img,
      service_id: _id,
    };
    console.log(order);

    const postData = async () => {
      const res = await fetch(
        `https://car-doctor-server-dusky-nine.vercel.app/bookings`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(order),
        }
      );
      const result = await res.json();
      //   console.log(result);
      if (result.insertedId) {
        toast.success("Booking Added Successfully");
      }
    };
    postData();
  };
  return (
    <div className="mt-[50px]">
      <div className="bg-[url('https://i.ibb.co/sRH6ndH/checkout.png')]  bg-no-repeat bg-center bg-cover">
        <div className="h-[300px] bg-gradient-to-r rounded-[10px] from-gray-900 via-transparent flex flex-col justify-center relative">
          <h2 className="text-white text-[45px] font-bold pl-[100px]">
            Check Out
          </h2>
          <button className="bg-[#FF3811] rounded-t-full text-[white] absolute py-[13px] px-[70px] bottom-0 lg:left-[40%] left-[20%] md:left[30%] ">
            Home/Checkout
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-center md:text-[45px] text-[34px] text-[#FF3811] font-bold mt-10">
          Service Name : {title}
        </h2>
      </div>
      <div className="md:mt-[100px] mt-[80px]">
        <form
          onSubmit={handleBooking}
          className="bg-base-200 md:p-24 p-5 rounded-[10px]"
        >
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 items-center ">
            <div className="form-control">
              <label className="label">
                <span className="label-text"></span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={user?.displayName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"></span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"></span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"></span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <textarea
              className="textarea textarea-bordered h-24"
              name="message"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-block bg-[#FF3811] text-white">
              Order Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookService;
