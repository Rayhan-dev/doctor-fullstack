import React from 'react';
import InfoCard from './InfoCard';
import clock from './../../icons/clock.svg';
import marker from './../../icons/marker.svg';
import phone from './../../icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-3 mx-12'>
            <InfoCard img={clock} title="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" text="Our opening time is 10am to 8 pm"></InfoCard>
            <InfoCard img={marker} title="Visit Us Now" bgClass="bg-accent" text="Our location is gulbag,Agrabad,Chittagong. "></InfoCard>
            <InfoCard img={phone} title="Contact Us Now" bgClass="bg-gradient-to-r from-secondary to-primary" text="contact us on 'mohammodrayhan444@gmail.com'"></InfoCard>
        </div>
    );
};

export default Info;