"use client";

import React, { useState } from "react";

type Props = {};

const FormGlassmorphism = (props: Props) => {
  const [inputValueUsername, setInputValueUsername] = useState("");
  const [inputValuePassword, setInputValuePassword] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
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
            onSubmit={onSubmit}
            className="relative w-full h-full p-7 z-50 backdrop-blur-lg">
            <fieldset className="flex flex-col gap-6">
              <legend className="text-white text-2xl font-bold leading-6 mb-6">
                Login Form
              </legend>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="w-full ">
                    <input
                      tabIndex={1}
                      type="text"
                      placeholder="Username"
                      required
                      autoFocus
                      autoComplete="username"
                      value={inputValueUsername}
                      onChange={e => setInputValueUsername(e.target.value)}
                      className="w-full bg-[rgba(255,255,255,.2)] rounded-full border-none outline-none px-4 py-2 border-r-0 border-[rgba(255,255,255,0.2)] text-base text-white shadow-lg shadow-[rgba(0,0,0,0.05)] placeholder:text-white focus:outline focus:outline-blue-600"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      tabIndex={2}
                      type="password"
                      placeholder="Password"
                      required
                      alt="current-password"
                      value={inputValuePassword}
                      onChange={e => setInputValuePassword(e.target.value)}
                      className="w-full bg-[rgba(255,255,255,.2)] rounded-full border-none outline-none px-4 py-2 border-r-0 border-[rgba(255,255,255,0.2)] text-base text-white shadow-lg shadow-[rgba(0,0,0,0.05)] placeholder:text-white focus:outline focus:outline-blue-600"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <input
                    tabIndex={3}
                    type="submit"
                    value="Login"
                    className="w-full bg-white rounded-full border-none outline-none px-4 py-2 border-r-0 border-[rgba(255,255,255,0.2)] text-base  text-slate-500 cursor-pointer max-w-28 shadow-lg shadow-[rgba(0,0,0,0.05)] placeholder:text-white font-bold focus:outline focus:outline-blue-600"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white ">
                  Forgot Password?{" "}
                  <a href="#" className="font-bold">
                    Click Here
                  </a>
                </p>
                <p className="text-white ">
                  Dont have an account?{" "}
                  <a href="#" className="font-bold">
                    Sing Up
                  </a>
                </p>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormGlassmorphism;
