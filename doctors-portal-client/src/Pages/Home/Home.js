import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import ExceptionalCare from './ExceptionalCare';
import Footer from './Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import OurServices from './OurServices';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <OurServices></OurServices>
            <ExceptionalCare></ExceptionalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;