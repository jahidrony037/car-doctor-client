const Banner = () => {
  return (
    <div className="mt-[50px]">
      <div className="carousel w-full md:h-[600px] h-[250px] relative rounded-[10px]">
        <div
          id="slide1"
          className="carousel-item relative w-full rounded-[10px]"
        >
          <img
            src="https://i.ibb.co/xFvwMPG/1.jpg"
            className="w-full object-cover"
          />
          <div className="absolute  h-[100%]  bg-gradient-to-r from-gray-900 to-transparent w-full">
            <p className="md:text-[60px] text-[20px] font-bold text-white md:w-[463px]  md:pl-[100px] md:pt-[100px] pt-[25px] w-[200px]">
              Affordable Price For Car Servicing
            </p>
            <p className="text-white font-normal md:my-[30px] my-[20px] md:pl-[100px]  text-justify">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4 md:pl-[100px] ">
              <button className="btn bg-[#FF3811] text-white">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-center gap-5  transform -translate-y-1/2 right-5 top-[80%] ">
            <a
              href="#slide6"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/RBB5crL/2.jpg"
            className="w-full object-cover"
          />
          <div className="absolute   h-[100%]  bg-gradient-to-r from-gray-900 to-transparent w-full rounded-[10px]">
            <p className="md:text-[60px] text-[20px] font-bold text-white md:w-[463px]  md:pl-[100px] md:pt-[100px] pt-[25px] w-[200px]">
              Affordable Price For Car Servicing
            </p>
            <p className="text-white font-normal md:my-[30px] my-[20px] md:pl-[100px]">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4 md:pl-[100px] ">
              <button className="btn bg-[#FF3811] text-white">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-center gap-5  transform -translate-y-1/2 right-5 top-[80%]  ">
            <a
              href="#slide1"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full mt-[50px]">
          <img
            src="https://i.ibb.co/Z13wpdr/3.jpg"
            className="w-full object-cover "
          />
          <div className="absolute   h-[100%]  bg-gradient-to-r from-gray-900 to-transparent w-full rounded-[10px]">
            <p className="md:text-[60px] text-[20px] font-bold text-white md:w-[463px]  md:pl-[100px] md:pt-[100px] pt-[25px] w-[200px]">
              Affordable Price For Car Servicing
            </p>
            <p className="text-white font-normal md:my-[30px] my-[10px] md:pl-[100px]">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4 md:pl-[100px] ">
              <button className="btn bg-[#FF3811] text-white">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-center gap-5  transform -translate-y-1/2 right-5 top-[80%]  ">
            <a
              href="#slide2"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/pJYVHXP/4.jpg"
            className="w-full object-cover"
          />
          <div className="absolute   h-[100%]  bg-gradient-to-r from-gray-900 to-transparent w-full rounded-[10px]">
            <p className="md:text-[60px] text-[20px] font-bold text-white md:w-[463px]  md:pl-[100px] md:pt-[100px] pt-[25px] w-[200px]">
              Affordable Price For Car Servicing
            </p>
            <p className="text-white font-normal md:my-[30px] my-[20px] md:pl-[100px]">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4 md:pl-[100px] ">
              <button className="btn bg-[#FF3811] text-white">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-center gap-5  transform -translate-y-1/2 right-5 top-[80%]  ">
            <a
              href="#slide3"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/rvk5WF8/5.jpg"
            className="w-full object-cover"
          />
          <div className="absolute   h-[100%]  bg-gradient-to-r from-gray-900 to-transparent w-full rounded-[10px]">
            <p className="md:text-[60px] text-[20px] font-bold text-white md:w-[463px]  md:pl-[100px] md:pt-[100px] pt-[25px] w-[200px]">
              Affordable Price For Car Servicing
            </p>
            <p className="text-white font-normal md:my-[30px] my-[20px] md:pl-[100px]">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4 md:pl-[100px] ">
              <button className="btn bg-[#FF3811] text-white">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-center gap-5  transform -translate-y-1/2 right-5 top-[80%]  ">
            <a
              href="#slide4"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/T4fctVW/6.jpg"
            className="w-full object-cover"
          />
          <div className="absolute  h-[100%]  bg-gradient-to-r from-gray-900 to-transparent w-full rounded-[10px]">
            <p className="md:text-[60px] text-[20px] font-bold text-white md:w-[463px]  md:pl-[100px] md:pt-[100px] pt-[25px] w-[200px]">
              Affordable Price For Car Servicing
            </p>
            <p className="text-white font-normal md:my-[30px] my-[20px] md:pl-[100px]">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4 md:pl-[100px] ">
              <button className="btn bg-[#FF3811] text-white">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-center gap-5  transform -translate-y-1/2 right-5 top-[80%]  ">
            <a
              href="#slide5"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
