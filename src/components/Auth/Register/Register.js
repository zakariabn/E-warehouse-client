import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [userInfoError, setUserInfoError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    generalError: "",
  });

  const [passVisible, setPassVisible] = useState(false);
  function passwordVisible(boolean) {
    if (boolean) {
      return (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="absolute top-2.5 right-3 text-purple-600"
            onClick={() => setPassVisible(!passVisible)}></FontAwesomeIcon>
        </>
      );
    } else {
      return (
        <>
          <FontAwesomeIcon
            icon={faEyeSlash}
            className="absolute top-2.5 right-3 text-purple-600"
            onClick={() => setPassVisible(!passVisible)}></FontAwesomeIcon>
        </>
      );
    }
  }

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
    const passwordValidityChecker = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,}$/;

    const passwordInputValue = e.target.value;
    const validPassword = passwordValidityChecker.test(passwordInputValue);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: passwordInputValue });
      setUserInfoError({ ...userInfoError, passwordError: "" });
    } else {
      setUserInfo({ ...userInfo, password: "" });
      setUserInfoError({
        ...userInfoError,
        passwordError: "password must contain number character and 6 length",
      });
    }

    if (!passwordInputValue) {
      setUserInfoError({ ...userInfoError, passwordError: "" });
    }
  }

  function handelConfirmPasswordChanged(e) {
    const confirmPassword = e.target.value;
    const isMatched = userInfo.password === confirmPassword;

    if (isMatched) {
      setUserInfo({ ...userInfo, confirmPassword: confirmPassword });
      setUserInfoError({ ...userInfoError, confirmPasswordError: "" });
    } else {
      setUserInfo({ ...userInfo, confirmPassword: "" });
      setUserInfoError({
        ...userInfoError,
        confirmPasswordError: "Password did't match",
      });
    }
    if (!confirmPassword) {
      setUserInfoError({ ...userInfoError, confirmPasswordError: "" });
    }
  }

  const [createUserWithEmailAndPassword, user, loading, error] =
  useCreateUserWithEmailAndPassword(auth);

  function handelCreateNewUser (e) {
    e.preventDefault();
    const email = userInfo.email;
    const password = userInfo.password;

    if (email || password) {
      createUserWithEmailAndPassword(email, password);
      setUserInfoError({ ...userInfoError, generalError: "" });
    } else {
      setUserInfoError({
        ...userInfoError,
        generalError: "Email and password must require",
      });
    }
  }

  if (error) {
    console.log(error);
  }
  if (user) {
    console.log(user);
  }


  return (
    <div className="flex justify-center my-20">
      <div className="w-[370px] border rounded-md shadow-md flex flex-col items-center py-10">
        <div className="bg-purple-light inline-block p-4 mb-2 rounded-full">
          <UserIcon className="h-7 w-7 text-white" />
        </div>
        <h2 className="text-xl font-main-font">Sign up</h2>

        <form className="mt-5 w-full px-10" onSubmit={handelCreateNewUser}>
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

          {/* Password input */}
          <div className="flex flex-col mb-2 relative">
            <input
              type={`${passVisible ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              onChange={handelPasswordChange}
              className="border border-[#ababac50] px-2 rounded-md shadow-sm h-[35px] focus:outline-none"
            />
            <span>{passwordVisible(passVisible)}</span>
            <small className="ml-3 text-orange">
              {userInfoError.passwordError && userInfoError.passwordError}
            </small>
          </div>

          <div className="flex flex-col mb-2 relative">
            <input
              type={`${passVisible ? "text" : "password"}`}
              name="confirm_password"
              id=""
              placeholder="Confirm Password"
              onChange={handelConfirmPasswordChanged}
              className="border border-[#ababac50] px-2 rounded-md shadow-sm h-[35px] focus:outline-none"
            />
            <span>{passwordVisible(passVisible)}</span>
            <small className="ml-3 text-orange">
              {userInfoError.confirmPasswordError &&
                userInfoError.confirmPasswordError}
            </small>
          </div>

          {/* general error */}
          <span className="text-orange font-medium text-center block">
            {userInfoError.generalError && userInfoError.generalError}
          </span>

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
              <label htmlFor="remember-check" className="font-medium ">
                {" "}
                Agree to our{" "}
                <a href="#" className="text-purple-500">
                  Trams And Condition
                </a>
              </label>
            </div>
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
          <p className="font-medium">Already have an account?</p>
          <span className="font-medium">
            {" "}
            <Link
              to="/login"
              className="bg-purple-light text-white hover:bg-purple-dark duration-150 px-4 py-1 rounded">
              Login
            </Link>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Register;
