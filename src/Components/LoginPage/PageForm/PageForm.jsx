"use client";
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/Components/General/Button/Button'
import TextBox from '@/Components/General/TextBox/TextBox'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import {loginCtrl} from '@/Controllers/Login/LoginCtrl';
import { slice } from '@/hooks/Store/AppStore';
export default function LoginPageForm() {
    const email = useRef();
    const pass = useRef();

    const rout = useRouter();
    const disp = useDispatch();
    const [disabled, setDisabled] = useState(false)
    const [ee, setEm] = useState('sss@mohmal.in');
    const [pa, setPa] = useState('12345678');
    const handelClick = async (e) => {
        e.preventDefault();
        const em = email.current.value;
        const pas = pass.current.value;
        if (em == "" || pas == "") {
            Swal.fire({
                icon: "error",
                title: "Validation Error",
                text: "Please enter all data required !",
            });
            return;
        }
        setDisabled(true);
        const res = await loginCtrl(em, pas);
        setDisabled(false);
        if (!res.emailVerified) {
            disp(slice.actions.configureLogin(res.data));
            rout.push('/verify-email');
            return;
        }
        if (res.message != null) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: res.message,
            });
        }
        if(res.success){
            disp(slice.actions.configureLogin(res.data));
            rout.push('/');
            return;
        }
    };

    return (
        <form>
            <TextBox
                value={ee}
                onChanged={(e) => setEm(e.value)}
                reference={email} disabled={disabled} placeholder="Email" type="email" />
            <TextBox
                value={pa}
                onChanged={(e) => setPa(e.value)}
                reference={pass} disabled={disabled} placeholder="Password" type="password" />
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
