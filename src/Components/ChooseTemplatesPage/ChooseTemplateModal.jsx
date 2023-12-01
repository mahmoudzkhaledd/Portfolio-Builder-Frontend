"use client";
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import  modalStyle from './modal.module.css';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../General/Button/Button';
import { useRef, useState } from 'react';
import TextBox from '../General/TextBox/TextBox';
import Swal from 'sweetalert2';
import { addTemplateToUser } from '@/Controllers/TemplatesPage/TemplatesPageCtrl';
import { useRouter } from 'next/navigation';
import style from './style.module.css';



export default function ChooseTemplateModel({ template, handleClose }) {
    const [loading, setLoading] = useState(false);
    const [errorText, setError] = useState(null);
    const dispName = useRef();
    const rout = useRouter();
    
    const handelAdd = async () => {
        const name = dispName.current.value;
        if (name == "") {
            setError("Please enter portfolio display name");
            return;
        }
        setError(null);
        setLoading(true);
        const res = await addTemplateToUser(template._id,name);
        if(res == null){
            handleClose();
            Swal.fire({
                title: "Error",
                text: "Something went wrong, please try again later!",
                icon: 'info',
            });
            return;
        }

        rout.replace(`/dashboard/${res._id}`);
        setLoading(false);
    }
    return (
        <Modal
            open={true}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div onClick={handleClose} className={modalStyle.overlay}>
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    className={modalStyle.modalContainer}
                >
                    <img className={modalStyle.modalImage} src={template.imageUrl} alt='/' />
                    <div className={modalStyle.modalRight}>
                        <IconButton
                            className={modalStyle.closeBtn}
                            aria-label="bookmark Bahamas Islands"
                            variant="plain"
                            color="neutral"
                            size="sm"
                            onClick={handleClose}
                            sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                        >
                            <CloseIcon />
                        </IconButton>

                        <div className={modalStyle.content}>
                            <h3>{template.name}</h3>
                            <br />
                            {template.describtion}
                            <br /><br />
                            <TextBox maxLength={32} reference={dispName} placeholder="Diaplay name" />
                            { errorText && <span className={style.error}>{errorText}</span>}
                        </div>

                        <div className={modalStyle.btnContainer}>
                            <Button
                                onClick={handelAdd}
                                loading={loading}
                                disabled={loading}
                                fontSize={14}
                                text="Yes, Add it" verticalPadding={9} justifyContent="center" />
                            <Button
                                fontSize={14}

                                bordered={false}
                                onClick={handleClose}
                                color="white" textColor="black" text="No, Thanks" verticalPadding={9} justifyContent="center" />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
