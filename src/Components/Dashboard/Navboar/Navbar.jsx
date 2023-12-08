import Link from 'next/link';
import style from './style.module.css';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { IconButton } from '@mui/material';
import { IoMenu } from "react-icons/io5";
import { useContext, useState } from 'react';
import CustomModal from '@/Components/Modal/CustomModal';
import { data } from '../../Dashboard/data';
import { dashContext } from '@/hooks/state/dashboardState';

export default function Navbar({mainPage}) {
  const { id } = useParams();
  const rout = useRouter();
  const handelLogout = () => {
    "use client";
    Cookies.remove('token');
    localStorage.clear();
    rout.replace('/login');
  };
  const ctx = useContext(dashContext);
  const [modal, showModal] = useState(false)
  return (
    <div className={style.navBarCont}>
      <IconButton onClick={() => { showModal(true) }} className={`icon-ext ${style.menuIcon}`}>
        <IoMenu />
      </IconButton>
      {
        modal && <CustomModal title="Items" onClose={() => showModal(false)} >
          <li className={`${style.lst} ${style.listModal}`}>
            <Link href={`/portfolio/${id}`} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-user"></i>
              &nbsp;&nbsp;&nbsp;
              Portfolio
            </Link>
          </li>
          {
            Object.keys(data).map(key => {
              const item = data[key];

              return (
                <li key={key} className={`${style.lst} ${style.listModal}`} onClick={() => {
                  if(item.href == null) {
                    ctx.setPage(item.text);
                    showModal(false)
                  }
                }}>
                  <Link href={item.href || "#"} >
                    <i className={item.icon} />
                    &nbsp;&nbsp;&nbsp;
                    {`${item.text}`}
                  </Link>
                </li>
              );
            })
          }
        </CustomModal>
      }
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
