import React from 'react'
import { Link } from 'react-router-dom'

const aside = () => {
    
    return (
        <aside className='w-60 p-5 h-screen mobile-aside mx-1 bg-neutral my-[2px] rounded'>
            <div className='my-3'>
                <Link to={'/admin/'} className=' mobile-aside-link rounded px-[50px] text-lg text-semibold text-white text-center hover:text-yellow-600 active:bg-yellow-700'>Dashboard</Link>
            </div>
            <div className='my-3'>
                <Link to={'/admin/products'} className='mobile-aside-link rounded px-[50px] text-lg text-semibold text-white text-center hover:text-yellow-600 active:bg-yellow-700'>Products</Link>
            </div>
            <div className='my-3'>
                <Link to={'/admin/addproducts'} className='mobile-aside-link rounded pl-[50px] text-lg text-semibold text-white text-center hover:text-yellow-600 active:bg-yellow-700'>Add Products</Link>
            </div>
            <div className='my-3'>
                <Link to={'/admin/allusers'} className='mobile-aside-link rounded px-[50px] text-lg text-semibold text-white text-center hover:text-yellow-600 active:bg-yellow-700'>Users</Link>
            </div>
            <hr />
            <div className="my-5 aside-display-hidden">
                <div className='my-3'>
                    <Link className=' rounded px-[50px] text-lg text-semibold text-white text-center hover:text-yellow-600 active:bg-yellow-700'>Profile</Link>
                </div>
                <div className='my-[80px]'>
                    <img src="../Public/Images/Apni-Dukaan-Logo-Black-01.png" alt="" />
                </div>
            </div>


        </aside>
    )
}

export default aside