import PropType from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div>
      <div className="rounded-[10px] border-[1px] space-y-5 border-solid border-[#E8E8E8] p-6 shadow-lg">
        <div>
          <img
            src={img}
            alt=""
            className="w-[314px] h-[208px] object-cover rounded-[10px] mx-auto"
          />
        </div>
        <p className="text-[#444] text-[25px] font-bold">{title}</p>
        <div className="flex justify-between items-center">
          <p className="text-[#FF3811] text-[20px] font-semibold">
            price:${price}
          </p>
          <button className="text-[#FF3811]">
            <Link to={`/book/${_id}`}>
              <FaArrowRight />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropType.object.isRequired,
};

export default ServiceCard;
