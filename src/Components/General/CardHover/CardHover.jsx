import './style.css';
import Link from 'next/link';
export default function CardHover({ link, title, icon,circleColor }) {
    return (
        <Link href={link} className="card education">
            <div className="overlay" style={{
                backgroundColor:circleColor,
            }}>
                <i className={`${icon} icon`}></i> 
            </div>
            <p className='title'>{title}</p>
        </Link>
    )
}
