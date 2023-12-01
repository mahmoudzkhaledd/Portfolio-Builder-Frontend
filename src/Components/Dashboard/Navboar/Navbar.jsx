import Link from 'next/link';
import style from './style.module.css';
import { useParams } from 'next/navigation';

export default function Navbar() {
  const { id } = useParams();
  
  return (
    <div className={style.navBarCont}>

      <ul className={style.navBar}>
        <div className={style.left}>
          <li className={style.lst}><Link href=''>Statitics</Link></li>
          <li className={style.lst}><Link href=''>Top Messages</Link></li>
        </div>
        <li className={style.lst}>
          <a href={`/portfolio/${id}`} target="_blank" rel="noopener noreferrer">
            Portfolio
          </a>
        </li>
      </ul>

    </div>
  )
}
