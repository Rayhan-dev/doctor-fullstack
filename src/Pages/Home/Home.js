import React from 'react';
import Banner from './Banner';
import ExceptionalCare from './ExceptionalCare';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import OurServices from './OurServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <OurServices></OurServices>
            <ExceptionalCare></ExceptionalCare>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;