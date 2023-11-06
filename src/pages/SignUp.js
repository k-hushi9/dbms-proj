import { useState } from "react";


import axios from "axios";

import FormContainer from "../components/FormContainer";
import Property1Default from "../components/Property1Default";
import Property1Primary from "../components/Property1Primary";
import Property1Secondary from "../components/Property1Secondary";
import common from "../css/common.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleSubmit = async () => {
    if(email !== "" && password !== ""){
    
      const response = await axios.post("/signup", {
        email,
        password,
      });
      if (response.status === 201 ) {
     
        console.log("user created")
      } else {
        
        console.log("An error occurred while creating the user.");
      }
    }else{
      alert("Enter valid details")
    }

    
  };

  return (
    <div className="relative bg-white w-full h-screen overflow-hidden text-left text-[1rem] text-text-secondary font-body-large-semibold">
      <FormContainer />
      <div className="absolute top-[14.75rem] left-[55rem] rounded-3xs w-[25rem] flex flex-col items-center justify-center gap-[2rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
          <div className="relative leading-[100%] hidden">Welcome back</div>
          <div className="relative text-[1.75rem] leading-[100%] font-semibold text-text-primary">
            Create an account
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[100%] capitalize">
                Email
              </div>
            </div>
            <input
              className={common.inputs}
              type="email"
              style={{
                border: "3px solid #e0effe",
                padding: "0.75rem 1rem",
                borderRadius: 7,
                width: "90%",
                caretColor: "rgb(0 125 250 / 1)",
              }}
              placeholder="Enter your email"
              onChange={handleEmailChange}
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[100%] capitalize">
                Password
              </div>
              <div className="relative leading-[100%] capitalize text-primary text-right hidden">
                Forgot？
              </div>
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
                onChange={handlePasswordChange}
              />
              <button
                style={{
                  borderRadius: 7,
                  backgroundColor: "transparent",
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
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem] text-text-tertiary">
          <button onClick={handleSubmit}> <Property1Primary
            style={{
              backgroundColor: "transparent",
            }}
            buttonText="Create account"
            property1PrimaryHeight="3rem"
            property1PrimaryPadding="1rem"
            loginNowFontSize="1rem"
            link={"non"}
            onClick={handleSubmit}
          /></button>
          <Property1Secondary
            itemCode="/icongoogle--original1.svg"
            buttonText="Continue with Google"
            property1SecondaryHeight="3rem"
            property1SecondaryPadding="1rem"
            property1SecondaryGap="0.5rem"
            iconGoogleOriginalWidth="1.25rem"
            iconGoogleOriginalHeight="1.25rem"
            loginNowFontSize="1rem"
            link={"non"}
          />
          <div className="flex flex-row items-start justify-start gap-[0.5rem]">
            <div className="relative leading-[100%] capitalize">
              Already have an account ?
            </div>
            <a
              className="relative leading-[100%] capitalize text-primary"
              style={{
                textDecoration: "none",
              }}
              href="/login" 
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
