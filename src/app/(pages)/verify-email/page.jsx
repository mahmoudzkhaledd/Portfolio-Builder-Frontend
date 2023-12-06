import Image from 'next/image';
import style from './style.module.css';

import VerifyEmailFrom from '@/Components/VerifyEmail/MainForm/VerifyEmailFrom';

export default function page() {
    return (
        <div className={style.mainCont}>
            <div className={style.secCont}>
                <Image src="/images/email.png" width={160} height={160} alt='' />
                <br />
                <h4 style={{textAlign:'center'}}>Email Confirmation</h4> {"\n\n"}
                <p style={{textAlign:'center'}}>6 digits email have been sent to your account, please enter the digits you recived </p>
                <VerifyEmailFrom />
            </div>
        </div>
    )
}
