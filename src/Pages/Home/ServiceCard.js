import React from 'react';

const ServiceCard = ({ img, description, name }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto my-10">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name }</h2>
                <p>{description }</p>
            </div>
        </div>
    );
};

export default ServiceCard;