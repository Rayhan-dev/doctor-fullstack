import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import chair from './../../images/chair.png'
import 'react-day-picker/dist/style.css';
import background from './../../images/bg.png'
const AppointmentBanner = ({date,setDate}) => {
   
    return (
        <div style={
            {
                background: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition:"center"
            }
        } >
            <div className="hero min-h-fit py-48 bg-transparent px-auto ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-lg rounded-lg shadow-2xl" />
                    <div className='mx-24  shadow-2xl shadow-slate-300'>
                        <DayPicker
                            mode="single"
                            date={date}
                            onSelect={setDate}
                        ></DayPicker>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;