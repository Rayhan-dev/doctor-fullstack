import React from 'react';
import treatment from './../../images/treatment.png'

const ExceptionalCare = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <img className='border border-2 border-transparent rounded-lg' src={treatment}/>
                <div className='mx-10'>
                    <h1 class="text-5xl font-bold ">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button class="btn bg-gradient-to-r from-secondary to-primary text-white border-none ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalCare;