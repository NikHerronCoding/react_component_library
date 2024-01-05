import React from 'react';

import checkCircle from '/icons/check_circle.svg';
import exclamation from '/icons/exclamation.svg';
import error from '/icons/error.svg';
import neutral from '/icons/neutral.svg';



export default function Banner({title, variant, children, className}) {
    let icons = {
        'success':<img src={checkCircle} className="banner-icon" alt="check"/>,
        'warning':<img src={exclamation} className="banner-icon" alt="exclamation"/>,
        'error':<img src={error} className="banner-icon" alt="error"/>,
        'neutral':<img src={neutral} className="banner-icon" alt="neutral"/>
    }
    return (
        <div className={`banner banner-${variant} ${className? className: ""}`}>
            
            {icons[variant]}
            <div className="banner-content">
                <h3 className={`banner-title banner-${variant}`}>{title}</h3>
                
                {children && <p className={`banner-p-${variant} banner-p`}> {children} </p>}
            </div>

        </div>
    )
}