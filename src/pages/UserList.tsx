import React, { useEffect, useState } from 'react';
import Sidebar from '../componen/Sidebar';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import api, { User, AddUser } from '../axios/resApi';
import Swal from 'sweetalert2';
import { AxiosResponse } from 'axios';
import { useCookies } from "react-cookie";
import { number } from 'yup';
import { useFormik } from "formik";
import * as Yup from "yup";


const schema = Yup.object({
  fullname: Yup.string().required("nama"),
  email: Yup.string().required("email"),
  password: Yup.string().required("password"),
  team: Yup.string().required("team"),
  role: Yup.string().required("role"),
  status: Yup.string().required("status"),
});


const UserList: React.FC = () => {
  const [users, setUser] = useState<User | any>([])
  const [loading, setLoading] = useState(true);
  const [cookie] = useCookies<string>();
  const [cookies, setCookies] = useState<string | undefined>(undefined);
  const [showPopup, setShowPopup] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      team: "",
      role: "",
      status: "",

    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values)
    }
  })

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
  }, [cookie]);

  const handleSubmit = async () => {
    const addUser = {
      fullname: formik.values.fullname,
      email: formik.values.email,
      password: formik.values.password,
      team: formik.values.team,
      role: formik.values.role,
      status: formik.values.status,
    }

    try {
      const respon = await api.AddUser(
        cookie.token,
        addUser.fullname,
        addUser.email,
        addUser.password,
        addUser.role,
        addUser.team,
        addUser.status
      );

      console.log(respon.data)
      console.log(addUser.fullname,
        addUser.email,
        addUser.password,
        addUser.role,
        addUser.team,
        addUser.status)
        
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Success',
        showConfirmButton: false,
        timer: 1500
      })

    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "gagal menambahkan data!",
      });
    }

    setShowPopup(!showPopup);
    
  };



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
            <button className={`${cookie.role === "admin" ? "" : "hidden"} btn bg-primary text-white border-none right-0 mb-5`} onClick={() => setShowPopup(!showPopup)} >Add User</button>
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
                      <td className={`${item.status === "active" ? "badge badge-secondary" : "badge badge-primary"} mt-4`}>{item.status}</td>
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
      {showPopup && (
        <div className="w-screen h-fit bg-gray-800 bg-opacity-50 absolute top-0 z-20 overflow-x-hidden ">
          <div className='flex justify-center items-center h-full mt-10'>

            <div className="w-1/2 px-8 pt-6 pb-8">
              <div className="flex justify-center mb-5">
                <form className="w-full bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                  <div className="flex justify-center mb-5">
                    <p className="text-black text-4xl">Add User</p>
                  </div>
                  <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2" htmlFor="fullname">
                      Name
                    </label>
                    <input
                      value={formik.values.fullname}
                      onChange={formik.handleChange}
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline`}
                      id="fullname"
                      name="fullname"
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline`}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline`}
                      id="password"
                      type="password"
                      placeholder="Password"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2" htmlFor="team">
                      Team
                    </label>
                    <input
                      name="team" // Add the name attribute
                      value={formik.values.team}
                      onChange={formik.handleChange}
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline`}
                      id="team"
                      type="text"
                      placeholder="Team"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2" htmlFor="role">
                      Role
                    </label>
                    <select
                      className="select select-bordered text-black bg-gray-200 w-full"
                      id="role"
                      name="role"
                      value={formik.values.role}
                      onChange={formik.handleChange}
                    >
                      <option disabled value="">
                        Role ?
                      </option>
                      <option value="admin">admin</option>
                      <option value="user">user</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2" htmlFor="status">
                      Status
                    </label>
                    <select
                      className="select select-bordered text-black bg-gray-200 w-full"
                      id="status"
                      name="status"
                      value={formik.values.status}
                      onChange={formik.handleChange}
                    >
                      <option disabled value="">
                        Status ?
                      </option>
                      <option>Active</option>
                      <option>Non Aktive</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-center">
                    <button
                      onClick={handleSubmit}
                      className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Add
                    </button>
                  </div>
                </form>

              </div>
              {/* Tambahkan konten form lainnya di sini */}
            </div>
          </div>
        </div>

      )}

    </>
  );
};

export default UserList;
