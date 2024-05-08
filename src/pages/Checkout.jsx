import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const service = useLoaderData();
  const { title } = service;
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
        <form className="bg-base-200 md:p-24 p-5 rounded-[10px]">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 items-center ">
            <div className="form-control">
              <label className="label">
                <span className="label-text"></span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
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
                name="LastName"
                placeholder="Last Name"
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
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <textarea
              className="textarea textarea-bordered h-24"
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

export default Checkout;
