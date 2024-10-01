import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import PasswordStrengthIndicator from "../PasswordStrengthIndicator"; 

const Login = () => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [validity, setValidity] = useState({
    minChar: null,
    upperCase: null,
    specialCharAndNumber: null,
  });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);

    const isMinChar = pwd.length >= 8;
    const hasUpperCase = /[A-Z]/.test(pwd);
    const hasNumberAndSpecialChar = /[\d]/.test(pwd) && /[^A-Za-z\d]/.test(pwd);

    setValidity({
      minChar: isMinChar,
      upperCase: hasUpperCase,
      specialCharAndNumber: hasNumberAndSpecialChar,
    });
  };

  return (
    <section class="p-6 sm:px-20 sm:py-8 space-y-6">
      <div class="flex min-h-full bg-[#F9FAFB] border rounded-md flex-col items-center px-6 py-10 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#111827]">
            Sign in to your account
          </h2>
        </div>
        <div class=" py-20 mt-10 bg-white rounded-lg shadow-md sm:w-full sm:max-w-lg">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-[#3D424E]"
                >
                  Email address
                </label>
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="block w-full px-2 rounded-md border-0 py-1.5 text-[#3D424E] bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-[#3D424E]"
                >
                  Password
                </label>
                <div className="relative my-2">
                  <input
                    type={isPasswordVisible ? "text" : "password"} // Toggle between text and password
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="block w-full bg-white rounded-md border-0 px-2 py-1.5 text-[#3D424E] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute top-2 right-3 flex items-center"
                  >
                    {isPasswordVisible ? (
                      <BiHide size={24} className="text-gray-500" /> 
                    ) : (
                      <BiShow size={24} className="text-gray-500" />
                    )}
                  </button>
                </div>
                <PasswordStrengthIndicator validity={validity} />
              </div>
              <div class="text-sm flex items-center justify-between">
                <div class="flex cursor-pointer space-x-2 items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    class="cursor-pointer text-[#4D525D] font-normal"
                    for="remember"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="/"
                  class="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>

              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div class="flex mt-8 space-x-2 items-center">
              <span class="w-full h-[1px] bg-[#E5E7EB]"></span>
              <p class="text-sm font-medium whitespace-nowrap">
                Or continue with
              </p>
              <span class="w-full h-[1px] bg-[#E5E7EB] "></span>
            </div>

            <div class="flex mt-6 space-x-4">
              <button class="border w-full rounded-md flex items-center justify-center space-x-2 py-1.5 text-sm font-medium">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="of si h-5 w-5"
                >
                  <path
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                    fill="#EA4335"
                  ></path>
                  <path
                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                    fill="#34A853"
                  ></path>
                </svg>{" "}
                <span>Google</span>
              </button>
              <button class="border w-full rounded-md flex items-center justify-center space-x-2 py-1.5 text-sm font-medium">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  class="of si aop h-5 w-5"
                >
                  <path
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <span>GitHub</span>
              </button>
            </div>
          </div>
        </div>
        <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a
            href="/"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
