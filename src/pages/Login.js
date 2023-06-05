import React from "react";
import Frame3 from '../assets/Frame3.png';
import log from "../assets/Frame.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className=" min-h-screen bg-cover bg-center"  style={{ backgroundImage: `url(${log})` }} >
      <nav className="flex ">
      <Link to='/'>
      <img
          src={Frame3}
          alt="Logo"
          className=" ml-[120px] mt-[48px]"
        /></Link>
      </nav>

      <div className="flex flex-col items-center justify-center mt-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-[#008753] text-[32px]  font-[600] text-center mb-4">Login</h1>
          <p className="text-gray-500 text-center mb-8">
            Login with your unique ID to see your health record.
          </p>

          <div className="mb-4">
            <label htmlFor="uniqueId" className="text-sm text-gray-700">
              Unique ID
            </label>
            <input
              type="text"
              id="uniqueId"
              className="w-342px h-12 border border-gray-300 rounded px-3"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="password" className="text-sm text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-342px h-12 border border-gray-300 rounded px-3"
            />
          </div>

          <button className="bg-green-500 text-white rounded-lg px-8 py-3 mb-4">
            Login <span className="ml-2">&#8594;</span>
          </button>

          <div className="w-1px border border-green-500  p-4 mb-8">
            <p className="text-center">or</p>
          </div>

          <button className="bg-black text-white rounded-lg px-8 py-3">
            Login with Wallet <span className="ml-2">&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

