import React from 'react';
import { useQuery } from '@tanstack/react-query';
import OneplusCard from './OneplusCard/OneplusCard';

const Oneplus = () => {
    const {data: onepluses = []} = useQuery({
        queryKey: ['onepluses'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/products/oneplus')
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
            onepluses.map(oneplus => <OneplusCard key={oneplus._id} oneplus={oneplus}></OneplusCard>)
           }
           </div>
        </div>
    );
};

export default Oneplus;