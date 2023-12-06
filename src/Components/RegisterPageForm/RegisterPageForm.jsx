"use client";
import { useState } from 'react';
import Button from '@/Components/General/Button/Button'
import TextBox from '@/Components/General/TextBox/TextBox'
import Swal from 'sweetalert2';
import { register } from '@/Controllers/Login/LoginCtrl';
import { slice } from '@/hooks/Store/AppStore';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
function between(str, min, max) {
    return str.length >= min && str.length < max;
}
export default function RegisterPageForm() {
    const rout = useRouter();
    const disp = useDispatch();
    const [disabled, setDisabled] = useState(false);
    const handelClick = async (e) => {
        e.preventDefault();
        const obj = Object.fromEntries((new FormData(document.getElementById('frm-register'))).entries())
        if (!between(obj.email, 3, 32) || !between(obj.password, 8, 32) || !between(obj.firstName, 3, 32) || !between(obj.lastName, 3, 32) ) {
            Swal.fire({
                icon: "error",
                title: "Validation Error",
                text: "Please enter all data required !",
            });
            return;
        }
        setDisabled(true);
        const res = await register(obj.firstName, obj.lastName, obj.email, obj.password);
        setDisabled(false);
        if (res.message != null) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: res.message,
            });
            return;
        }
        if (!res.emailVerified) {
            disp(slice.actions.configureLogin(res.data));
            rout.push('/verify-email');
            return;
        }
        
        if(res.success){
            disp(slice.actions.configureLogin(res.data));
            rout.push('/');
            return;
        }
    };
    return (
        <form id='frm-register'>
            <TextBox
                name="firstName"
                disabled={disabled}
                maxLength={32}
                pattern=".{3,32}"
                minLength={3}
                placeholder="Firstname"
                type="text" />
            <TextBox
                name="lastName"
                maxLength={32}
                minLength={3}
                pattern=".{3,32}"
                disabled={disabled}
                placeholder="Lastname"
                type="text" />
            <TextBox
                name="email"
                pattern=".{4,32}"
                disabled={disabled}
                placeholder="Email"
                type="email" />
            <TextBox
                disabled={disabled}
                name="password"
                maxLength={32}
                minLength={8}
                pattern=".{8,32}"
                placeholder="Password"
                type="password" />
            <br />
            <br />
            <Button
                disabled={disabled}
                justifyContent="center"
                text="Register"
                loading={disabled}
                onClick={handelClick} />
        </form>
    )
}
