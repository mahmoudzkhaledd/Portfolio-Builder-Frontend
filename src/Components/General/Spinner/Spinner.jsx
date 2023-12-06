
import style from './style.module.css';
import Lottie from 'lottie-react';
import animation from './loading_animation.json';

export default function Spinner() {
    return (
        <Lottie
            animationData={animation}
            loop={true}
            className={style.lottie}
        />
    );

}
