import React from 'react'
import Sidebar from '../componen/Sidebar'
import DashboardBox from '../componen/DashboardBox'
const Dashboard = () => {
    return (
        <div>
            <Sidebar title='Dashboard' name='JohnDoe' >
                <DashboardBox />
                <p className='text-2xl font-medium'>Chart Mantee</p>
                <div className='bg-primary h-80 w-full'>

                </div>
            </Sidebar>
        </div>
    )
}

export default Dashboard