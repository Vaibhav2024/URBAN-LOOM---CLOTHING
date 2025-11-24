import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App.jsx'
import { toast } from 'react-toastify'

const Login = ({setToken}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.post(backendUrl + '/api/user/admin', {email, password})
            console.log(response)
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

  return (
    <div className='min-h-screen flex items-center justify-center w-full bg-gray-50'>
        <div className='bg-white shadow-sm rounded-sm px-8 py-10 max-w-md w-full border border-gray-100'>
            <div className='mb-8 text-center'>
                <h1 className='text-3xl font-serif mb-2'>Admin Panel</h1>
                <p className='text-sm text-gray-500 font-light'>Sign in to manage your store</p>
            </div>
            
            <form onSubmit={onSubmitHandler}>
                <div className='mb-6'>
                    <p className='text-xs font-bold uppercase tracking-widest text-gray-500 mb-2'>Email Address</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-black transition-colors text-sm' type="email" placeholder='your@email.com' required />
                </div>

                <div className='mb-8'>
                    <p className='text-xs font-bold uppercase tracking-widest text-gray-500 mb-2'>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-black transition-colors text-sm' type="password" placeholder='Enter your password' required />
                </div>
                
                <button className='w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors' type='submit'>
                    Login
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login