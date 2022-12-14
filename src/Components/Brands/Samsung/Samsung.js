import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SamsungCard from './SamsungCard/SamsungCard';
import SamsungModal from '../../Bookings/SamsungModal';

const Samsung = () => {
    const [samsungPhone, setsamsungPhone] = useState(null)
    const {data: samsungs = [], refetch} = useQuery({
        queryKey: ['samsungs'],
        queryFn: async() => {
            const res = await fetch('https://click-server.vercel.app/products/samsung')
            const data = await res.json()
            return data
        }
    })
   

    return (
        <div>
           <h2 className='text-center capitalize font-bold text-primary text-3xl mt-10 mb-10'>our samsung products</h2>

           <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
           {
            samsungs.map(samsung => <SamsungCard key={samsung._id} samsung={samsung} setsamsungPhone={setsamsungPhone}></SamsungCard>)
           }
           </div>
           {
            samsungPhone &&
            <SamsungModal samsungPhone={samsungPhone} setsamsungPhone={setsamsungPhone} refetch={refetch}></SamsungModal>
           }
        </div>
    );
};

export default Samsung;