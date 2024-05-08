import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "./../hooks/useAuth";

const SignUP = () => {
  const { createUser, logOut, updateUser } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    const handleRegister = () => {
      if (password !== confirmPassword) {
        return setError("password and confirm password must be same");
      }
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          if (user) {
            setError("");
            updateUser(name)
              .then(() => {})
              .catch((error) => console.log(error.message));
            logOut()
              .then(() => {})
              .catch((err) => console.log(err.message));

            toast.success("User register Successfully.");
            navigate("/login");
          }
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
    };
    handleRegister();
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row items-center">
        <div className="text-center lg:text-left">
          <img src="../../src/assets/images/login/login.svg" alt="login" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-[1px] border-solid border-[#D0D0D0] rounded-[10px]">
          <h2 className="text-center text-4xl font-bold pt-[20px]">
            Register Here
          </h2>
          <form onSubmit={handleSubmit} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                name="confirmPassword"
                className="input input-bordered"
                required
              />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] text-white">Register</button>
            </div>
          </form>
          <div>
            <p className="text-xs font-normal text-center mb-5 mt-3">
              Already Have an <span>Account ?</span>
              <Link
                className="text-[#FF3811] text-lg font-bold underline"
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
