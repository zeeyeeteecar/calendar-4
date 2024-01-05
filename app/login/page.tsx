"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";

export default function RegisterPage() {
  const router = useRouter();
  const [data, setData] = useState({
    Login: "",
    Password: "",
  });

  const loginUser = async (e: any) => {
    e.preventDefault();


    await signIn("credentials", {
      ...data,
      redirect: false,
    });
    // const response = await fetch("/api/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });

    // const userInfo = await response.json();

    // console.log("userInfo, ", userInfo);
    router.push("/dashboard");
  };

  /*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
      <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-100">
        <div className="sm:mx-auto w-[600px] border-0 text-blue-700 font-bold  justify-center text-center ">
          <h1 className="text-4xl ">
            Richmond Centre for Disability
            <br /> O2B2 System
          </h1>
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={loginUser} method="POST">
            <div>
              <div className="mt-2">
                <input
                  id="Login"
                  name="Login"
                  type="input"
                  autoComplete="Login"
                  required
                  placeholder="Username"
                  className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setData({ ...data, Login: e.target.value });
                  }}
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="Password"
                  name="Password"
                  type="password"
                  autoComplete="currentpassword"
                  required
                  placeholder="Password"
                  className="block w-full rounded-md  py-3 px-3 border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setData({ ...data, Password: e.target.value });
                  }}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600  py-3 px-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
