import TextBox from '@/Components/General/TextBox/TextBox';
import style from './style.module.css';
import { useState } from 'react';

export default function ProjectsSectionEditor({ data, onClose }) {
    const [texts, setTexts] = useState({
        title: data.title,
        subTitle: data.subTitle,
    });
    const handelChange = (e, key) => {
        texts[key] = e.target.value;
        setTexts({ ...texts });
    }
    return (
        <div className={style.mainCont}>
            <br />
            <div>
                <TextBox
                    onChanged={(e) => handelChange(e, "title")}
                    value={texts.title}
                    placeholder="title"
                    label="Section Title" />

                <TextBox
                    onChanged={(e) => handelChange(e, "subTitle")}
                    value={texts.subTitle}
                    placeholder="subtitle"
                    label="Section Subtitle" />
            </div>

        </div>
    )
}
