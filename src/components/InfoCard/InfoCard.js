import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';


const infoCard = ({ Info }) => {
    console.log(infoCard)
    return (
        <div className='col-md-4 text-red info-card'>
            <div className={`d-flex justify-content-center info-container info-${Info.background}`}>
                <div className='mr-3'>
                    {/* <FontAwesomeIcon className='info-icon' icon={Info.icon}></FontAwesomeIcon> */}
                </div>
                <div>
                    <h6>{Info.title}</h6>
                    <small>{Info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default infoCard;