import CustomModal from '@/Components/Modal/CustomModal';
import TextBox from '@/Components/General/TextBox/TextBox';
import Button from '@/Components/General/Button/Button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import style from './style.module.css';
import { addUserPages } from '@/Controllers/Pages/pagesCtrl';
import Swal from 'sweetalert2';

export default function AddPageModal({ onClose }) {
    const [loading, setLoading] = useState();
    const rout = useRouter();
    const handelAdd = async (e) => {
        e.preventDefault();
        const name = document.getElementById('text-name').value;
        const url = document.getElementById('text-url').value;
        if (name == null || name.length == 0) {
            Swal.fire({
                title: "Validation Error",
                text: "Please Enter Page Name",
                icon: "error",
            })
            return;
        }
        setLoading(true);
        const res = await addUserPages(name,url);
        setLoading(false);
        if (res != null) {
            rout.push(`/page/${res._id}`);
        }
    };
    return (
        <CustomModal onClose={onClose} title="Add New Page">
            <form id='frm-page' onSubmit={handelAdd}>
                <TextBox id='text-name' disabled={loading} name="name" placeHolder="Page name" label="Name" />
                <TextBox id='text-url' disabled={loading} name="image-url" placeHolder="Url" label="Image Url" />
                <Button onClick={handelAdd} className={`icon-ext ${style.btn}`} justifyContent="center" width="fit-content" text="Add" loading={loading} disabled={loading} />
            </form>
        </CustomModal>
    )
}
