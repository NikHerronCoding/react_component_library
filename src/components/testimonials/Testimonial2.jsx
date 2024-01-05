import React from 'react'
import testimonial_pattern from '/patterns/testimonial_pattern.svg'
import default_logo from '/logos/default_logo.svg'
import divider from '/icons/divider.svg'

export default function Testimonial2({name="Jane Doe", title="Startup, CTO",logo=default_logo, children}) {

    return (
        <div className="testimonial2">
            
            <img src={testimonial_pattern} alt="testimonial-pattern" className="testimonial2-pattern" />

            <div className ="testimonial2-content-container"> 

                <img className="testimonial2-logo" src={default_logo} alt="logo"/>

                <p className="testimonial2-text">{children}</p>
                <div className="name-container">
                    <span className="testimonial2-name">{name + " "}</span>
                    
                    <img src={divider} alt="divider"/>

                    <span className="testimonial2-title">{title}</span>
                </div>

            </div>

        </div>
    )
}