import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <a class="btn btn-ghost normal-case text-xl">Doctors Portal</a>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/appointment'}>Appointment</Link></li>
                    <li><Link to={'/reviews'}>Reviews</Link></li>
                    <li><Link to={'/contact'}>Contact Us</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;