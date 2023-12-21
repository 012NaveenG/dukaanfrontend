
import React, { useContext, useState } from 'react'

import Aside from './dashboardComponents/aside'
import UserContext from '../Context/context'




const Dashboard = () => {
    const { products, allusers } = useContext(UserContext)
    var totalNoOfUsers
    var totalNoOfProducts
    if (products && products.length) totalNoOfProducts = products.length
    if (allusers && allusers.length) totalNoOfUsers = allusers.length
    return (
        <div className='flex gap-[2px] mobile-device' >
            <Aside />
            <div className='w-[80%] dashboard bg-green-600 my-[2px] items-center pl-[50px] rounded p-2 grid grid-cols-2 gap-[40px]'>
                <div className='w-96 rounded-lg  h-52 bg-yellow-200 flex justify-center items-center'>
                    <div>
                        <p className={`text-teal-600 text-4xl`}>Stocks</p>
                        <p className='text-center  text-8xl lining-nums oldstyle-nums '>{totalNoOfProducts}</p>
                    </div>
                </div>
                <div className='w-96 rounded-lg  h-52 bg-lime-500 flex justify-center items-center'>
                    <div>
                        <p className={`text-fuchsia-600 text-4xl`}>Total Users</p>
                        <p className='text-center  text-8xl lining-nums oldstyle-nums '>{totalNoOfUsers}</p>
                    </div>
                </div>
                <div className='w-96 rounded-lg  h-52 bg-cyan-400 flex justify-center items-center'>
                    <div>
                        <p className={`text-red-600 text-4xl`}>New Users</p>
                        <p className='text-center  text-8xl lining-nums oldstyle-nums '>12</p>
                    </div>
                </div>
                <div className='w-96 rounded-lg  h-52 bg-slate-200 flex justify-center items-center'>
                    <div>
                        <p className={`text-blue-600 text-4xl`}>Total Sales In Rs</p>
                        <p className='text-center  text-8xl lining-nums oldstyle-nums '>12</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard