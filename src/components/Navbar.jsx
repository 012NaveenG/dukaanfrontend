import React, { useContext } from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
    const tokenExists = localStorage.getItem('token')
    const currentUser = localStorage.getItem('userAvatar')
    var UserExists = null
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userAvatar')
        window.location = '/login'

    }
    if (tokenExists) UserExists =
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="profile" src={`${currentUser}`}  />
                </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black">
                <li><Link>Profile</Link></li>
                <li><Link>Settings</Link></li>
                <li><Link onClick={logout}>Logout</Link></li>
            </ul>
        </div>
    const userNotExists = <>
        <Link to='/login'><button className='btn btn-sm btn-warning text-white'>Login</button></Link>
        <Link to='/signup'><button className='btn btn-sm btn-warning text-white'>SignUp</button></Link></>

    return (
        <nav>
            <div className="navbar bg-neutral text-neutral-content">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost text-xl">
                        <img src="https://apnidukaan.com.au/wp-content/uploads/2021/04/Apni-Dukaan-Logo-Black-01.png" alt="" className='w-52 nav-logo h-12' />
                    </Link>
                </div>

                <div className="flex-none gap-2">
                    <div className="form-control nav-hidden ">
                        <input type="text" placeholder="Search" className="input input-sm input-warning text-black input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end nav-hidden" >
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {tokenExists ? UserExists : userNotExists}
                </div>
            </div>
        </nav>
    )
}

export default Navbar