import React, { useState } from "react";


import axios from "axios";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{

      if (email !== "" && password !== "") {
        const response = await axios.post("/login", {
          email,
          password,
        }); 
        if(response.status === 200 ){
          window.location.href = "/profile";
          
        }
      } else {
        alert("Need to enter a email and password");
      }
    }catch(err){
      alert("an error occured")
    }
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black text-white font-body-large-semibold">
      <div className="absolute top-[3.56rem] left-[4.44rem] flex flex-row items-start justify-start gap-[0.44rem]">
        <i className="relative tracking-[0.1em] leading-[100%] font-bold text-9xl">
          Study Compass
        </i>
        your go-to site!
        <i className="relative tracking-[0.1em] leading-[100%] font-bold text-primary">
          .
        </i>
      </div>
      <form
        className="rounded-lg bg-white w-96 md:w-120 flex flex-col py-8 px-4 items-center gap-4 text-sm text-text-secondary"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-semibold text-text-primary">
          Login to your account
        </h1>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-row items-start justify-start">
            <div className="flex-1">Email</div>
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={{
              border: "3px solid #e0effe",
              padding: "0.75rem 1rem",
              borderRadius: 7,
              width: "78%",
            }}
            placeholder="Enter your email"
            color="#5a5a5d"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-row items-start justify-start">
            <div className="flex-1">Password</div>
            <div className="text-primary">Forgot?</div>
          </div>
          <div className="flex flex-row w-full">
            <input
              type={showPassword ? "text" : "password"}
              style={{
                border: "3px solid #e0effe",
                padding: "0.75rem 1rem",
                borderRadius: 7,
                width: "80%",
              }}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              style={{
                borderRadius: 7,
                backgroundColor: "transparent",
                padding: "0.75rem",
              }}
              onClick={togglePasswordVisibility}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 5.25C4.5 5.25 1.5 12 1.5 12C1.5 12 4.5 18.75 12 18.75C19.5 18.75 22.5 12 22.5 12C22.5 12 19.5 5.25 12 5.25Z"
                  stroke="#BEBEBF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
                  stroke="#BEBEBF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <button
          className="rounded-lg bg-primary h-10 flex items-center justify-center text-white"
          type="submit"
        >
          Login
        </button>
        <div className="flex flex-row items-start justify-start text-text-tertiary">
          <div>Don't have an account?</div>
          <a
            className="text-primary"
            href="/signup"
            style={{ textDecoration: "none" }}
          >
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
