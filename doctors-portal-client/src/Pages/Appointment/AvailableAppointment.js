import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='pb-16'>
            <h4 className='text-secondary text-2xl text-center py-16'>Available Appointments on {format(date, 'PP')}</h4>
            <section className='service_section grid sm:grid-cols-1 md:grid-cols-3 lg:gird-cols-3 gap-5'>
                {
                    services.map(service=><Service treatment={treatment} setTreatment={setTreatment} service={service} key={service._id}></Service>)
                }
            </section>
            {
                treatment && <Modal date={date} treatment={treatment} setTreatment={setTreatment}></Modal>
            }
        </div>
    );
};

export default AvailableAppointment;