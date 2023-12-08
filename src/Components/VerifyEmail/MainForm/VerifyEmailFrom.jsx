"use client";
import Button from '@/Components/General/Button/Button';
import style from './style.module.css';
import TextBox from '@/Components/General/TextBox/TextBox';
import { useRef, useState } from 'react';
import verifyEmailCtrl from '@/Controllers/VerifyEmail/VerifyEmail';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux';
import { slice } from "@/hooks/Store/AppStore";

export default function VerifyEmailFrom() {
    const [disabled, setDisabled] = useState(false);
    const cde = useRef();
    const disp = useDispatch();
    const rout = useRouter();

    const handelClick = async () => {
        const code = cde.current.value;
        if (code == "" || code.length != 6) {
            Swal.fire({
                title: "Validation Error",
                text: "The code must be 6 digits",
                icon: 'error',
            });
            return;
        }
        setDisabled(true);
        const res = await verifyEmailCtrl(code);
        if (res.success) {
            rout.push('/');
            return;
        }
        if (res.logOut) {
            disp(slice.actions.logOut());
            rout.push('/login');
        }
        if (res.message != null) {
            Swal.fire({
                title: "Confirmation Error",
                text: res.message,
                icon: 'error',
            });
        }

        setDisabled(false);
    }

    return (
        <div style={{ width: "100%" }}>
            <TextBox
                placeholder="XXXXXX"
                disabled={disabled}
                reference={cde}
                minLength={0} maxLength={6} className={style.textField} />
            <div className={style.warning} >
                <i className="fa-solid fa-circle-exclamation rotation" />
                <span style={{ color: "white", marginLeft: "10px" }}>If you don't get the confirmation email, please check your spam.</span>
            </div>
            <br/>
            <Button
                onClick={handelClick}
                disabled={disabled}
                loading={disabled}
                text="Verify Email" justifyContent="center" />
        </div>
    )
}
