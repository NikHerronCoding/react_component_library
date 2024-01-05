import React from 'react';
import quote from '/icons/quote.svg'
import stockImage from '/pictures/stock_image.jpg';

export default function TestimonialPic({img=stockImage,name="Jane Doe", title="Startup, CTO", children}) {

    return (
        <div className="testimonial">
            
            <img src={img} alt="testimonial-photo" className="testimonial-photo" />

            <div className ="testimonial-content-container"> 

                <img className="testimonial-logo" src={quote}/>

                <p className="testimonial-text">{children}</p>

                <p className="testimonial-name">{name}</p>

                <p className="testimonial-title">{title}</p>

            </div>

        </div>
    )
}