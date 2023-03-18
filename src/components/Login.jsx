import React from "react";
import Tilt from "react-parallax-tilt";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full relative bg-[#1E293B] overflow-hidden">
      <div className=" animate-pulse w-[500px] h-[500px] absolute bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 rounded-full -top-20 -right-20"></div>
      <div className=" animate-pulse w-[500px] h-[500px] absolute bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rounded-full -bottom-20 -left-20"></div>
      <Tilt>
        <div className="w-96 h-96 bg-white bg-opacity-10 z-10 flex flex-col items-center justify-between p-5 rounded-lg shadow-5xl border-t border-l border-gray-100/50 backdrop-filter backdrop-blur-sm">
          <h2 className="text-white text-3xl tracking-wider">Login Form</h2>
          <input className="input_field" type="text" name="" id="" placeholder="username" />
          <input className="input_field" type="email" name="" id="" placeholder="email" />
          <input className="input_field" type="password" name="" id="" placeholder="password" />
          <input
            className="bg-white bg-opacity-70 hover:bg-opacity-100 transition duration-200 px-10 py-3 cursor-pointer rounded-full"
            type="submit"
            value="Login"
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Login;
