import React from "react";
import { FC } from "react";

interface SidebarProps {
  children?: React.ReactNode;
  title: string;
  name: string;
}

const Sidebar: FC<SidebarProps> = ({ children, title, name }) =>{
  return (
    <section className="min-h-screen w-screen flex flex-row">
      <div className="flex flex-col w-1/6 bg-white shadow-xl  z-10 overflow-hidden">
        <div className="flex items-center justify-center h-20">
          <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
        </div>
        <ul className="flex flex-col py-4">
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-home"></i>
              </span>
              <span className="text-sm font-medium">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-music"></i>
              </span>
              <span className="text-sm font-medium">Mentee</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-user"></i>
              </span>
              <span className="text-sm font-medium">User</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-drink"></i>
              </span>
              <span className="text-sm font-medium">Class</span>
            </a>
          </li>
        </ul>

      </div>

      <div className=" h-screen w-5/6">
        <div className="flex items-center space-x-4 pl-4 h-16 bg-white shadow-md">
          <div>
            <p className="text-black text-2xl">{title}</p>
          </div>
          <div className="flex flex-grow justify-end items-center ">
            <p className="mr-4">Hello, <span className="font-medium">{name}</span></p>
            <div className="avatar mr-4">
              <div className="w-10 h-10 rounded-full">
                <img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" alt="Avatar" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 m-5">
        { children }
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
