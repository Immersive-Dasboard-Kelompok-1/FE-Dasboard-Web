
import Sidebar from '../componen/Sidebar'
import DashboardBox from '../componen/DashboardBox'
import { useCookies } from "react-cookie";

const Dashboard = () => {
    const [cookie] = useCookies<string>();
    return (
        <div>
            <Sidebar title='Dashboard' name={cookie.fullName} >
                <DashboardBox />
                <h1></h1>
                <p className='text-2xl font-medium'>Chart Mantee</p>
                <div className='bg-primary h-80 w-full'>
                </div>
            </Sidebar>
        </div>
    )
}

export default Dashboard