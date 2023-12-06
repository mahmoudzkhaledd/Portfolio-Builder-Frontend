import Button from '@/Components/General/Button/Button';
import style from './style.module.css';
import { useContext, useState } from 'react';
import { profileCtx } from '../Context/UserProfileContext';
import { updateUserPortfolio } from '@/Controllers/UserProfile/UserProfileCtrl';
import Swal from 'sweetalert2';
import { IconButton } from '@mui/material';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function OwnerNavbar({ portId }) {
  const ctx = useContext(profileCtx)
  const [disable, setDisaple] = useState(false);
  const router = useRouter();

  const handelClick = async () => {
    setDisaple(true);
    const res = await updateUserPortfolio(ctx.components, portId);
    setDisaple(false);
    if (res) {
      Swal.fire({
        title: "Succeful Operation",
        text: "Your profile has been succefully updated",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Failed Operation",
        text: "Unknown error occured, please try again later.",
        icon: 'error',
      });
    }
  };

  return (
    <div className={style.mainNavbarCont}>
      <h5>Edit Mode</h5>
      <div className={style.subCont}>
        <Link href={`${window.location.pathname}?editMode=false`} target="_blank" rel="noopener noreferrer">
          <IconButton className='icon-ext'>
            <VerifiedUserRoundedIcon />
          </IconButton>
        </Link>
      </div>

    </div>
  )
}
