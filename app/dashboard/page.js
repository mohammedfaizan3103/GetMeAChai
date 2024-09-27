"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchUserData, updateUser } from '../actions/useractions'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const page = () => {

    const { data: session, update } = useSession()
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const [original, setOriginal] = useState({})
    const get = async () => {
        if (session) {
            let u = await fetchUserData(session.user.username);
            // console.log(u);
            setUser(u)
            setOriginal(u)
        }
    }
    const handleSubmit = async () => {
        update()
        let response = await updateUser(user, session.user.username)
        console.log(response.error === "");
        if (response.error) {
            setError(response.error)
            console.log(original);
            setUser(original)
        }
        else {
            toast('Your data has been updated!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setOriginal(user)
            setError("")

        }
    }
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        document.title = `Dashboard ${session.user.username}`
        if (session) {
            console.log(session);
        }
        get()
    }, [])
    if (!session) {
        const router = useRouter()
        router.push("/login")
    }
    if (session) {
        return (
            <>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
/>
                {/* Same as */}
                <ToastContainer />
                <div className="flex justify-center text-white">
                    <div className='space-y-3 mt-3'>
                        <h1 className='text-3xl font-semibold'>Welcome to your Dashboard</h1>
                        <form className='flex flex-col gap-2' action="" autocomplete="off">
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="name">Name</label>
                                <input onChange={handleChange} className='rounded-sm h-8 px-2 bg-slate-700' type="text" name="name" id="name" value={user.name} />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="name">Username</label>
                                <input onChange={handleChange} className='rounded-sm h-8 px-2 bg-slate-700' type="text" name="username" id="username" value={user.username} />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="name">Profile Picture</label>
                                <input onChange={handleChange} className='rounded-sm h-8 px-2 bg-slate-700' type="text" name="profile" id="profile" value={user.profile} />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="name">Cover picture</label>
                                <input onChange={handleChange} className='rounded-sm h-8 px-2 bg-slate-700' type="text" name="cover" id="cover" value={user.cover} />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="name">RazorPay Id</label>
                                <input onChange={handleChange} className='rounded-sm h-8 px-2 bg-slate-700' type="text" name="razorPayId" id="razorId" value={user.razorPayId} />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="name">RazorPay Secret</label>
                                <input onChange={handleChange} className='rounded-sm h-8 px-2 bg-slate-700' type="text" name="secret" id="secret" value={user.secret} />
                            </div>
                        </form>
                        <div className='text-red-500 text-center'>{error}</div>
                        <div className="flex justify-center">
                            <button onClick={handleSubmit} class=" mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Save
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default page
