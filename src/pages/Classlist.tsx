import React, { useEffect, useState } from "react";
import Sidebar from "../componen/Sidebar";
import api, { Class } from "../axios/resApi";
import { AxiosResponse } from "axios";
import { useCookies } from "react-cookie";

const Classlist: React.FC = () => {
  const [classs, setClass] = useState<Class | any>([]);
  const [loading, setLoading] = useState(true);
  const [cookie] = useCookies<string>();
  const [cookies, setCookies] = useState<string | undefined>(undefined);

  useEffect(() => {
    setCookies(cookie.token);
    console.log("cookie", cookies);

    const fetchUsers = async () => {
      try {
        const response: AxiosResponse<Class[]> = await api.GetClass(
          cookie.token
        );
        const userData = response.data;
        // console.log("data", response.data);
        setClass(userData);
        setLoading(false);
      } catch (error) {
        console.error("error message", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {});

  console.log("Class state:", classs);
  console.log(classs?.data?.classes.map((item: any) => item.name));

  return (
    <>
      <Sidebar title="Class List" name={cookie.name}>
        <div className="mr-10 mt-5 flex justify-end">
          <input
            type="text"
            placeholder="General Search"
            className="input input-bordered rounded-r-none input-black w-full max-w-xs bg-white"
          />
          <button className="btn btn-outline rounded-l-none text-black right-0 mb-5 mr-5">
            Search
          </button>
          <button className="btn bg-sky-500 text-white border-none right-0 mb-5 hover:bg-blue-600">
            Add Class
          </button>
        </div>
        {loading ? (
          <h1 className="text-black">Loading...</h1>
        ) : (
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead className="bg-gray-200 text-black">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {classs?.data?.classes.map((item: any, index: number) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.initialClass}</td>
                    <td>{item.userId}</td>
                    <td>
                      <button className="btn btn-ghost btn-lg">
                        <i className="bx bx-edit-alt text-yellow-500"></i>
                      </button>
                      <button className="btn btn-ghost btn-lg">
                        <i className="bx bx-trash text-red"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Sidebar>
    </>
  );
};

export default Classlist;
