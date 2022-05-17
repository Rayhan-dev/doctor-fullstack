import { format } from 'date-fns';
import React from 'react';

const Modal = ({ treatment ,setTreatment,date }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold py-5 ">{treatment.name} </h3>
                    <form >
                        <input type="text" disabled value={format(date, 'PP')} class="border rounded-lg border-[#CFCFCF] mb-4 input w-full" />
                        <select class="select border rounded-lg border-[#CFCFCF] w-full mb-4">
                            {
                                treatment.slots.map(slot => <option value={slot} >{slot}</option>)
                            }
                           
                        </select>
                        <input type="text" placeholder="Full Name" class="border rounded-lg border-[#CFCFCF] mb-4 input w-full" />
                        <input type="text" placeholder="Phone Number" class="border rounded-lg border-[#CFCFCF] mb-4 input w-full" />
                        <input type="text" placeholder="Email" class="border rounded-lg border-[#CFCFCF] mb-4 input w-full" />
                        <button className='btn btn-accent w-full text-white block'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;