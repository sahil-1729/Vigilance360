"use client";
import React from "react";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Spam = () => {
  // 161304,-3.04354,-4.147345,1.621898,0.702232,1.509553,-1.752889,0.853788,-0.408466,-0.974442,0.395108,-1.666658,2.393264,-2.684519,1.225875,-1.075812,0.694202,1.795492,-2.140392,0.642101,-0.894303,0.284294,-1.052755,1.023842,-1.345432,0.932821,0.194746,-0.495807,0.122782,325.5
  const [transact, setTransact] = useState({
    step: 0,
    amount: 0,
    oldBalanceOrg: 0,
    newbalanceOrg: 0,
    oldbalanceDest: 0,
    newbalanceDest: 0,
    isFlaggedFraud: 0,
    typeCashin: 0,
    typeCashout: 0,
    typeDebit: 0,
    typePayment: 0,
    typeTransfer: 0,
  });

  const exec = async () => {
    let formData = new FormData();

    formData.append("arrr", input);

    axios
      .post("http://127.0.0.1:8000/predict", input)
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
        <h1>Fraud detection (user)</h1>
      </div>
      <div className="flex  flex-col items-center gap-8">
        {/* <input
          className="w-4/12 rounded-md"
          type="text"
          onChange={(e) => {
            const val = e.target.value;
            const arrr = val.split(",");
            setInput(arrr);
          }}
          placeholder="Enter input"
        /> */}
        <div className="flex flex-col justify-center overflow-hidden">
          <div className=" w-full rounded-md bg-white p-6 shadow-xl  ring-2 lg:max-w-xl">
            <h5 className="text-center text-3xl font-semibold ">
              Enter transaction details
            </h5>
            <form className="mt-6 flex flex-col gap-4">
              <div className="mb-2">
                <label
                  for="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Step
                </label>
                <input
                  type="number"
                  className="mt-2 w-full rounded-md border bg-white px-4 py-2 text-indigo-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                  onChange={(e) => {
                    const ip = e.target.value;
                    setTransact({ ...transact, step: ip });
                  }}
                />
              </div>

              <div className="mb-2">
                <label
                  for="email"
                  className="text-sm font-semibold text-gray-800"
                >
                  Amount
                </label>
                <input
                  type="number"
                  className="mt-2  w-full rounded-md border bg-white px-4 py-2 text-indigo-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                  onChange={(e) => {
                    const ip = e.target.value;
                    setTransact({ ...transact, amount: ip });
                  }}
                />
              </div>

              <div className="flex flex-row gap-4">
                <div className="mb-2">
                  <label
                    for="email"
                    className="text-sm font-semibold text-gray-800"
                  >
                    OldBalanceOrg
                  </label>
                  <input
                    type="number"
                    className="mt-2  w-full rounded-md border bg-white px-4 py-2 text-indigo-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                    onChange={(e) => {
                      const ip = e.target.value;
                      setTransact({ ...transact, oldBalanceOrg: ip });
                    }}
                  />
                </div>
                <div className="mb-2">
                  <label
                    for="password"
                    className=" text-sm font-semibold text-gray-800"
                  >
                    newbalanceOrg
                  </label>
                  <input
                    type="number"
                    className="mt-2 w-full rounded-md border bg-white px-4 py-2 text-indigo-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                    onChange={(e) => {
                      const ip = e.target.value;
                      setTransact({ ...transact, newbalanceOrg: ip });
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-row gap-4">
                <div className="mb-2">
                  <label
                    for="email"
                    className="text-sm font-semibold text-gray-800"
                  >
                    OldbalanceDest
                  </label>
                  <input
                    type="number"
                    className="mt-2  w-full rounded-md border bg-white px-4 py-2 text-indigo-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                    onChange={(e) => {
                      const ip = e.target.value;
                      setTransact({ ...transact, oldbalanceDest: ip });
                    }}
                  />
                </div>
                <div className="mb-2">
                  <label
                    for="password"
                    className=" text-sm font-semibold text-gray-800"
                  >
                    NewbalanceDest
                  </label>
                  <input
                    type="number"
                    className="mt-2 w-full rounded-md border bg-white px-4 py-2 text-indigo-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                    onChange={(e) => {
                      const ip = e.target.value;
                      setTransact({ ...transact, newbalanceDest: ip });
                    }}
                  />
                </div>
              </div>

              <div className="mb-2">
                <label
                  for="email"
                  className="text-sm font-semibold text-gray-800"
                >
                  Type
                </label>
                <div className="flex flex-row gap-4">
                  <div className="flex flex-row items-center gap-1">
                    <input
                      name="type"
                      type="radio"
                      className="h-4 w-4 appearance-none rounded-full border-2 border-[#2ba283]"
                      value={1}
                      checked={transact.typeCashin === 1}
                      onChange={() => {
                        const res = {
                          ...transact,
                          typeCashin: 1,
                          typeCashout: 0,
                          typeDebit: 0,
                          typeDebit: 0,
                          typePayment: 0,
                          typeTransfer: 0,
                        };
                        setTransact(res);
                        console.log(res);
                      }}
                    />
                    <label>Cash in</label>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <input
                      name="type"
                      type="radio"
                      className="h-4 w-4 appearance-none rounded-full border-2 border-[#2ba283]"
                      value={1}
                      checked={transact.typeCashout === 1}
                      onChange={() => {
                        const res = {
                          ...transact,
                          typeCashin: 0,
                          typeCashout: 1,
                          typeDebit: 0,
                          typeDebit: 0,
                          typePayment: 0,
                          typeTransfer: 0,
                        };
                        setTransact(res);
                        // console.log(res);
                      }}
                    />
                    <label>Cash out</label>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <input
                      name="type"
                      type="radio"
                      className="h-4 w-4 appearance-none rounded-full border-2 border-[#2ba283]"
                      value={1}
                      checked={transact.typeDebit === 1}
                      onChange={() => {
                        const res = {
                          ...transact,
                          typeCashin: 0,
                          typeCashout: 0,
                          typeDebit: 1,
                          typeDebit: 0,
                          typePayment: 0,
                          typeTransfer: 0,
                        };
                        setTransact(res);
                        // console.log(res);
                      }}
                    />
                    <label>Debit</label>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <input
                      name="type"
                      type="radio"
                      className="h-4 w-4 appearance-none rounded-full border-2 border-[#2ba283]"
                      value={1}
                      checked={transact.typePayment === 1}
                      onChange={() => {
                        const res = {
                          ...transact,
                          typeCashin: 0,
                          typeCashout: 0,
                          typeDebit: 0,
                          typeDebit: 0,
                          typePayment: 1,
                          typeTransfer: 0,
                        };
                        setTransact(res);
                        // console.log(res);
                      }}
                    />
                    <label>Payment</label>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <input
                      name="type"
                      type="radio"
                      className="h-4 w-4 appearance-none rounded-full border-2 border-[#2ba283]"
                      value={1}
                      checked={transact.typeDebit === 1}
                      onChange={() => {
                        const res = {
                          ...transact,
                          typeCashin: 0,
                          typeCashout: 0,
                          typeDebit: 0,
                          typeDebit: 1,
                          typePayment: 0,
                          typeTransfer: 0,
                        };
                        setTransact(res);
                        // console.log(res);
                      }}
                    />
                    <label>Debit</label>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <input
                      name="type"
                      type="radio"
                      className="h-4 w-4 appearance-none rounded-full border-2 border-[#2ba283]"
                      value={1}
                      checked={transact.typeTransfer === 1}
                      onChange={() => {
                        const res = {
                          ...transact,
                          typeCashin: 0,
                          typeCashout: 0,
                          typeDebit: 0,
                          typeDebit: 0,
                          typePayment: 0,
                          typeTransfer: 1,
                        };
                        setTransact(res);
                        console.log(res);
                      }}
                    />
                    <label>Transfer</label>
                  </div>
                </div>
              </div>

              <button
                className="mt-6 w-full rounded-md bg-[#2ba283] px-4 py-2 text-white"
                onClick={(e) => {
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

export default Spam;
