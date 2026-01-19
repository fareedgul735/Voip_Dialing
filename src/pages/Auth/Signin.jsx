import { Link } from "react-router";
import { Mail, Lock } from "lucide-react";

import logo from "../../../public/logo.png";

const Signin = () => {
  return (
    <div className="min-h-screen p-[12px] w-full flex items-center justify-center bg-[linear-gradient(101.26deg,_#FAF5F5_0%,_#FFF2F2_27.63%,_#F9EDFF_39.44%,_#F9F7FF_54.44%,_#999CFF_100%)] relative overflow-hidden">
      <div className="relative bg-white w-[380px] rounded-2xl shadow-xl p-8">
        <div className="flex justify-center mb-6">
          <Link to={"/home"}>
            <div className="w-32">
              <img src={logo} alt="logo" />
            </div>
          </Link>
        </div>

        <h2 className="text-center text-orange-500 font-semibold mb-6">
          Sign In
        </h2>

        <div className="mb-4">
          <label className="text-sm text-gray-600 mb-1 block">Email</label>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-200 rounded px-6 py-2 pl-12 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail />
            </span>
          </div>
        </div>

        <div className="mb-2">
          <label className="text-sm text-gray-600 mb-1 block">Password</label>
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-200 rounded px-4 py-2 pl-12 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Lock />
            </span>
          </div>
        </div>

        <div className="text-right mb-5">
          <Link
            to={"/forgotPassword"}
            className="text-sm text-orange-400 hover:underline"
          >
            Forget Password?
          </Link>
        </div>

        <button className="w-full cursor-pointer py-2 rounded-full text-white font-medium bg-gradient-to-r from-orange-400 to-orange-600 hover:opacity-90 transition">
          Log In
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link to={"/signup"} className="text-orange-500 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
