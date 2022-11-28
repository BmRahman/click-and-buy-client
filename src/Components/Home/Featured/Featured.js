import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import FeaturedCard from './FeaturedCard/FeaturedCard';
import FeaturedModal from './FeaturedModal/FeaturedModal';

const Featured = () => {
    const [featuredPhone, setFeaturedPhone] = useState(null)
    const {data: featureds = [], refetch} = useQuery({
        queryKey: ['featureds'],
        queryFn: async() => {
            const res = await fetch('https://click-server.vercel.app/advertised')
            const data = res.json()
            return data
        }
    })

    return (
        <div className=' mb-20'>
            <h2 className='text-3xl font-bold text-center mt-20 mb-10'>Featured <span className='text-primary'>Products</span></h2>
           <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
           {
                featureds.map(featured => <FeaturedCard 
                key={featured._id} featured={featured} setFeaturedPhone={setFeaturedPhone}>
                </FeaturedCard>)
            }
           </div>
           {
            featuredPhone &&
            <FeaturedModal featuredPhone={featuredPhone} setFeaturedPhone={setFeaturedPhone} refetch={refetch}></FeaturedModal>
           }
        </div>
    );
};

export default Featured;