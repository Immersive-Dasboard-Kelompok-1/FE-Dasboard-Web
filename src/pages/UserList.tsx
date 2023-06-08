import React, { useEffect, useState } from 'react';
import Sidebar from '../componen/Sidebar';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import api, { User } from '../axios/resApi';
import Swal from 'sweetalert2';
import { AxiosResponse } from 'axios';
import { useCookies } from "react-cookie";


const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [cookie] = useCookies<string>();
  const [cookies, setCookies] = useState<string | undefined>(undefined);


  useEffect(() => {
    setCookies(cookie.token);
    console.log("ini cookie", cookies)

    const fetchUsers = async () => {
      try {
        const response: AxiosResponse<User[]> = await api.GetUser(cookies || "");
        const userData = response.data;
        console.log(response.data)
        setUsers(userData);
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

  return (
    <>
      <Sidebar title="User List" name={cookie.fullName}>
        <div className="p-3">
        {users?.map((user) => (
            <h1 key={user.data.users.id}>{user.data.users.fullName}</h1>
          ))}
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
