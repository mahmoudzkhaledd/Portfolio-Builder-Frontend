import Button from '@/Components/General/Button/Button';
import style from './style.module.css';
import { useContext, useState } from 'react';
import { profileCtx } from '../Context/UserProfileContext';
import { updateUserPortfolio } from '@/Controllers/UserProfile/UserProfileCtrl';
import Swal from 'sweetalert2';


export default function OwnerNavbar({ portId }) {
  const ctx = useContext(profileCtx)
  const [disable, setDisaple] = useState(false);

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
      <Button
        disabled={disable}
        loading={disable}
        onClick={handelClick}
        borderColor="white"
        text="Save"
        borderWidth={2}
        justifyContent="center"
        bordered={true}
        verticalPadding={5}
        borderRadius={20}
        color="transparent"
        width="fit-content" />
    </div>
  )
}
