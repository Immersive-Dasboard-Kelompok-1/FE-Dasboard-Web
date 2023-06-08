
import { BiGroup, BiMapAlt, BiMedal } from "react-icons/bi";

const DashboardBox = () => {
    return (
        <div>
            <div className='h-100 w-full flex items-center flex-grow'>
                <div className='h-40 w-96 bg-blue1 m-5 rounded-md p-4 shadow-md'>
                    <div className='flex flex-grow'>
                        <div className='items-center'>
                            <p className='text-2xl mb-3 font-medium'>Mantee</p>
                            <p className='text-5xl font-medium text-primary'>5</p>
                            <p className='mt-3 text-gray-400'>+5 yesterday</p>
                        </div>
                        <div className='flex flex-grow justify-end'>
                            <div className='w-14 h-14 bg-primary rounded-md flex justify-center items-center mr-4'>
                                <p><BiGroup className='text-white h-8 w-8' /></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='h-40 w-96 bg-blue2 m-5 rounded-md p-4 shadow-md'>
                    <div className='flex flex-grow'>
                        <div className='items-center'>
                            <p className='text-2xl mb-3 font-medium'>Mantee Placement</p>
                            <p className='text-5xl font-medium text-blue4'>5</p>
                            <p className='mt-3 text-gray-400'>+5 yesterday</p>
                        </div>
                        <div className='flex flex-grow justify-end'>
                            <div className='w-14 h-14 bg-blue4 rounded-md flex justify-center items-center mr-4'>
                                <p><BiMapAlt className='text-white h-8 w-8' /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-40 w-96 bg-blue3 m-5 rounded-md p-4 shadow-md'>
                    <div className='flex flex-grow'>
                        <div className='items-center'>
                            <p className='text-2xl mb-3 font-medium'>Mantee Feedback</p>
                            <p className='text-5xl font-medium text-red'>5</p>
                            <p className='mt-3 text-gray-400'>+5 yesterday</p>
                        </div>
                        <div className='flex flex-grow justify-end'>
                            <div className='w-14 h-14 bg-red rounded-md flex justify-center items-center mr-4'>
                                <p><BiMedal className='text-white h-8 w-8' /></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DashboardBox