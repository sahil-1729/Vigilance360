"use client";
import React from "react";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const FraudCredit = () => {
  const [transact, setTransact] = useState({
    amt: 0,
    zip: 0,
    lat: 0,
    long: 0,
    city_pop: 0,
    unix_time: 0,
    merch_lat: 0,
    merch_long: 0,
  });

  const exec = async () => {
    const res = [
      transact.amt,
      transact.zip,
      transact.lat,
      transact.long,
      transact.city_pop,
      transact.unix_time,
      transact.merch_lat,
      transact.merch_long,
    ];
    console.log(res);
    // return;
    // let formData = new FormData();

    // formData.append("arrr", res);

    axios
      .post("http://127.0.0.1:8000/predict/credit", res)
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
        <h1>Fraud detection (credit cards)</h1>
      </div>
      <div className="flex  flex-col items-center gap-8">
        <div className="flex flex-col justify-center overflow-hidden">
          <div className=" w-full rounded-md bg-white p-6 shadow-xl  ring-2 lg:max-w-xl">
            <h5 className="text-center text-3xl font-semibold ">
              Enter transaction details
            </h5>
            <form className="mt-6 flex flex-col gap-4">
              <div className="flex flex-row  gap-4">
                <div className="mb-2 w-6/12">
                  <label
                    for="email"
                    className="text-sm font-semibold text-gray-800"
                  >
                    amount
                  </label>

                  <input
                    type="number"
                    className="mt-2  w-full rounded-md border bg-white px-4 py-2  focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                    onChange={(e) => {
                      const ip = parseFloat(e.target.value);
                      setTransact({ ...transact, amt: ip });
                    }}
                  />
                </div>
                <div className="mb-2 w-6/12">
                  <label
                    for="number"
                    className=" text-sm font-semibold text-gray-800"
                  >
                    zip
                  </label>
                  <input
                    type="number"
                    className="mt-2 w-full rounded-md border bg-white px-4 py-2  focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                    onChange={(e) => {
                      const ip = parseFloat(e.target.value);
                      setTransact({ ...transact, zip: ip });
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-row justify-between gap-4">
                <div className="mb-2 w-6/12">
                  <label
                    for="lat"
                    className="text-sm font-semibold text-gray-800"
                  >
                    lat
                  </label>
                  <input
                    type="number"
                    className="mt-2  w-full rounded-md border bg-white px-4 py-2  focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                    onChange={(e) => {
                      const ip = parseFloat(e.target.value);
                      setTransact({ ...transact, lat: ip });
                    }}
                  />
                </div>
                <div className="mb-2 w-6/12">
                  <label
                    for="long"
                    className=" text-sm font-semibold text-gray-800"
                  >
                    long
                  </label>
                  <input
                    type="number"
                    className="mt-2 w-full rounded-md border bg-white px-4 py-2  focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                    onChange={(e) => {
                      const ip = parseFloat(e.target.value);
                      setTransact({ ...transact, long: ip });
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-row justify-between gap-4">
                <div className="mb-2 w-6/12">
                  <label
                    for="lat"
                    className="text-sm font-semibold text-gray-800"
                  >
                    city population
                  </label>
                  <input
                    type="number"
                    className="mt-2  w-full rounded-md border bg-white px-4 py-2  focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                    onChange={(e) => {
                      const ip = parseFloat(e.target.value);
                      setTransact({ ...transact, city_pop: ip });
                    }}
                  />
                </div>
                <div className="mb-2 w-6/12">
                  <label
                    for="long"
                    className=" text-sm font-semibold text-gray-800"
                  >
                    unix time
                  </label>
                  <input
                    type="number"
                    className="mt-2 w-full rounded-md border bg-white px-4 py-2  focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                    onChange={(e) => {
                      const ip = parseFloat(e.target.value);
                      setTransact({ ...transact, unix_time: ip });
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-row justify-between gap-4">
                <div className="mb-2 w-6/12">
                  <label
                    for="lat"
                    className="text-sm font-semibold text-gray-800"
                  >
                    merchant latitude
                  </label>
                  <input
                    type="number"
                    className="mt-2  w-full rounded-md border bg-white px-4 py-2  focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                    onChange={(e) => {
                      const ip = parseFloat(e.target.value);
                      setTransact({ ...transact, merch_lat: ip });
                    }}
                  />
                </div>
                <div className="mb-2 w-6/12">
                  <label
                    for="long"
                    className=" text-sm font-semibold text-gray-800"
                  >
                    merchant longitude
                  </label>
                  <input
                    type="number"
                    className="mt-2 w-full rounded-md border bg-white px-4 py-2  focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                    onChange={(e) => {
                      const ip = parseFloat(e.target.value);
                      setTransact({ ...transact, merch_long: ip });
                    }}
                  />
                </div>
              </div>

              <button
                className="mt-6 w-full rounded-md bg-[#2ba283] px-4 py-2 text-white"
                onClick={(e) => {
                  e.preventDefault();
                  exec();
                }}
              >
                verify{" "}
              </button>

              {/* <div className="mt-6">
                <button className="w-full transform rounded-md px-4 py-2 tracking-wide text-white transition-colors duration-200  focus:outline-none ">
                  Login
                </button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
      {/* <Modal /> */}
    </div>
  );
};

export default FraudCredit;
