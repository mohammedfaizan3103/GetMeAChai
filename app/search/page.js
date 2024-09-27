"use client"
import { useState, useEffect } from 'react';
import { getAllUsers } from '../actions/useractions';
import Link from 'next/link';

const SearchPage = () => {
    // const [searchInput, setSearchInput] = useState('');
    const [users, setUsers] = useState([]);
    useEffect(() => {
      document.title = "Top Users - Get Me A Chai"
      getdata_users()
    }, [])
    const getdata_users = async () => {
        let x = await getAllUsers()
        setUsers(x)
    }
    // const handleSearch = () => {
    //     // Implement search logic here
    // };

    return (
        <div className="min-h-screen text-white py-10 px-5">
            <div className="flex flex-col items-center max-w-2xl mx-auto">
                <h1 className="text-3xl font-semibold text-center mb-8">Top Users</h1>

                {/* Search Bar */}
                {/* <div className="w-full flex flex-col sm:flex-row gap-2 items-center justify-center mb-10">
                    <input
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className="sm:w-[75%] p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Search by name or email..."
                    />
                    <button class="mx-2 relative top-1 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Search
                        </span>
                    </button>
                </div> */}

                {/* User Cards */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {users.map((user) => (
                            <Link key={user._id} href={`/${user.username}`}>
                                <div key={user.id} className="bg-gray-800 rounded-lg p-5 shadow-md cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg h-full">
                                    <img
                                        src={user.profile}
                                        alt={user.name}
                                        className="w-24 h-24 rounded-full mx-auto mb-4"
                                    />
                                    <h2 className="text-xl font-bold text-center mb-2">{user.name}</h2>
                                    <p className="text-center text-gray-400 mb-1">{user.username}</p>
                                    <p className="text-center text-gray-500 mb-1">{user.count} donations</p>
                                    <p className="text-center text-gray-500">Total: {user.total} raised</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
