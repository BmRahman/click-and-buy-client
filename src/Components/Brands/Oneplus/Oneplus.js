import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import OneplusCard from './OneplusCard/OneplusCard';
import OneplusModal from '../../Bookings/OneplusModal';

const Oneplus = () => {
    const [oneplusPhone, setOneplusPhone] = useState(null)
    const {data: onepluses = [], refetch} = useQuery({
        queryKey: ['onepluses'],
        queryFn: async() => {
            const res = await fetch('https://click-server.vercel.app/products/oneplus')
            const data = await res.json()
            console.log(data)
            return data
        }
    })
    return (
        <div>
            <h2 className='text-center capitalize font-bold text-primary text-3xl mt-10 mb-10'>our oneplus products</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
           {
            onepluses.map(oneplus => <OneplusCard key={oneplus._id} oneplus={oneplus} setOneplusPhone={setOneplusPhone}></OneplusCard>)
           }
           </div>
           {
            oneplusPhone &&
            <OneplusModal oneplusPhone={oneplusPhone} setOneplusPhone={setOneplusPhone} refetch={refetch}></OneplusModal>
           }
        </div>
    );
};

export default Oneplus;