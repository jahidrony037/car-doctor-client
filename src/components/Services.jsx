import useServices from "../hooks/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services] = useServices();
  // console.log(services);

  return (
    <div>
      <div className="space-y-6">
        <p className="text-[#FF3811] text-center">Service</p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center">
          Our Service Area
        </h2>
        <p className="text-center font-normal text-gray-600 dark:text-gray-400 leading-7 capitalize">
          the majority have suffered alteration in some form, by injected
          humour, <br />
          or randomised words which dont look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6  mt-[20px]">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="flex justify-center my-6">
        <button className="btn btn-outline text-[#FF3811] mx-auto ">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
