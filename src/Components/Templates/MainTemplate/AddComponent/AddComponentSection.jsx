import Link from 'next/link';
import style from './style.module.css';
import { usePathname } from 'next/navigation';

export default function AddComponentSection() {
    const path = usePathname();

    return (
        <Link id='port__add-comp' href={`${path}/add-components`} className={style.mainCont}>
            <i className={`fa-solid fa-plus ${style.icon}`} />
        </Link>
    )
}
