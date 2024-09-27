import React from 'react'
import PaymentsPage from '../components/PaymentsPage';
import { notFound } from 'next/navigation';
import User from '../models/User';
import mongoose from 'mongoose';

const page = async ({ params }) => {
    // console.log(params);
    const client = await mongoose.connect('mongodb://localhost:27017/chai')
    let u = await User.findOne({username: params.username})
    if(!u) {
        return notFound()
    }
    return (
        <>
            <PaymentsPage username={params.username}/>
        </>
    )
}
export async function generateMetadata({ params }) {
    return {
      title: `${params.username} - Get Me A Chai`,
    }
  }
 
export default page
