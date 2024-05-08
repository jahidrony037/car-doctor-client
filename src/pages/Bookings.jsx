import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BookingCard from "../components/BookingCard";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();

  const url = `/bookings?email=${user?.email}`;
  useEffect(() => {
    axiosSecure
      .get(url)
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [url, axiosSecure]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure want to delete?");
    const deleteBookingService = async () => {
      const res = await fetch(
        `https://car-doctor-server-dusky-nine.vercel.app/bookings/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await res.json();
      console.log(result);
      if (result.deletedCount > 0) {
        toast.success("deleted successfully");
        // eslint-disable-next-line react/prop-types
        const remainingBookings = bookings.filter((items) => items._id !== id);
        setBookings(remainingBookings);
      }
    };
    if (proceed) {
      deleteBookingService();
    }
  };

  const handleConfirm = (id) => {
    const proceed = confirm("are you sure to confirm ?");
    const confirmBooking = async () => {
      const res = await fetch(
        `https://car-doctor-server-dusky-nine.vercel.app/bookings/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ status: "confirm" }),
        }
      );
      const result = await res.json();
      if (result.modifiedCount > 0) {
        const remainingBookings = bookings.filter(
          (booking) => booking._id !== id
        );
        const updated = bookings.find((booking) => booking._id === id);
        updated.status = "confirm";
        const newBookings = [updated, ...remainingBookings];
        setBookings(newBookings);
        toast.success("Confirmed");
      }
    };
    if (proceed) {
      confirmBooking();
    }
  };
  return (
    <div>
      <h2 className="text-4xl text-center">
        Bookings here : {bookings.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Service</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingCard
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
