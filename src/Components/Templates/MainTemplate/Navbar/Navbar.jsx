import Link from 'next/link';
import style from './style.module.css';

export default function Navbar({ data }) {
    let i = 0;
    return (
        <div className={style.navContainer}>
            <ul className={style.navbar}>
                {
                    data.items.map((e) => <li key={i++}><Link href={e.to}>
                        {e.title}
                    </Link>
                    </li>)
                }
            </ul>
        </div>
    )
}
