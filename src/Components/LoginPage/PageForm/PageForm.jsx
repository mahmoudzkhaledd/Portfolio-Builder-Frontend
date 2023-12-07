"use client";
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/Components/General/Button/Button'
import TextBox from '@/Components/General/TextBox/TextBox'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { loginCtrl } from '@/Controllers/Login/LoginCtrl';
import { slice } from '@/hooks/Store/AppStore';
function between(str, min, max) {
    return str.length >= min && str.length < max;
}
export default function LoginPageForm() {


    const rout = useRouter();
    const disp = useDispatch();
    const [disabled, setDisabled] = useState(false)

    const handelClick = async (e) => {
        e.preventDefault();
        const obj = Object.fromEntries(new FormData(document.getElementById('frm-login')));
        if (obj.email == null || obj.password == null || !between(obj.email, 3, 32) || !between(obj.password, 8, 32)) {
            Swal.fire({
                icon: "error",
                title: "Validation Error",
                text: "Please enter all data required !",
            });
            return;
        }
        setDisabled(true);
        const res = await loginCtrl(obj.email, obj.password);
        setDisabled(false);
        if (!res.emailVerified) {
            disp(slice.actions.configureLogin(res.data));
            rout.replace('/verify-email');
            return;
        }
        if (res.message != null) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: res.message,
            });
        }
        if (res.success) {
            disp(slice.actions.configureLogin(res.data));
            rout.replace('/');
            return;
        }
    };

    return (
        <form id="frm-login">
            <TextBox
                name="email"
                disabled={disabled} placeholder="Email" type="email" />
            <TextBox
                name="password"
                disabled={disabled} placeholder="Password" type="password" />
            <br />
            <br />
            <Button
                disabled={disabled}
                justifyContent="center"
                text="Login"
                loading={disabled}
                onClick={handelClick} />
        </form>
    )
}
