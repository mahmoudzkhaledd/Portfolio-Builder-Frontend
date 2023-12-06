import Image from 'next/image';
import style from './style.module.css';

import VerifyEmailFrom from '@/Components/VerifyEmail/MainForm/VerifyEmailFrom';

export default function page() {
    return (
        <div className={style.mainCont}>
            <div className={style.secCont}>
                <Image src="/images/email.png" width={200} height={200} alt='' />
                <br />
                <h3>Email Confirmation</h3> {"\n\n"}
                <p>6 digits email have been sent to your account, please enter the digits you recived </p>
                <VerifyEmailFrom />
            </div>
        </div>
    )
}
