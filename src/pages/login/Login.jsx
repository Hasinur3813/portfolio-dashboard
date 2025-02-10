import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-hero relative">
      <div className="w-full min-h-screen bg-black/70 flex justify-center items-center">
        {/* login form */}
        <div className="bg-slate-800/90 px-6 py-16 w-sm rounded-md shadow-lg">
          <h1 className="text-center font-bold text-3xl mb-4 text-blue-500">
            Admin Login{" "}
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col ">
            <label htmlFor="email" className="text-white font-bold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email"
              className="p-2 focus:border-gray-400 focus:border focus:outline-none text-white bg-gray-700 rounded-md"
            />
            <label
              htmlFor="password"
              className="text-gray-white font-bold text-white mt-4"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="p-2 focus:border-gray-400 focus:border focus:outline-none text-white w-full bg-gray-700 rounded-md"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 px-3 py-2 text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button
              type="submit"
              className="bg-blue-500 mt-8 text-lg font-semibold text-white p-2 rounded-md"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
