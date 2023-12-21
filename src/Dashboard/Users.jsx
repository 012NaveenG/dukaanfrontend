import React, { useContext } from 'react'
import Aside from './dashboardComponents/aside'
import UsersCard from './dashboardComponents/UsersCard'
import UserContext from '../Context/context'



const Users = () => {
  const { allusers } = useContext(UserContext)
  // console.log(allusers);

  return (
    <div className='flex gap-[2px]  mobile-device'>
      <Aside />
      <div className='w-[80%] user-card h-screen overflow-y-auto grid grid-cols-2 overflow-y-auto gap-2 bg-green-600 my-[2px] rounded p-[30px]'>
        
        {allusers && allusers.map((users, index) => {
          return (
           
            <UsersCard id={index} userdata={users}/>

          )
        })}
      </div>
    </div>
  )
}

export default Users