import React from 'react';
import footerBg from '../../images/footer.png'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer style={{
            background: `url(${footerBg})`,
            backgroundPosition: "center"
        }} >
            <div className="footer p-10 mx-auto py-18">
                <div className='mx-auto'>
                    <span className="footer-title">SERVICES</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">OUR ADDRESS</span>
                    <a className="link link-hover">New York - 101010 Hudson</a>
                </div>
            </div>
            <div className='text-center py-5'> 
                <p>Copyright © {year} - All right reserved by Rayhan</p>
            </div>
        </footer >
    );
};

export default Footer;