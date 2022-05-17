import React from 'react';

const InfoCard = ({ title,bgClass,text,img }) => {
    return (
        <div className={`card lg:card-side shadow-xl ${bgClass} text-white mx-3 px-3 py-4 my-5`}>
            <figure><img src={img} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{ text}</p>
            </div>
        </div>
    );
};

export default InfoCard;