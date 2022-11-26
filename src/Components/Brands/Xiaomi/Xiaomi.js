import React from 'react';
import { useQuery } from '@tanstack/react-query';
import XiaomiCard from './XiaomiCard/XiaomiCard';

const Xiaomi = () => {
    const {data: xiaomis = []} = useQuery({
        queryKey: ['xiaomis'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/products/xiaomi')
            const data = await res.json()
            console.log(data)
            return data
        }
    })


    return (
        <div>
            <h2 className='text-center capitalize font-bold text-primary text-3xl mt-10 mb-10'>our xiaomi products</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
           {
            xiaomis.map(xiaomi => <XiaomiCard key={xiaomi._id} xiaomi={xiaomi}></XiaomiCard>)
           }
           </div>
        </div>
    );
};

export default Xiaomi;