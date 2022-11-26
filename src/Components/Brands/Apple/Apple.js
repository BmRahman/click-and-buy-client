import React from 'react';
import { useQuery } from '@tanstack/react-query';
import AppleCard from './AppleCard/AppleCard';

const Apple = () => {
    const {data: apples = []} = useQuery({
        queryKey: ['apples'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/products/apple')
            const data = await res.json()
            console.log(data)
            return data
        }
    })



    return (
        <div>
           <h2>our apple products</h2>

           <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
           {
            apples.map(apple => <AppleCard key={apple._id} apple={apple}></AppleCard>)
           }
           </div>
        </div>
    );
};

export default Apple;