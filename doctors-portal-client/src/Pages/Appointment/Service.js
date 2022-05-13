import React from 'react';

const Service = ({ service, treatment, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card w-96 lg:max-w-lg bg-base-100 shadow-xl mx-auto ">
            <div className="card-body items-center">
                <h2 className="card-title text-secondary text-xl">{name}</h2>
                <p className='text-sm'>{slots.length ? slots[0] : "Try Another Date"}</p>
                <p>{slots.length} {slots.length > 1 ? "SPACES " : "SLOT "}AVAILABLE</p>
                <div className="card-actions justify-end">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="my-modal-3"
                        className="btn modal-button bg-secondary text-white border-0"
                        onClick={() => setTreatment(service)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;