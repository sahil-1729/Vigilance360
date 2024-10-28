"use client";
import axios from "axios";
import { useState } from "react";

import Link from "next/link";

function Component() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4 border-black py-12 md:py-24">
      <div className="flex flex-col items-center justify-center gap-10 space-y-2">
        <div className="flex flex-col items-center justify-center space-y-2">
          <CircleCheckIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Payment successful
          </h1>
        </div>

        <p className="max-w-[600px] text-center text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
          Your order has been confirmed and is now being processed. Thank you
          for shopping with us.
        </p>
      </div>
    </div>
  );
}

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
const Spam = () => {
  // 161304,-3.04354,-4.147345,1.621898,0.702232,1.509553,-1.752889,0.853788,-0.408466,-0.974442,0.395108,-1.666658,2.393264,-2.684519,1.225875,-1.075812,0.694202,1.795492,-2.140392,0.642101,-0.894303,0.284294,-1.052755,1.023842,-1.345432,0.932821,0.194746,-0.495807,0.122782,325.5
  const [input, setInput] = useState([
    161304, -3.04354, -4.147345, 1.621898, 0.702232, 1.509553, -1.752889,
    0.853788, -0.408466, -0.974442, 0.395108, -1.666658, 2.393264, -2.684519,
    1.225875, -1.075812, 0.694202, 1.795492, -2.140392, 0.642101, -0.894303,
    0.284294, -1.052755, 1.023842, -1.345432, 0.932821, 0.194746, -0.495807,
    0.122782, 325.5,
  ]);
  const [message, setMessage] = useState("");
  const exec = async () => {
    let formData = new FormData();

    formData.append("arrr", input);

    // for (var key of formData.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    // console.log(`type of formdata ${formData.input} type of data ${formData}`);

    axios
      .post("http://127.0.0.1:8000/predict", input)
      .then((response) => {
        console.log("lucky");
        console.log(response.data);
        // setResponse(response.data);
      })
      .catch((error) => {
        console.log("error", error); //handle error
      });
  };
  return (
    <>
      <br />
      <div className="flex justify-center">
        <h1>Fraud detection</h1>
      </div>
      <br />
      <div className="flex flex-row justify-center gap-8">
        <input
          type="text"
          onChange={(e) => {
            const val = e.target.value;
            const arrr = val.split(",");
            setInput(arrr);
          }}
          placeholder="Enter input"
        />
        <button
          onClick={(e) => {
            exec();
          }}
        >
          Verify
        </button>
      </div>
      <div>
        {message}
        <Component />
      </div>
    </>
  );
};

export default Spam;
