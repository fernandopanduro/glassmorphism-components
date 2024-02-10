import React from "react";

type Props = {};

const Form = (props: Props) => {
  return (
    <section className="p-28 grid place-items-center bg-gradient-to-r from-violet-200 to-pink-200 relative min-h-svh overflow-hidden">
      <div className="absolute -top-96 w-[600px] h-[600px] bg-pink-500 blur-[250px]"></div>
      <div className="absolute -bottom-32 left-11 w-[500px] h-[500px] bg-yellow-400 blur-[250px]"></div>
      <div className="absolute bottom-14 right-28 w-[300px] h-[300px] bg-blue-500 blur-[250px]"></div>
      <div className="relative w-96 min-h-96 rounded-lg  bg-[rgba(255,255,255,0.1)] backdrop-blur-2xl shadow-sm shadow-[rgba(0,0,0,0.1)] border border-[rgba(255,255,255,0.5)]">
        <div>
          <div className="animate-form-square z-0 absolute top-40 -left-20 -right-14 w-28 h-28 backdrop-blur-sm bg-[rgba(255,255,255,0.1)] shadow-xl shadow-[rgba{0,0,0,0.1}] border-r border-b border-[rgba{255,255,255,0.5}] rounded-lg"></div>
          <div className="animate-form-square z-0 delay-100 absolute -top-12 -right-14 w-32 h-32 backdrop-blur-sm bg-[rgba(255,255,255,0.1)] shadow-xl shadow-[rgba{0,0,0,0.1}] border-r border-b border-[rgba{255,255,255,0.5}] rounded-lg"></div>
          <div className="animate-form-square z-0 delay-200 absolute bottom-20  -right-14 h-20 w-20 backdrop-blur-sm bg-[rgba(255,255,255,0.1)] shadow-xl shadow-[rgba{0,0,0,0.1}] border-r border-b border-[rgba{255,255,255,0.5}] rounded-lg"></div>
          <div className="animate-form-square z-0 delay-500 absolute -bottom-20 -left-32 h-5 w-5 backdrop-blur-sm bg-[rgba(255,255,255,0.1)] shadow-xl shadow-[rgba{0,0,0,0.1}] border-r border-b border-[rgba{255,255,255,0.5}] rounded-lg"></div>
          <div className="animate-form-square z-0 delay-300 absolute -top-20 left-36 h-16 w-16 backdrop-blur-sm bg-[rgba(255,255,255,0.1)] shadow-xl shadow-[rgba{0,0,0,0.1}] border-r border-b border-[rgba{255,255,255,0.5}] rounded-lg"></div>
          <form
            action=""
            className="relative w-full h-full p-7 z-50 backdrop-blur-lg">
            <legend className="text-white text-2xl font-bold leading-6 mb-10">
              Login Form
            </legend>
            <div className="w-full mt-5">
              <input
                type="text"
                placeholder="Username"
                className="w-full bg-[rgba(255,255,255,.2)] rounded-full border-none outline-none px-4 py-2 border-r-0 border-[rgba(255,255,255,0.2)] text-base text-white shadow-lg shadow-[rgba(0,0,0,0.05)] placeholder:text-white"
              />
            </div>
            <div className="w-full mt-5">
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-[rgba(255,255,255,.2)] rounded-full border-none outline-none px-4 py-2 border-r-0 border-[rgba(255,255,255,0.2)] text-base text-white shadow-lg shadow-[rgba(0,0,0,0.05)] placeholder:text-white"
              />
            </div>
            <div className="w-full mt-5">
              <input
                type="submit"
                value="Login"
                className="w-full bg-white rounded-full border-none outline-none px-4 py-2 border-r-0 border-[rgba(255,255,255,0.2)] text-base  text-slate-500 cursor-pointer max-w-28 shadow-lg shadow-[rgba(0,0,0,0.05)] placeholder:text-white mb-5 font-bold"
              />
            </div>
            <p className="text-white mt-5">
              Forgot Password?{" "}
              <a href="#" className="font-bold">
                Click Here
              </a>
            </p>
            <p className="text-white mt-5">
              Dont have an account?{" "}
              <a href="#" className="font-bold">
                Sing Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
