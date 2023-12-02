import Button from '@/Components/General/Button/Button';
import style from './style.module.css';
import { useContext, useState } from 'react';
import { profileCtx } from '../Context/UserProfileContext';
import { updateUserPortfolio } from '@/Controllers/UserProfile/UserProfileCtrl';
import Swal from 'sweetalert2';
import { IconButton } from '@mui/material';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

import { useRouter } from 'next/navigation';

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
  const handelEditMode = () => {
    const currentUrl = window.location.pathname;
    console.log(currentUrl)
    router.replace(`${currentUrl}?editMode=false`, {
      query: {
        editMode: "false",
      }
    })

  };
  return (
    <div className={style.mainNavbarCont}>
      <h5>Edit Mode</h5>
      <div className={style.subCont}>
        {/* <Button
          disabled={disable}
          loading={disable}
          onClick={handelClick}
          borderColor="var(--text-fade)"
          text="Save"
          textColor="var(--text)"
          borderWidth={2}
          justifyContent="center"
          bordered={true}
          verticalPadding={5}
          borderRadius={20}
          color="transparent"
          width="fit-content" /> */}
        <IconButton onClick={handelEditMode} className='icon-ext'>
          <ClearRoundedIcon />
        </IconButton>
      </div>

    </div>
  )
}
