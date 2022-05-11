import React from 'react';

const InfoCard = ({ title,bgClass,text,img }) => {
    return (
        <div class={`card lg:card-side shadow-xl ${bgClass} text-white mx-3 px-4`}>
            <figure><img src={img} alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p>{ text}</p>
            </div>
        </div>
    );
};

export default InfoCard;