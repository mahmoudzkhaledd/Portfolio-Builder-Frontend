"use client"
import Lottie from 'lottie-react';
import animation from './laptop.json';

export default function Animation({ className }) {
    return (
        <Lottie
            className={className}
            animationData={animation}
            loop={true}
            style={{
                width: "100%",
            }}
        />
    )
    
}
