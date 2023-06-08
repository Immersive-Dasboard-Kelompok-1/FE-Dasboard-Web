import  { useEffect, useState } from 'react';
import Sidebar from '../componen/Sidebar';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { useCookies } from "react-cookie";
import api, { Mentee } from '../axios/resApi';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

const Mantee = () => {
    const [cookie] = useCookies<string>();
    const [loading, setLoading] = useState(false);
    const [mentee, setMentee] = useState<Mentee | any>([])
    const navigate = useNavigate();

    useEffect(() => {

        console.log("ini cookie", cookie)

        const fetchUsers = async () => {
            try {
                const response: AxiosResponse<Mentee[]> = await api.GetMentee(cookie.token);
                const menteeData = response.data;
                // console.log(response.data)
                setMentee(menteeData);
                setLoading(false);

            } catch (error) {
                console.error("ini pesan error", error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, [cookie]);

    console.log(mentee?.data?.mentees.map((item: any) => item.FullName))

    const editHandle =() =>{
        navigate("/add")
    }
    return (
        <div>
            <Sidebar title="Mantee List" name={cookie.fullName}>


                <div className="p-3">

                    <div className="flex justify-end">
                        <div className="flex justify-end mr-5">
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered input-black w-full max-w-xs bg-white"
                            // value={searchInput}
                            // onChange={(e) => setSearchInput(e.target.value)}
                            />
                            <button className="btn btn-outline text-black right-0 mb-5">Search</button>
                        </div>
                        <button onClick={editHandle} className={` btn bg-primary text-white border-none right-0 mb-5`} >Add Mantee</button>
                    </div>
                    <div className="flex justify-end">
                        <div className="flex justify-end mr-5">
                            <button className={`btn bg-primary text-white border-none right-0 mb-5 mr-2`} >Export</button>

                            <select
                                className="select select-bordered text-black bg-white w-20"
                                id="category"
                                name="categori"
                            // value={formik.values.role}
                            // onChange={formik.handleChange}
                            >
                                <option disabled value="">
                                    All Class
                                </option>
                                <option value="admin">FE</option>
                                <option value="user">BE</option>
                            </select>
                            <select
                                className="select select-bordered text-black bg-white w-30 ml-2 mr-2"
                                id="category"
                                name="categori"
                            // value={formik.values.role}
                            // onChange={formik.handleChange}
                            >
                                <option disabled value="">
                                    All Student
                                </option>
                                <option value="admin">Student</option>
                                <option value="user">siswa</option>
                            </select>
                            <select
                                className="select select-bordered text-black bg-white w-30"
                                id="category"
                                name="categori"
                            // value={formik.values.role}
                            // onChange={formik.handleChange}
                            >
                                <option disabled value="">
                                    All Category
                                </option>
                                <option value="admin">FE</option>
                                <option value="user">BE</option>
                            </select>

                        </div>
                        <button className={`btn bg-primary text-white border-none right-0 mb-5`} >Filter</button>
                    </div>

                    {loading ? (
                        <h1 className='text-black'>Loading...</h1>
                    ) : (
                        <div className="overflow-x-auto z-0">

                            <table className="table z-0">

                                <thead className="bg-gray-200 text-black">
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Class</th>
                                        <th>Status</th>
                                        <th>Category</th>
                                        <th>Gender</th>
                                        <th>Detail</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mentee?.data?.mentees.map((item: any, index:number) => (

                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>{item.FullName}</td>
                                            <td>{item.ClassID}</td>
                                            <td className={`${item.Status === "active" ? "badge badge-secondary" : "badge badge-primary"} mt-4`}>{item.Status === "active" ? "Active" : "Non Aktif"}</td>
                                            <td>{item.Category}</td>
                                            <td>{item.Gender}</td>
                                            <td>detail</td>
                                            <td>
                                                <button className="btn btn-ghost text-amber-500" >
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
        </div>
    )
}

export default Mantee