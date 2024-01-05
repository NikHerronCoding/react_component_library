import React from 'react';
import Banner from './Banner';

export default function Banners() {
    return (
        <>
        <p>Multi Line</p>
        <div className="banner-container">
            <p>Success</p>
            <Banner 
                title="Congratulations!"
                variant="success"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.

            </Banner>
            <p>Warning</p>
            <Banner 
                title="Warning!"
                variant="warning"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.

            </Banner>
            <p>Error</p>
            <Banner 
                title="Error!"
                variant="error"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.

            </Banner>
            <p>Neutral</p>
            <Banner 
                title="Update Available"
                variant="neutral"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.

            </Banner>

        </div>

        <p>Single Line</p>
        <div className="banner-container">
            <p>Success</p>
            <Banner 
                title="Congratulations!"
                variant="success"
            >

            </Banner>
            <p>Warning</p>
            <Banner 
                title="Warning!"
                variant="warning"
            >

            </Banner>
            <p>Error</p>
            <Banner 
                title="Error!"
                variant="error"
            >

            </Banner>
            <p>Neutral</p>
            <Banner 
                title="Update Available"
                variant="neutral"
            >

            </Banner>

        </div>

        </>
    )

}