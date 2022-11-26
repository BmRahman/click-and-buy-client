import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SamsungCard from './SamsungCard/SamsungCard';

const Samsung = () => {
    const {data: samsungs = []} = useQuery({
        queryKey: ['samsungs'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/products/samsung')
            const data = await res.json()
            console.log(data)
            return data
        }
    })


    return (
        <div>
           <h2 className='text-center capitalize font-bold text-primary text-3xl mt-10 mb-10'>our samsung products</h2>

           <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
           {
            samsungs.map(samsung => <SamsungCard key={samsung._id} samsung={samsung}></SamsungCard>)
           }
           </div>
        </div>
    );
};

export default Samsung;