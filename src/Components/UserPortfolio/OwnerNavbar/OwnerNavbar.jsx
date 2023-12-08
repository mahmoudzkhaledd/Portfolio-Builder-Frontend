"use client";
import style from './style.module.css';
import { IconButton } from '@mui/material';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import Link from 'next/link';
import { useParams } from 'next/navigation'
export default function OwnerNavbar({ portId }) {
  const { id } = useParams();
  return (
    <div className={style.mainNavbarCont}>
      <Link href={`/dashboard/${id}`} target="_blank" rel="noopener noreferrer">
        <h5 style={{ userSelect: "none" }}>Dashboard</h5>
      </Link>

      <h5>Edit Mode</h5>



      <Link className={style.subCont} href={`${window.location.pathname}?editMode=false`} target="_blank" rel="noopener noreferrer">
        <IconButton className='icon-ext'>
          <VerifiedUserRoundedIcon />
        </IconButton>
      </Link>
    </div>
  )
}
