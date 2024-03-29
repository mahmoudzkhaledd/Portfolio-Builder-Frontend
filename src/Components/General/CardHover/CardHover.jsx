import './style.css';
import Link from 'next/link';
export default function CardHover({ link, title, icon, circleColor }) {
    return (
        <Link href={link} className="cardHover education">
            <div className="overlay" style={{
                backgroundColor:circleColor,
            }}>
                <i className={`${icon} icon`}></i> 
            </div>
            <p>{title}</p>
        </Link>
    )
}
