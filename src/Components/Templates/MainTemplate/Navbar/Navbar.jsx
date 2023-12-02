import Link from 'next/link';
import style from './style.module.css';
import ModeSwitcher from '@/Components/ModeSwitcher/ModeSwitcher';

export default function Navbar({ data }) {
    let i = 0;
    return (
        <div className={style.navContainer}>
            <div />
            <ul className={style.navbar}>
                {
                    data.items.map((e) => <li key={i++}><Link href={e.to}>
                        {e.title}
                    </Link>
                    </li>)
                }
            </ul>
            <ModeSwitcher />
        </div>
    )
}
