import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [userInfoError, setUserInfoError] = useState({
    emailError: "",
    passwordError: "",
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

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // handling login
  function handelLogin(e) {
    e.preventDefault();
    const email = userInfo.email;
    const password = userInfo.password;

    if (email || password) {
      signInWithEmailAndPassword(email, password);
      setUserInfoError({ ...userInfoError, generalError: "" });
    } else {
      setUserInfoError({
        ...userInfoError,
        generalError: "Email and password must require",
      });
    }
  }

  // handling email and password based login error
  useEffect(() => {
    if (error) {
      console.log(error);
      switch (error?.code) {
        case "auth/user-not-found":
          toast.error("User not found please register");
          break;
        case "auth/wrong-password":
          toast.error("Wrong Password try again.");
          break;
        case "auth/too-many-requests":
          toast.error("Account is temporary banned for to many wrong attempt");
          break;
        default:
          break;
      }
    }
  }, [error]);

  // handling google sign in in
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  function handelSignInWithGoogle() {
    signInWithGoogle();
  }

  // redirecting user
  let from = location.state?.from?.pathname || "/";
  if (user || googleUser) {
    navigate(from, { replace: true });
  }

  // password reset functionality
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  function handelResetPassword() {
    const email = userInfo.email;

    if (email) {
      sendPasswordResetEmail(email);
    } else {
      toast.error("Email not found. Please input email.");
    }
  }
  if (sending) {
    toast.success("Password reset link send.", { toastId: "resetPasswordMsg" });
  }

  return (
    <div className="flex justify-center my-20">
      <div className="w-[370px] border rounded-md shadow-md flex flex-col items-center py-10">
        <div className="bg-purple-light inline-block p-4 mb-2 rounded-full">
          <UserIcon className="h-7 w-7 text-white" />
        </div>
        <h2 className="text-xl font-main-font">Login</h2>

        <form className="mt-5 w-full px-10" onSubmit={handelLogin}>
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

            <button
              className="text-purple-light font-medium"
              onClick={handelResetPassword}>
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
        <button
          className="bg-[#DB4437] px-3 py-2 rounded-full  hover:cursor-pointer mb-8"
          onClick={handelSignInWithGoogle}>
          <FontAwesomeIcon
            icon={faGoogle}
            className="text-white"></FontAwesomeIcon>
        </button>

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

export default Login;
