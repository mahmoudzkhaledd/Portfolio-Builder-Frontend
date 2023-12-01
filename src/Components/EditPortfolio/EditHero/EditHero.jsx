import TextBox from '@/Components/General/TextBox/TextBox'

import style from './style.module.css';
import { useRef, useState } from 'react';
import Button from '@/Components/General/Button/Button';


export default function EditHero({ data, onClose }) {
    const [form, setFrom] = useState(Object.assign({}, data));
    const handelChange = (e, key, parentKey) => {
        if (parentKey != null) {
            form[parentKey][key] = e.target.value;

        } else {
            form[key] = e.target.value;
        }

        setFrom({ ...form });
    }
    const [imageLink, setImageLink] = useState({
        left: form.leftImage.link,
        right: form.rightImage.link,
    });
    const handelSave = () => {
        for (const x of Object.keys(form)) {
            data[x] = form[x];
        }
        onClose();
    };
    return (
        <>
            <br />
            <div className={style.mainCont}>
                <div>
                    <TextBox
                        value={form.headerTitle}
                        onChanged={(e) => handelChange(e, "headerTitle")}
                        label="Title"
                        placeholder="Header Title" />
                    <TextBox
                        onChanged={(e) => handelChange(e, "subTitle")}
                        value={form.subTitle}
                        label="Subtitle"
                        placeholder="Header Subtitle"
                        area={true} />
                </div>

                <div className={style.rowImage}>
                    <div>
                        <h4>Left Image</h4><br />
                        <img src={imageLink.left} alt='Image' className={style.roundImage} />
                        <TextBox
                            onChanged={(e) => handelChange(e, "link", 'leftImage')}
                            value={form.leftImage.link}
                            label="Subtitle"
                            placeholder="Header Subtitle"
                        />
                        <Button
                            onClick={() => {
                                imageLink.left = form.leftImage.link;
                                setImageLink({...imageLink})

                            }}
                            color="orange"
                            text="Try"
                            icon="fa-solid fa-circle-check"
                            justifyContent='center'
                            verticalPadding={5}
                            fontSize={16} />
                        <br />
                    </div>
                    <div>
                        <h4>Right Image</h4> <br />
                        <img src={imageLink.right} alt='Image' className={style.roundImage} />
                        <TextBox
                            onChanged={(e) => handelChange(e, "link", 'rightImage')}
                            value={form.rightImage.link}
                            label="Subtitle"
                            placeholder="Header Subtitle"
                        />
                        <Button
                            onClick={() => {
                                imageLink.right = form.rightImage.link;
                                setImageLink({...imageLink})
                            }}
                            color="orange"
                            text="Try"
                            icon="fa-solid fa-circle-check"
                            justifyContent='center'
                            verticalPadding={5}
                            fontSize={16} />
                        <br />
                    </div>

                </div>

            </div>
            <br />
            <Button
                onClick={handelSave}
                text="Save"
                justifyContent='center'
                verticalPadding={9}
                fontSize={16} />
        </>

    )
}
