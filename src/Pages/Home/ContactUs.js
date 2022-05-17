import React from 'react';
import doctorBG from '../../images/appointment.png'
const ContactUs = () => {
    return (
        <div class="hero" style={
            {
                background: `url(${doctorBG})`
            }
        }>
            <div className='text-center py-12 '>
                <h3 className='text-primary text-xl font-bold'>Testimonial</h3>
                <h1 className='text-white text-4xl py-5'>What Our Partners Say</h1>
                <form action="">
                    <input type="email" placeholder="Email" class="mb-4 input w-full max-w-s " />
                    <input type="text" placeholder="Subject" class="mb-4 input w-full max-w-s" />
                    <input type="text" placeholder="Your Message " class="mb-4 input w-full max-w-s h-40" />
                    <button className="btn bg-gradient-to-r from-secondary to-primary text-white border-none ">Submit</button>

                </form>
            </div>
        </div>
    );
};

export default ContactUs;