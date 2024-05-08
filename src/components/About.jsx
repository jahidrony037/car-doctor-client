/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
const About = () => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row gap-8 md:items-start">
        <div className="md:w-1/2 relative">
          <img
            src="../../src/assets/images/about_us/person.jpg"
            className="w-[90%] rounded-lg shadow-2xl  h-[473px] object-cover"
          />
          <img
            className="absolute  md:top-[45%] top-10 rounded-[10px] border-[10px] border-solid border-[#FFF] left-1/2 object-cover w-1/2 h-[330px]"
            src="../../src/assets/images/about_us/parts.jpg "
            alt="parts"
          />
        </div>
        <div className="w-1/2 space-y-8">
          <h1 className="text-[20px] text-[#FF3811] font-bold">About US</h1>
          <p className=" md:w-[376px] text-[#151515] md:text-[45px] ">
            We are qualified & of experience in this field
          </p>
          <p className="text-[#737373] text-[16px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            words which don't look even slightly believable.{" "}
          </p>
          <p className="text-[#737373] text-[16px]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn bg-[#FF3811] text-[white]">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
