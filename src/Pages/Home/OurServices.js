import React from 'react';
import ServiceCardSection from './ServiceCardSection';

const OurServices = () => {
    return (
        <div>
            <h3 className='text-secondary text-2xl text-center pt-16 font-bold'>Our Services</h3>
            <h1 className='text-4xl text-center py-5'>Services We Provide</h1>
            <ServiceCardSection></ServiceCardSection>
        </div> 
    );
};

export default OurServices;