import React from 'react';
import doctor from '../../images/doctor.png'
import doctorBG from '../../images/appointment.png'
const MakeAppointment = () => {
    return (
        <section style={
            {
                background: `url(${doctorBG})`
            }
        } className='grid lg:grid-cols-2 justify-center items-center my-20'>
            <div className="flex-1 mt-[-200px]">
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1 px-10'>
                <h3 className='text-primary text-xl font-bold'>Appointment</h3>
                <h1 className='text-white text-4xl py-5'>Make an appointment today</h1>
                <p className='text-white text-lg pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button class="btn bg-gradient-to-r from-secondary to-primary text-white border-none ">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;