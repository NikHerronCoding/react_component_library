import React from 'react'

import TestimonialPic from './TestimonialPic'
import TestimonialPicMobile from './TestimonialPicMobile'

export default function Testimonials() {
    return (
    <div className="testimonials-container">
        <TestimonialPic>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
        </TestimonialPic>

        <TestimonialPicMobile>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
        </TestimonialPicMobile >
    </div>
    )
}