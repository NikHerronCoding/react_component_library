import React from 'react'


export default function Badge({color, shape, children}) {
    return (
        <div className={`badge ${color} badge-${shape}`}>
            {children}
        </div>
    )
}