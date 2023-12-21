import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BASE_BACKEND_URL from '../../secret.js'


const Signup = () => {
   
    const [Avatar, setAvatar] = useState('')
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Contact, setContact] = useState('')
    const [Email, setEmail] = useState('')
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [userExists, setUserExists] = useState(false)
  

    const registerForm = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('Avatar', Avatar)
        formData.append('FirstName', FirstName)
        formData.append('LastName', LastName)
        formData.append('Contact', Contact)
        formData.append('Email', Email)
        formData.append('Username', Username)
        formData.append('Password', Password)

        const response = await axios.post(`${BASE_BACKEND_URL}/api/user/register`, formData)
        console.log(response.data.userExists);
        if (response.data.userExists == true) {
            setUserExists(true)
            // window.location = '/signup'
        } else {
            window.location = '/login'
        }
        setFirstName('')
        setLastName('')
        setContact('')
        setEmail('')
        setUsername('')
        setPassword('')
      
    }
    let error = null
    if (userExists) {
        error = <div role="alert" className="bg-red-500 text-white  flex justify-center p-2 rounded items-center gap-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className='text-sm  text-center'>Username Already Exists, Please try different username </span>
        </div>
    }
    return (
        <div className="w-[420px] shrink-0  mx-auto my-5  shadow-2xl bg-base-100">
            {error}
            <form className="p-5 w- rounded glass" onSubmit={registerForm}>
                <h1 className='text-center border-b-2 border-warning my-2 font-semibold text-xl'>Register!!</h1>
                <div class="flex items-center justify-center">
                    <label for="file-input" class="cursor-pointer">
                        <div class="w-16 h-16 bg-gray-300 rounded-full border-4 border-yellow-500 flex items-center justify-center">
                            <span class="text-gray-600 text-4xl font-semibold">+</span>
                        </div>
                        <input
                            id="file-input"
                            type="file"
                            class="hidden"
                            onChange={e => setAvatar(e.target.files[0])}
                        />

                    </label>

                </div>
                <h2 className='text-center mb-1'>Profile Image</h2>

                <div className="px-5">
                <div className="flex gap-8 items-center ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input
                            value={FirstName}
                            type="text "
                            placeholder="first name"
                            className="input input-sm input-warning w-36 input-bordered"
                            required
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input
                            value={LastName}
                            type="text "
                            placeholder="last name"
                            className="input input-sm w-36 input-warning input-bordered"
                            required
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Contact</span>
                    </label>
                    <input
                        value={Contact}
                        type="text"
                        placeholder="contact"
                        className="input input-sm w-80 input-warning input-bordered"
                        required
                        onChange={(e) => setContact(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        value={Email}
                        type="email"
                        placeholder="email"
                        className="input input-sm w-80 input-warning input-bordered"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input
                        value={Username}
                        type="text"
                        placeholder="username"
                        className="input input-sm w-80 input-warning input-bordered"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />


                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        value={Password}
                        type="password"
                        placeholder="password"
                        className="input input-sm w-80 input-warning input-bordered"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="label flex justify-between">
                        <Link to='/login' className='label-text-alt link link-hover '>Already have a account? Login</Link>
                    </label>

                </div>
                <div className="form-control mt-6">
                    <button
                        type='submit'
                        className="btn btn-sm btn-warning w-80 text-white text-lg">Register</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default Signup