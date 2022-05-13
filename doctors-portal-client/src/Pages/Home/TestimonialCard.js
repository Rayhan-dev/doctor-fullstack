import React from 'react';

const TestimonialCard = ({ oneTestimonial }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-12">
            <div className="card-body">
                <div>
                    <p>{oneTestimonial.testimonial}</p>
                </div>
                <div className="flex items-center">
                    <div>
                        <div className="avatar mr-5 mt-5">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-2 ">
                                <img src={oneTestimonial.img} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title">{oneTestimonial.name}</h2>
                        <p >{oneTestimonial.location}</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default TestimonialCard;