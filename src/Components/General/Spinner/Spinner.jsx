import style from './style.module.css';
import Lottie from 'lottie-react';
import animation from './loading_animation.json';

export default function Spinner({ color, size }) {
    return (
        <Lottie
            animationData={animation}
            loop={true}
            style={{
                width: "300px",
            }}
        />
    );
    
    return (
        <i
            style={{ fontSize: size || 17,color:color, }}
            className={`fa-solid fa-circle-notch ${style.spinner}`}></i>
    )
}
