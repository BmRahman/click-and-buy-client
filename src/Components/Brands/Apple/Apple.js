import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import AppleCard from './AppleCard/AppleCard';
import AppleModal from '../../Bookings/appleModal';


const Apple = () => {
    const [applePhone, setApplePhone] = useState(null)
    const {data: apples = [], refetch} = useQuery({
        queryKey: ['apples'],
        queryFn: async() => {
            const res = await fetch('https://click-server.vercel.app/products/apple')
            const data = await res.json()
            return data
        }
    })



    return (
        <div>
           <h2 className='text-center capitalize font-bold text-primary text-3xl mt-10 mb-10'>our apple products</h2>

           <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
           {
            apples.map(apple => <AppleCard key={apple._id} apple={apple} setApplePhone={setApplePhone}></AppleCard>)
           }
           </div>
           {
            applePhone &&
            <AppleModal applePhone={applePhone} setApplePhone={setApplePhone} refetch={refetch}></AppleModal>
           }
        </div>
    );
};

export default Apple;