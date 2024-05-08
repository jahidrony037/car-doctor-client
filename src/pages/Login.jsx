import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        // console.log(user);
        if (loggedInUser) {
          location.state ? navigate(`${location.state}`) : navigate("/");
          toast.success("User Login Successful");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row items-center">
        <div className="text-center lg:text-left">
          <img src="../../src/assets/images/login/login.svg" alt="login" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-[1px] border-solid border-[#D0D0D0] rounded-[10px]">
          <h2 className="text-center text-4xl font-bold pt-[20px]">
            Login Here
          </h2>
          <form onSubmit={handleSubmit} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] text-white">Login</button>
            </div>
          </form>
          <div>
            <p className="text-[#444444] text-[18px] text-center font-medium">
              or login with
            </p>
            <div className="flex gap-6 justify-center mt-6">
              <FaFacebook
                className="btn btn-circle p-2"
                fill="#0A66C2"
                size={30}
              />

              <FaLinkedin
                className="btn btn-circle p-2"
                fill="#0A66C2 "
                size={30}
              />
              <FcGoogle className="btn btn-circle p-2" size={30} />
            </div>
            <p className="text-lg font-normal text-center mb-5 mt-3">
              New User ? <span>Create an Account </span>
              <Link
                className="text-[#FF3811] text-lg font-bold underline"
                to="/register"
              >
                SignUP
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
