import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axios/resApi';
import image from "../assets/Image 2196.png";
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useFormik } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  username: Yup.string().required("Username required"),
  password: Yup.string().required("Password required"),
});

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const LoginHandle = async () => {
    const user = {
      username: formik.values.username,
      password: formik.values.password,
    };

    if (user.username !== "" && user.password !== "") {
      try {
        const response = await api.Login(user.username, user.password);
        console.log(response);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login Success',
          showConfirmButton: false,
          timer: 1500
        })
        navigate("/dashboard")
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Pastikan Username & Password Benar !",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Check your username or password again!",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col sm:flex-row w-screen">
      <div className="hidden sm:flex sm:w-1/2 h-screen bg-primary justify-center items-center">
        <img className="h-1/2 object-cover" src={image} alt="Background" />
      </div>
      <div className="flex sm:w-1/2 h-screen bg-white justify-center items-center">
        <form className="w-96 bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex justify-center mb-5">
            <p className="text-black text-4xl">Login</p>
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              value={formik.values.username}
              onChange={formik.handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline ${
                formik.values.username === "" ? "bg-red-500" : ""
              }`}
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6 relative">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              value={formik.values.password}
              onChange={formik.handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline ${
                formik.values.password === "" ? "bg-red-500" : ""
              }`}
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="********"
            />
            <a
              type="button"
              className="absolute right-2 mt-3 text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </a>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={LoginHandle}
              className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
