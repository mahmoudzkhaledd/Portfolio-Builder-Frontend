import Link from 'next/link';
import style from './style.module.css';

export default function Navbar({ data }) {
    const stickStyle = {
        position: "fixed",
        marginInline: "auto",
        left: 0,
        zIndex: 100,
    }
    let i = 0;
    return (
        <div className={style.navContainer} style={data.stickTop ? stickStyle : {}}>
            <div />
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
