import React from 'react'
import Sidebar from '../componen/Sidebar'
import AddUser from '../componen/AddUser'

const AddNewMantee = () => {
  return (
    <div>
        <Sidebar title='Dashboard' name="nama">
            <AddUser/>

        </Sidebar>
    </div>
  )
}

export default AddNewMantee