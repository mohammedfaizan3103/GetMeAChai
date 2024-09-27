"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const { data: session } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)
  const router = useRouter()
  const handleLogout = () => {
    console.log("Logging out...");
    signOut()
  }
  
  return (
    <nav className='bg-gray-900 px-4 py-4 text-white flex flex-col sm:flex-row justify-between md:justify-around items-center'>
      <h1 className='font-bold text-2xl p-2 cursor-pointer'>
        <Link className='flex items-center' href={"/"}>
          <img src="favicon.ico" alt="" />
          <p>
            GetMeAChai
          </p>
        </Link>
      </h1>
      <ul className='flex gap-4 items-center'>
        <li className='cursor-pointer text-base'>
          {(!session) ? <Link href={"/login"}>
            <button type="button" className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium hover:font-bold rounded-lg px-5 py-2.5 text-center me-2 mb-2">
              Login
            </button>
          </Link> : <>
            <button onClick={() => setShowDropdown(!showDropdown)} onBlur={() => {
              setTimeout(() => {
                setShowDropdown(!setShowDropdown)
              }, 300)
            }} id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium hover:font-bold rounded-lg px-5 py-2.5 text-center me-2 mb-2 inline-flex items-center" type="button">{
              (session.user.name.length <= 12 ? session.user.name : session.user.name.slice(0,12) +"...") 
            } <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg> 
            </button>
            <div id="dropdownDivider" className={`z-10 ${(showDropdown) ? "" : "hidden"} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                  <Link href={`/${session.user.username}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                </li>
              </ul>
              <div onClick={handleLogout} className="py-2">
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full text-left">Log out</button>
              </div>
            </div></>
          }
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
