import React from 'react';
// import { faClock, faMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import Info from '../InfoCard/InfoCard';

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 Days',
        // icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 1000, USA',
        // icon: faMarker,
        background: 'dark'
    },
    {
        title: 'Call Us Now',
        description: '+15434342424',
        // icon: faPhone,
        background: 'primary'
    }
]


const BusinessInfo = () => {
    return (
        <section className='d-flex justify-content-center'>
            <div className="w-75 row">
                {
                    infosData.map(info => <infoCard info={Info}></infoCard> )
                }
            </div>
        </section>
    );
};

export default BusinessInfo;