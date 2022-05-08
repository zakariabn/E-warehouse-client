import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [userInfoError, setUserInfoError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  console.log(userInfo, userInfoError);

  function handelEmailChange(e) {
    const emailValidityChecker = /(.+)@(.+){2,}\.(.+){2,}/;
    const emailInputValue = e.target.value.toLowerCase();

    const validEmail = emailValidityChecker.test(emailInputValue);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: emailInputValue });
      setUserInfoError({ ...userInfoError, emailError: "" });
    } else {
      setUserInfo({ ...userInfo, email: "" });
      setUserInfoError({ ...userInfoError, emailError: "Invalid email" });
    }
  }

  function handelPasswordChange(e) {
    const passwordValidityChecker =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    const passwordInputValue = e.target.value;
    const validPassword = passwordValidityChecker.test(passwordInputValue);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: passwordInputValue });
      setUserInfoError({ ...userInfoError, passwordError: "" });
    } else {
      setUserInfo({ ...userInfo, password: "" });
      setUserInfoError({ ...userInfoError, passwordError: "Invalid password" });
    }
  }

  function handelConfirmPasswordChanged () {
    
  }

  return (
    <div className="flex justify-center my-20">
      <div className="w-[370px] border rounded-md shadow-md flex flex-col items-center py-10">
        <div className="bg-purple-light inline-block p-4 mb-2 rounded-full">
          <UserIcon className="h-7 w-7 text-white" />
        </div>
        <h2 className="text-xl font-main-font">Sign up</h2>

        <form className="mt-5 w-full px-10">
          <div className="flex flex-col mb-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border border-[#ababac50] px-2 rounded-md shadow-sm h-[35px] focus:outline-none"
            />
            <small className="ml-3 text-orange">error</small>
          </div>

          {/* email input */}
          <div className="flex flex-col mb-2">
            <input
              type="email"
              name=""
              placeholder="Email"
              onChange={handelEmailChange}
              className="border border-[#ababac50] px-2 rounded-md shadow-sm h-[35px] focus:outline-none"
            />
            <small className="ml-3 text-orange">
              {userInfoError.emailError && userInfoError.emailError}
            </small>
          </div>

          <div className="flex flex-col mb-2">
            <input
              type="password"
              name=""
              placeholder="Password"
              onChange={handelPasswordChange}
              className="border border-[#ababac50] px-2 rounded-md shadow-sm h-[35px] focus:outline-none"
            />
            <small className="ml-3 text-orange">
              {userInfoError.passwordError && userInfoError.passwordError}
            </small>
          </div>

          <div className="flex flex-col mb-2">
            <input
              type="confirm_password"
              name=""
              id=""
              placeholder="Confirm Password"
              onChange={handelConfirmPasswordChanged}
              className="border border-[#ababac50] px-2 rounded-md shadow-sm h-[35px] focus:outline-none"
            />
            <small className="ml-3 text-orange">error</small>
          </div>

          {/* submit btn */}
          <input
            type="submit"
            value="Login"
            className="bg-purple-light w-full text-white font-medium py-2 mt-4 rounded-sm hover:cursor-pointer hover:bg-purple-dark duration-150"
          />

          {/* forgot password link */}
          <div className="w-full flex justify-between mt-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="remember-check" />
              <label
                htmlFor="remember-check"
                className="font-medium text-purple-light">
                {" "}
                Remember me
              </label>
            </div>

            <button className="text-purple-light font-medium">
              Forget password
            </button>
          </div>
        </form>

        {/* divider between email login and social login */}
        <div className="w-full flex gap-5 px-10 items-center my-5">
          <div className=" w-full h-[2px] bg-gray-400"></div>
          or
          <div className="w-full h-[2px] bg-gray-400"></div>
        </div>

        {/* social login btn */}
        <span className="bg-[#DB4437] px-3 py-2 rounded-full  hover:cursor-pointer mb-8">
          <FontAwesomeIcon
            icon={faGoogle}
            className="text-white"></FontAwesomeIcon>
        </span>

        {/* new user redirect to register page button */}
        <span className="flex gap-2 flex-col items-center px-2">
          <p className="font-medium">Don't have account?</p>
          <span className="font-medium">
            {" "}
            <Link
              to="/sign-up"
              className="bg-purple-light text-white hover:bg-purple-dark duration-150 px-4 py-1 rounded">
              Register
            </Link>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Register;
