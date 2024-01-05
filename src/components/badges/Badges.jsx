import React from 'react';

import Badge from './Badge.jsx'

export default function Badges() {
    return (
        <>
            <p>Square</p>

            <div className="badge-container">

                    <Badge color='grey'
                        shape='square'>
                            Badge
                    </Badge>

                    <Badge color='red'
                        shape='square'>
                            Badge
                    </Badge>

                    <Badge color='yellow'
                        shape='square'>
                            Badge
                    </Badge>

                    <Badge color='green'
                        shape='square'>
                            Badge
                    </Badge>

                    <Badge color='blue'
                        shape='square'>
                            Badge
                    </Badge>

                    <Badge color='indigo'
                        shape='square'>
                            Badge
                    </Badge>

                    <Badge color='purple'
                        shape='square'>
                            Badge
                    </Badge>

                    <Badge color='pink'
                        shape='square'>
                            Badge
                    </Badge>

                </div>
                
                <p>Pill</p>

                <div className="badge-container">

                    <Badge color='grey'
                        shape='pill'>
                            Badge
                    </Badge>

                    <Badge color='red'
                        shape='pill'>
                            Badge
                    </Badge>

                    <Badge color='yellow'
                        shape='pill'>
                            Badge
                    </Badge>

                    <Badge color='green'
                        shape='pill'>
                            Badge
                    </Badge>

                    <Badge color='blue'
                        shape='pill'>
                            Badge
                    </Badge>

                    <Badge color='indigo'
                        shape='pill'>
                            Badge
                    </Badge>

                    <Badge color='purple'
                        shape='pill'>
                            Badge
                    </Badge>

                    <Badge color='pink'
                        shape='pill'>
                            Badge
                    </Badge>

                </div>
        </>
        

    )
}