import React from 'react';
import quote from './../../icons/quote.svg'
import TestimonialCard from './TestimonialCard';
import person1 from './../../images/people1.png'
import person2 from './../../images/people2.png'
import person3 from './../../images/people3.png'

const Testimonial = () => {
    const allTestimonials = [
        {
            _id: 1,
            name: "Winson herry",
            testimonial: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: person1,
            location:'California'
        },
        {
            _id: 2,
            name: "alisona jones",
            testimonial: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: person2,
            location:'America'
        },
        {
            _id: 3,
            name: "David mactavish",
            testimonial: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: person3,
            location:'Africa'
        }
    ];
    return (
        <div>
            <div className='grid grid-cols-2 px-12'>
                <div className='text-start '>
                    <h3 className='text-primary text-xl font-bold'>Testimonial</h3>
                    <h1 className='text-4xl py-5'>What Our Partners Say</h1>
                </div>
                <div className='ml-auto'>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {
                    allTestimonials.map(oneTestimonial => <TestimonialCard key={oneTestimonial._id} oneTestimonial={oneTestimonial}></TestimonialCard>)
               }
            </div>
        </div>
    );
};

export default Testimonial;