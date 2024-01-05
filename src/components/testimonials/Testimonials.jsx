import React from 'react'

import Testimonial from './Testimonial'
import TestimonialMobile from './TestimonialMobile'
import Testimonial2 from './Testimonial2'
import Testimonial2Mobile from './Testimonial2Mobile'

export default function Testimonials() {
    return (
    <div className="testimonials-container">
        <Testimonial>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
        </Testimonial>

        <TestimonialMobile>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
        </TestimonialMobile >

        <Testimonial2> 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit." 
        </Testimonial2>

        <Testimonial2Mobile> 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit." 
        </Testimonial2Mobile>
    </div>
    )
}