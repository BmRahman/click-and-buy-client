import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import XiaomiCard from './XiaomiCard/XiaomiCard';
import XiaomiModal from '../../Bookings/XiaomiModal';

const Xiaomi = () => {
    const [xiaomiPhone, setXiaomiPhone] = useState(null)
    const {data: xiaomis = [], refetch} = useQuery({
        queryKey: ['xiaomis'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/products/xiaomi')
            const data = await res.json()
            return data
        }
    })


    return (
        <div>
            <h2 className='text-center capitalize font-bold text-primary text-3xl mt-10 mb-10'>our xiaomi products</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
           {
            xiaomis.map(xiaomi => <XiaomiCard key={xiaomi._id} xiaomi={xiaomi} setXiaomiPhone={setXiaomiPhone}></XiaomiCard>)
           }
           </div>
           {
            xiaomiPhone &&
            <XiaomiModal xiaomiPhone={xiaomiPhone} setXiaomiPhone={setXiaomiPhone} refetch={refetch}></XiaomiModal>
           }
        </div>
    );
};

export default Xiaomi;