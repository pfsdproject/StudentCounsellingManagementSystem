import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast"; // Import toast directly (no need for { Toaster })
import { baseApiURL } from "../baseUrl";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(`${baseApiURL}/signup`, data);
      console.log("Signup Successful:", response.data);
      toast.success("Signup Successful!");
    } catch (error) {
      console.error("Signup Failed:", error.message);
      toast.error("Signup Failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="w-1/3 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
            <input
              type="text"
              id="username"
              {...register("username", { required: true })}
              className="w-full px-4 py-2 border rounded-lg outline-none focus:border-blue-500"
            />
            {errors.username && <span className="text-red-500">Username is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 border rounded-lg outline-none focus:border-blue-500"
            />
            {errors.email && <span className="text-red-500">Email is required</span>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
