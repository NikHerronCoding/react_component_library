import React from 'react';
import cloudLogo from '/icons/cloud.svg';

export default function Card({title, children, logo = cloudLogo}) {
    return (
        <div className="card">
            <div className="card-logo-container">
                <img className="card-logo"src={logo}/>
            </div>
            <h3 className="card-title">{title}</h3>
            <p className="card-text">
                {children}
            </p>

        </div>
    )
}
