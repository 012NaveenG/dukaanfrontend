import React from 'react'

const DashboardCard = ({ userdata }) => {
  const { FirstName, Contact, Email, LastName,Avatar } = userdata
  return (
    <div>
      <div className=" w-108 py-4 px-1  bg-slate-200 rounded-xl h-40 border flex gap-2 ">
        <figure><img src={`${Avatar}`} alt="Profile" className='w-24 border border-slate-900 h-32 rounded-lg ' /></figure>
        <div>
          <h2 >Name: <span className="font-semibold">{`${FirstName} ${LastName}`}</span> </h2>
          <p className='text-sm'>Contact:+91 {Contact}</p>
          <p className='text-sm'>Email: {Email}</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardCard