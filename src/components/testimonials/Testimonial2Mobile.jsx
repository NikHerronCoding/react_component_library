import React from 'react'
import testimonial_pattern from '/patterns/testimonial_pattern.svg'
import default_logo from '/logos/default_logo.svg'
import divider from '/icons/divider.svg'

export default function Testimonial2({name="Jane Doe", title="Startup, CTO",logo=default_logo, children}) {

    return (
        <div className="testimonial2-mobile">
            
            <img src={testimonial_pattern} alt="testimonial-pattern" className="testimonial2-pattern-mobile" />

            <div className ="testimonial2-content-container-mobile"> 

                <img className="testimonial2-logo-mobile" src={default_logo} alt="logo"/>

                <p className="testimonial2-text-mobile">{children}</p>
                <div className="name-container-mobile">
                    <span className="testimonial2-name-mobile">{name + " "}</span>
                    
                    <span className="testimonial2-title-mobile">{title}</span>
                </div>

            </div>

        </div>
    )
}