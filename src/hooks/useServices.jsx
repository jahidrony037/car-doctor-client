import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useServices = () => {
  const [services, setServices] = useState([]);
  const axiosSecure = useAxiosSecure();
  //   console.log(services);

  useEffect(() => {
    // fetch(`/services`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setServices(data);
    //   });
    axiosSecure
      .get("/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err.message));
  }, [axiosSecure]);

  return [services];
};

export default useServices;
