import React from 'react'

const AddUser = () => {
    return (
        <>
            <div className='flex justify-start items-center w-screen h-fit  overflow-x-hidden'>
                <div className=' h-fit mt-5 mb-5'>
                    <div className='mb-5'>
                        <p className='text-4xl'>Add New Mantee</p>
                    </div>
                    <div className='flex flex-grow justify-center'>
                        <form className="w-96 bg-white shadow-lg rounded px-8  pb-8 mr-4">
                            <p className='text-3xl mb-5 mt-10'>Data Mantee</p>

                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                                    Name
                                </label>
                                <input

                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                                    Address
                                </label>
                                <input

                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                                    Home Address
                                </label>
                                <input

                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                                    email
                                </label>
                                <input

                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="username"
                                    type="email"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="form-control w-full">
                                <div className='flex w-fit flex-grow p-2'>
                                    <label className="text-black text-sm font-bold mr-10" htmlFor="username">
                                        Gender
                                    </label>
                                    <p className='mr-2'>male</p>
                                    <input type="radio" name="radio-1" className="radio mr-5" checked />
                                    <p className='mr-2'>Female</p>
                                    <input type="radio" name="radio-1" className="radio" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                                    Telegram
                                </label>
                                <input

                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                                    Phone
                                </label>
                                <input

                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>


                        </form>

                        <form className="w-96 bg-white shadow-lg rounded px-8 pb-8 mr-4">

                            <p className='text-3xl mb-5 mt-10'>Data Emergency</p>
                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                                    Name
                                </label>
                                <input

                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                                    Phone
                                </label>
                                <input

                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                                    Status
                                </label>
                                <select className="select select-bordered bg-gray-200 w-full max-w-xs">
                                    <option disabled selected>Who shot first?</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>
                            <p className='text-3xl mb-5 mt-10'>Data Education</p>
                            <div className="mb-4">

                                <div className='flex w-fit flex-grow p-2'>
                                    <label className="text-black text-sm font-bold mr-10" htmlFor="username">
                                        Type
                                    </label>
                                    <p className='mr-2'>IT</p>
                                    <input type="radio" name="radio-1" className="radio mr-5" checked />
                                    <p className='mr-2'>Non - IT</p>
                                    <input type="radio" name="radio-1" className="radio" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                                    Major
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                                    Graduate
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>

                        </form>

                    </div>
                    <div className='flex justify-end mb-5 mt-5 mr-20'>
                        <button
                            //   onClick={LoginHandle}
                            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Log In
                        </button>
                    </div>

                </div>



            </div>
        </>
    )
}

export default AddUser