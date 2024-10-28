"use client";
import axios from "axios";
import { useState } from "react";
import "./spam.css";

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
      <div>{message}</div>
      <div class="text-center">
        <a href="#myModal" class="trigger-btn" data-toggle="modal">
          Click to Open Confirm Modal
        </a>
      </div>
      <div id="myModal" class="modal fade">
        <div class="modal-dialog modal-confirm">
          <div class="modal-content">
            <div class="modal-header">
              <div class="icon-box">
                <i class="material-icons">&#xE876;</i>
              </div>
              <h4 class="modal-title">Awesome!</h4>
            </div>
            <div class="modal-body">
              <p class="text-center">
                Your booking has been confirmed. Check your email for detials.
              </p>
            </div>
            <div class="modal-footer">
              <button class="btn btn-success btn-block" data-dismiss="modal">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spam;
