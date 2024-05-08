import PropType from "prop-types";
const BannerCard = ({ item }) => {
  const { image, id } = item;
  return (
    <div className="carousel w-full md:h-[600px] h-[250px] relative rounded-[10px]">
      <div
        id={`#slide${id}`}
        className="carousel-item relative w-full rounded-[10px]"
      >
        <img src={image} className="w-full object-cover" />

        <div className="absolute md:h-[600px] h-[250px] bg-gradient-to-r from-gray-900 to-transparent w-full rounded-[10px]">
          <p className="text-[60px] font-bold text-white w-[463px] md:pl-[100px] md:pt-[100px]">
            Affordable Price For Car Servicing
          </p>
          <p className="text-white font-normal my-[30px] md:pl-[100px]">
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
          <div className="absolute flex justify-center gap-5  transform -translate-y-1/2 right-5 top-[80%]  ">
            <a
              href={`#slide${id === 1 ? 6 : id - 1}`}
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]"
            >
              ❮
            </a>
            <a
              href={`#slide${id === 6 ? 1 : id + 1}`}
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

BannerCard.propTypes = {
  item: PropType.object.isRequired,
};

export default BannerCard;
