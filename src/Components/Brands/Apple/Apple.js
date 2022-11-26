import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import AppleCard from './AppleCard/AppleCard';
import AppleModal from '../../Bookings/appleModal';


const Apple = () => {
    const [applePhone, setApplePhone] = useState(null)
    const {data: apples = []} = useQuery({
        queryKey: ['apples'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/products/apple')
            const data = await res.json()
            console.log(data)
            console.log(apples)
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
            <AppleModal applePhone={applePhone}></AppleModal>
           }
        </div>
    );
};

export default Apple;