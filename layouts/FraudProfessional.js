"use client";
import React from "react";
import axios from "axios";
import { useState } from "react";
// import MyModal from "./components/Modal";
import Swal from "sweetalert2";

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
      .post("http://127.0.0.1:8000/predict/professional", input)
      .then((response) => {
        console.log("lucky");
        console.log(response.data);
        // setResponse(response.data);
        if (response.data.fraud) {
          Swal.fire({
            title: "Fraudalent transaction detected!",
            text: "We've detected some unusual activity on the transaction. ",
            icon: "error",
          });
        } else {
          Swal.fire({
            title: "Transaction verified!",
            text: "Transaction approved. Our system has determined that this transaction is legitimate.",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        console.log("error", error); //handle error
      });
  };
  return (
    <div className="flex h-screen flex-col gap-12">
      <br />
      <div className="flex justify-center">
        <h1>Fraud detection (professional)</h1>
      </div>
      <br />
      <div className="flex  flex-col items-center gap-8">
        <input
          className="w-4/12 rounded-md"
          type="text"
          onChange={(e) => {
            const val = e.target.value;
            const arrr = val.split(",");
            setInput(arrr);
          }}
          placeholder="Enter input"
        />
        <button
          className="rounded-md bg-[#2ba283] px-4 py-2 text-white"
          onClick={(e) => {
            exec();
          }}
        >
          verify{" "}
        </button>
      </div>
      {/* <Modal /> */}
      <div>{message}</div>
    </div>
  );
};

export default Spam;
