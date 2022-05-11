import React from 'react';
import ServiceCard from './ServiceCard';
import fluroid from './../../images/fluoride.png';
import cavity from './../../images/cavity.png';
import whitening from './../../images/whitening.png'

const ServiceCardSection = () => {
    const services = [
        {
            _id: 1,
            name:"Fluroid Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluroid
        },
        {
            _id: 2,
            name:"Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img:cavity
        },
        {
            _id: 3,
            name:"Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening
        }
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-center'>
            {
                services.map(service=><ServiceCard key={service._id} name={service.name} description={service.description} img={service.img}></ServiceCard>)
            }
        </div>
    );
};

export default ServiceCardSection;