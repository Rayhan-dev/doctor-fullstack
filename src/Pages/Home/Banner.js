import React from 'react';
import chair from '../../images/chair.png'
import bg from '../../images/bg.png'
const Banner = () => {
    return (
        <div >
            <div class="hero min-h-screen bg-transparent px-auto">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button class="btn bg-gradient-to-r from-secondary to-primary text-white border-none ">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;