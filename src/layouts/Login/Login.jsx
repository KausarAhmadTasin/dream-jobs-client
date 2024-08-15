import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";
import AuthContext from "../../provider/AuthProvider/AuthContex";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

const Login = () => {
  const [textPassword, setTextPassword] = useState(false);
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(() => {
        toast.success("Signed in!");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center bg-white dark:bg-[#1A1B1F] py-24 lg:py-0 lg:min-h-screen items-center ">
      <div className="lg:w-1/3 border bg-white dark:bg-[#1A1B1F] w-11/12 md:w-3/4 border-rose-200 rounded-md">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="a@b.com"
              className="input bg-white text-gray-600 dark:text-gray-300 dark:bg-[#292a2e] focus:outline-none focus:border-sky-400 border-slate-300"
              required
              autoFocus
              name="email"
            />
          </div>
          <div className="form-control">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={textPassword ? "" : "password"}
                  placeholder="Password"
                  className="input bg-white text-gray-600 dark:text-gray-300 dark:bg-[#292a2e]  focus:outline-none focus:border-sky-400 w-full border-slate-300"
                  required
                  name="password"
                />
                <div
                  onClick={() => setTextPassword(!textPassword)}
                  className="absolute top-1/3 right-2 text-gray-500"
                >
                  {textPassword ? <FiEye /> : <FiEyeOff />}
                </div>
              </div>
            </div>
            <label className="label label-text-alt justify-start text-gray-600 dark:text-gray-300">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                className=" link link-hover dark:decoration-blue-300 decoration-blue-600"
              >
                <span className="text-blue-600 dark:text-sky-400 ml-1">
                  Register
                </span>
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn border-none bg-[#57d367] hover:bg-[#65e476] text-white text-lg">
              Login
            </button>
          </div>
          <SocialLinks />
        </form>
      </div>
    </div>
  );
};

export default Login;
