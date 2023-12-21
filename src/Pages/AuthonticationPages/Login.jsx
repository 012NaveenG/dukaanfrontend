import axios from 'axios'
import React, {  useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import BASE_BACKEND_URL from '../../secret'
import UserContext from '../../Context/context'


const Login = () => {
    const {setCurrentUser}=useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginData, setLoginData] = useState(null)
    const [error, setError] = useState(null)
    const submitData = () => {
        setLoginData({ username, password })

    }
    const login = async (e) => {
        e.preventDefault()
        const response = await axios.post(`${BASE_BACKEND_URL}/api/user/login`, loginData)
        console.log(response.data.invalidCredentials);
        if (response.data.invalidCredentials) {
            setError(
                <div role="alert" className="alert flex justify-center items-center h-12  alert-error rounded my-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className='font-semibold text-center text-white '>Error! Invalid Credentials!</span>
                </div>
            )
            setUsername('')
            setPassword('')
        } else {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userAvatar',response.data.Avatar)
            window.location = '/'
            // console.log(response.data.Avatar);
            setCurrentUser(response.data.Avatar)

        }
    }
    if (localStorage.getItem('token')) window.location = '/'
    return (
        <>
            <div className="w-96 shrink-0  mx-auto my-5 max-w-sm shadow-2xl bg-base-100">
                {error}

                <form className="p-5 rounded glass" onSubmit={login}>
                    <h1 className='text-center border-b-2 border-warning my-2 font-semibold text-xl'>Login!!</h1>
                    <div className="form-control">
                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Username
                            </span>
                            <input
                                value={username}
                                type="text"
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="username"
                                required
                                onChange={(e) => setUsername(e.target.value)} />
                        </label>

                    </div>
                    <div className="form-control">
                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Password
                            </span>
                            <input
                                value={password}
                                type="password"
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>

                        <label className="label flex justify-between">
                            <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            <Link to='/signup' className='label-text-alt link link-hover '>Didn't have account? SignUp</Link>

                        </label>

                    </div>
                    <div className="form-control mt-6">
                        <button
                            onClick={submitData}
                            type='submit'
                            className="btn btn-sm text-lg text-white btn-warning">Login</button>
                    </div>
                </form>
            </div>
        </>



    )
}

export default Login