import React, { useEffect, useState } from 'react';
import Sidebar from '../componen/Sidebar';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import api, { User } from '../axios/resApi';
import Swal from 'sweetalert2';
import { AxiosResponse } from 'axios';
import { useCookies } from "react-cookie";
import { number } from 'yup';


const UserList: React.FC = () => {
  const [users, setUser] = useState<User | any>([])
  const [loading, setLoading] = useState(true);
  const [cookie] = useCookies<string>();
  const [cookies, setCookies] = useState<string | undefined>(undefined);


  useEffect(() => {
    setCookies(cookie.token);
    console.log("ini cookie", cookies)

    const fetchUsers = async () => {
      try {
        const response: AxiosResponse<User[]> = await api.GetUser(cookie.token);
        const userData = response.data;
        // console.log(response.data)
        setUser(userData);
        setLoading(false);

      } catch (error) {
        console.error("ini pesan error", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {

  })

  console.log("Users state:", users);
  // console.log(users?.data?.map((user: any) =>(user?.fullName)))
  // const userName = [users.data]
  // const itemUser = userName?.map((user: any) => (user.users))
  console.log(users?.data?.users.map((item: any) => (item.fullname)))



  return (
    <>
      <Sidebar title="User List" name={cookie.fullName}>
        <div className="p-3">

          <div className="flex justify-end">
            <div className="flex justify-end mr-5">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-black w-full max-w-xs bg-white"
              />
              <button className="btn btn-outline text-black right-0 mb-5">Search</button>
            </div>
            <button className={`${cookie.Role === "admin" ? "" : "hidden"}btn bg-primary text-white border-none right-0 mb-5`}>Add User</button>
          </div>

          {loading ? (
            <h1 className='text-black'>Loading...</h1>
          ) : (
            <div className="overflow-x-auto">

              <table className="table">

                <thead className="bg-gray-200 text-black">
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Team</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {users?.data?.users.map((item: any, index: number) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.fullname}</td>
                      <td>{item.email}</td>
                      <td>{item.team}</td>
                      <td>{item.role}</td>
                      <td className={`${item.status === "active" ? "badge badge-secondary": "badge badge-primary"} mt-4`}>{item.status}</td>
                      <td>
                        <button className="btn btn-ghost text-amber-500">
                          <FaPencilAlt />
                        </button>
                        <button className="btn btn-ghost text-red">
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          )}
        </div>
      </Sidebar>
    </>
  );
};

export default UserList;
