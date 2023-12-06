import Link from 'next/link';
import style from './style.module.css';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function Navbar() {
  const { id } = useParams();
  const rout = useRouter();
  const handelLogout = () => {
    "use client";
    Cookies.remove('token');
    localStorage.clear();
    rout.replace('/login');
  };
  return (
    <div className={style.navBarCont}>

      <ul className={style.navBar}>
        <div className={style.left}>
          <li className={style.lst}><Link href=''>Statitics</Link></li>
          <li className={style.lst}><Link href=''>Top Messages</Link></li>
        </div>
        <div className={style.themeCont}>

          <li className={style.lst}>
            <Link href={`/portfolio/${id}`} target="_blank" rel="noopener noreferrer">
              Portfolio
            </Link>
          </li>
          <li className={style.lst} onClick={handelLogout}>
            <span>Logout</span>
          </li>
        </div>
      </ul>

    </div>
  )
}
