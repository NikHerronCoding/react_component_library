import React from 'react';
import quote from '/icons/quote.svg'
import stockImage from '/pictures/stock_image.jpg';

export default function TestimonialMobile({img = stockImage ,name="Jane Doe", title="Startup, CTO", children}) {

    return (
        <div className="testimonial-mobile">
            
            <img src={img} alt="testimonial-photo" className="testimonial-photo-mobile" />

            <div className ="testimonial-content-container-mobile"> 

             <img className="testimonial-logo-mobile" src={quote}/>
            
                <p className="testimonial-text-mobile">{children}</p>

                <p className="testimonial-name-mobile">{name}</p>

                <p className="testimonial-title-mobile">{title}</p>
            
            </div>
            
        </div>
    )
}