import React from 'react';

const ServiceCard = ({ img, description, name }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name }</h2>
                <p>{description }</p>
            </div>
        </div>
    );
};

export default ServiceCard;