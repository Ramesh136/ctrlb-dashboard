import React, { useState } from "react";

const users = [
  {
    name: "ramesh",
    password: "ram136",
  },
  {
    name: "basil",
    password: "minmax123",
  },
  {
    name: "guna",
    password: "kitchen50",
  },
];
const authenticate =(username ,password ,set ,setlog)=>{
 
 let user = users.filter((value)=>value.name===username)
 if(user.length===0){
  set(false)
  return
 }
 if(user[0].password===password){
  set(true)
  setlog(true)
 }
 else{
  set(false)
 }
}

const Login = ({setIsLoggedIn}) => {

  const [userName ,setUserName] = useState('')
  const [password ,setPassword] = useState('')
  const [isvalid ,setIsValid]  = useState(true)
  return (
    <div>
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
              CtrlB
            </h1>
            {!isvalid ?<h3 className="text-red-500">Wrong credentials/check username/password</h3> : null}
            {/* <form class="space-y-4 md:space-y-6"> */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="name@company.com"
                required=""
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                required=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-primary-600 text-sm font-medium text-white hover:underline">
                Forgot password?
              </h2>
            </div>
            <button
              className="dark:bg-primary-600 w-full rounded-lg bg-slate-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-500 "
              onClick={() => {
                authenticate(userName, password ,setIsValid ,setIsLoggedIn);
              }}
            >
              Log in
            </button>

            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
