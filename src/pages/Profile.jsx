import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");


  const onGroupContainer1Click = useCallback(() => {
    navigate("/enrolled-courses");
  }, [navigate]);

 const updateProfile = async (e) => {
  e.preventDefault();  
    const response = await axios.post("/profile", {
      fname,
      lname,
      email,
      address,
      phoneNumber,
      state,
      city,
      password
    });

    if (response.status === 201) {
      // User profile updated successfully.

      // Update the component's state so that the user's updated profile information is displayed.
      setFname(response.data.fname);
      setLname(response.data.lname);
      setEmail(response.data.email);
      setAddress(response.data.address);
      setPhoneNumber(response.data.phoneNumber);
      setState(response.data.state);
      setCity(response.data.city);

      // Navigate to the user's profile page.
      
    } else {
      // Profile update failed.
      alert("FAilde")
      // Display an error message to the user.
    }
};

  return (
    <div className="relative bg-default-white w-full h-[69.81rem] overflow-hidden text-left text-[1.63rem] text-gray-200 font-roboto">
      <div className="absolute top-[0rem] left-[0rem] w-[20.5rem] h-[69.81rem] text-[1.75rem]">
        <b className="absolute top-[2.56rem] left-[4.5rem] text-[2rem]">
          settings
        </b>
        <img
          className="absolute top-[2.19rem] left-[0rem] w-[3rem] h-[3rem] overflow-hidden"
          alt=""
          src="/keyboard-arrow-left.svg"
        />
        <div className="absolute top-[10.25rem] left-[2.5rem] w-[13.13rem] h-[2.81rem]">
          <b className="absolute top-[0.38rem] left-[4.56rem]">Edit profile</b>
          <img
            className="absolute top-[0rem] left-[0rem] w-[2.81rem] h-[2.81rem] overflow-hidden"
            alt=""
            src="/edit1.svg"
          />
        </div>
        <div className="absolute top-[-0.03rem] left-[20.47rem] box-border w-[0.06rem] h-[69.88rem] border-r-[1px] border-solid border-gray-100" />
        <div
          className="absolute top-[14.44rem] left-[3rem] w-[10.69rem] h-[2.56rem] cursor-pointer text-gray-100"
          onClick={onGroupContainer1Click}
        >
          <img
            className="absolute top-[0rem] left-[0rem] w-[2.5rem] h-[2.5rem] overflow-hidden"
            alt=""
            src="/settings1.svg"
          />
          <div className="absolute top-[0.5rem] left-[4.44rem] font-medium">
            courses
          </div>
        </div>
      </div>
      <img
        className="absolute top-[2.5rem] left-[99rem] w-[6.5rem] h-[2.5rem]"
        alt=""
        src="/profile1.svg"
      />
      <img
        className="absolute top-[3.75rem] left-[84.5rem] rounded-[500px] w-[7.5rem] h-[7.5rem] object-cover"
        alt=""
        src="/unsplashc8ta0gwpbqg@2x.png"
      />
      <div className="absolute top-[5.19rem] left-[37.25rem] text-[2.81rem] font-semibold text-black inline-block w-[14.5rem] h-[3.31rem]">
        Edit profile
      </div>
      <div className="absolute top-[13.5rem] left-[37.25rem] w-[25.31rem] h-[6.75rem]">
        <input
          className="absolute top-[2.25rem] left-[-0.12rem] rounded-8xs bg-default-white box-border w-[25.56rem] h-[4.63rem] border-[2px] border-solid border-gray-100"
          type="text"
          placeholder="FirstName"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
      </div>

      <div className="absolute top-[13.5rem] left-[66.56rem] w-[25.44rem] h-[6.75rem]">
        <input
          className="absolute top-[2.25rem] left-[-0.12rem] rounded-8xs bg-default-white box-border w-[25.56rem] h-[4.63rem] border-[2px] border-solid border-gray-100"
          type="text"
          placeholder="Last Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <div className="absolute top-[21.38rem] left-[37.25rem] w-[54.56rem] h-[6.75rem]">
        <input
          className="absolute top-[2.25rem] left-[-0.12rem] rounded-8xs bg-default-white box-border w-[55rem] h-[4.63rem] border-[2px] border-solid border-gray-100"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="absolute top-[29.25rem] left-[37.25rem] w-[54.75rem] h-[6.75rem]">
        <input
          className="absolute top-[2.25rem] left-[-0.12rem] rounded-8xs bg-default-white box-border w-[55rem] h-[4.63rem] border-[2px] border-solid border-gray-100"
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="absolute top-[37.13rem] left-[37.25rem] w-[54.75rem] h-[6.75rem]">
        <input
          className="absolute top-[2.25rem] left-[-0.12rem] rounded-8xs bg-default-white box-border w-[55rem] h-[4.63rem] border-[2px] border-solid border-gray-100"
          type="number"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <div className="absolute top-[45rem] left-[37.25rem] w-[25.31rem] h-[6.75rem]">
        <input
          className="absolute top-[2.25rem] left-[-0.12rem] rounded-8xs bg-default-white box-border w-[25.56rem] h-[4.63rem] border-[2px] border-solid border-gray-100"
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div className="absolute top-[45rem] left-[66.38rem] w-[25.63rem] h-[6.75rem]">
        <input
          className="absolute top-[2.25rem] left-[-0.12rem] rounded-8xs bg-default-white box-border w-[25.56rem] h-[4.63rem] border-[2px] border-solid border-gray-100"
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div className="absolute top-[52.88rem] left-[37.25rem] w-[54.75rem] h-[6.75rem]">
        <input
          className="absolute top-[2.25rem] left-[-0.12rem] rounded-8xs bg-default-white box-border w-[55rem] h-[4.63rem] border-[2px] border-solid border-gray-100"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="absolute top-[62.94rem] left-[37.06rem] w-[11.25rem] h-[3.44rem] text-[1.75rem] text-darkorange">
        <div className="absolute top-[-0.06rem] left-[-0.06rem] rounded-8xs bg-default-white box-border w-[11.38rem] h-[3.56rem] border-[2px] border-solid border-darkorange" />
        <div className="absolute top-[0.69rem] left-[2.94rem]">Cancel</div>
      </div>
      <div className="absolute top-[62.94rem] left-[50.81rem] w-[11.25rem] h-[3.44rem] text-[1.75rem] text-default-white">
        <div className="absolute top-[0rem] left-[0rem] rounded-8xs bg-darkorange w-[11.25rem] h-[3.44rem]" />
        <button
          className="absolute top-[0.69rem] left-[3.75rem] font-semibold"
          style={{
            width: "180px",
            height: "55px",
            flexShrink: 0,
            borderRadius: 5,
            backgroundColor: "#FF7008",
          }}
          onClick={updateProfile}
        >
          <a
            href=""
            style={{
              textDecoration: "none",
              color: "#FFF",
              fontFamily: "Roboto",
              fontSize: 28,
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            Save
          </a>
        </button>
      </div>
    </div>
  );
};

export default Profile;
