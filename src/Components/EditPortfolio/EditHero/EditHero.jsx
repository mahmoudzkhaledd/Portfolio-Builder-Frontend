import { useState } from 'react';
import EditPageNavbar from '../Navbar/Navbar';
import style from './style.module.css';
import CollapseCard from '@/Components/General/CollapseCard/CollapseCard';
import TextBox from '@/Components/General/TextBox/TextBox';
import Button from '@/Components/General/Button/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useParams } from 'next/navigation';
import { updateComponent } from '@/Controllers/EditPortfolio/EditPortfolioCtrl';
import Swal from 'sweetalert2';
function RightImageCollapse({ rightImage }) {
    const [img, setImg] = useState(rightImage);
    const [chk, setChk] = useState({
        floating: rightImage.floating,
        animation: rightImage.animation,
    });
    const handelTest = (e) => {
        e.preventDefault();
        const value = new FormData(document.getElementById('submit-frm-right-image'));
        const obj = Object.fromEntries(value.entries());
        obj.floating = chk.floating;
        obj.animation = chk.animation;
        for (const key of Object.keys(obj)) {
            rightImage[key] = obj[key];
        }
        setImg(obj);
    };
    return (
        <CollapseCard className={style.rightImageCollapse} title="Right Image">
            <img
                className={`circle-image ${style.rightImage} ${img.floating ? "floatingImage" : ""}`}
                src={img.link}
                alt=''
                width={img.width}
                height={img.height} />

            <form id='submit-frm-right-image'>
                <FormControlLabel
                    control={<Checkbox
                        checked={chk.floating}
                        onChange={() => { chk.floating = !chk.floating; setChk({ ...chk }); }} />}
                    label="Floating" name='floating' />
                <FormControlLabel
                    control={<Checkbox />}
                    label="Animation" />
                <br />
                <br />
                <TextBox initialValue={img.link} name="link" placeholder="link" label="Image link" />
                <TextBox initialValue={img.width} name="width" type="number" placeholder="width" label="Image width" />
                <TextBox initialValue={img.height} name="height" type="number" placeholder="height" label="Image height" />
                <Button onClick={handelTest} verticalPadding={8} text="Apply" justifyContent="center" width="fit-content" className={`icon-ext ${style.textBtn}`} />
            </form>

        </CollapseCard>
    );
}
function LeftImageCollapse({ leftImage }) {
    const [img, setImg] = useState(leftImage);

    const handelTest = (e) => {
        e.preventDefault();
        const value = new FormData(document.getElementById('submit-frm-left-image'));
        const obj = Object.fromEntries(value.entries());
        for (const key of Object.keys(obj)) {
            leftImage[key] = obj[key];
        }
        setImg(obj);
    };
    return (
        <CollapseCard className={style.rightImageCollapse} title="Left Image">
            <img
                className={`circle-image ${style.rightImage}`}
                src={img.link}
                alt=''
                width={img.width}
                height={img.height} />
            <br />
            <br />
            <form id='submit-frm-left-image'>
                <TextBox initialValue={img.link} name="link" placeholder="link" label="Image link" />
                <TextBox initialValue={img.width} name="width" type="number" placeholder="width" label="Image width" />
                <TextBox initialValue={img.height} name="height" type="number" placeholder="height" label="Image height" />
                <Button onClick={handelTest} verticalPadding={8} text="Apply" justifyContent="center" width="fit-content" className={`icon-ext ${style.textBtn}`} />
            </form>

        </CollapseCard>
    );
}

export default function EditHero({ data }) {
    const editedData = data;
    const { id, compId } = useParams();

    const handelSave = async () => {
        const value = new FormData(document.getElementById('main-info-frm'));
        const obj = Object.fromEntries(value.entries());
        data['name'] = obj['name'];
        for (const key of Object.keys(obj)) {
            if (obj[key] == "") {
                return;
            }

        }
        for (const key of Object.keys(obj)) {
            if (key != 'name')
                data.settings.data[key] = obj[key];
        }

        const res = await updateComponent(id, compId, data);
        if (res) {
            Swal.fire({
                title: "Successful Operation",
                text: "Component Updated Succefully",
                icon: 'success'
            })
        } else {
            Swal.fire({
                title: "Failed Operation",
                text: "Unknown error occured, please try again !",
                icon: 'error',
            })
        }
    };

    return (
        <div className={style.mainCont}>
            <EditPageNavbar onClick={handelSave} />
            <div className={style.mainGrid}>
                <div className={style.leftSide}>
                    <RightImageCollapse rightImage={editedData.settings.data.rightImage} />
                    <LeftImageCollapse leftImage={editedData.settings.data.leftImage} />
                </div>
                <div>
                    <CollapseCard title="Main Information">
                        <form id='main-info-frm' onSubmit={(e) => e.preventDefault()}>
                            <TextBox
                                name="name"
                                initialValue={data.name}
                                placeholder="Name"
                                label="Component name"
                                maxLength={30} />
                            <TextBox name="headerTitle" label="Title" placeholder="Title" initialValue={data.settings.data.headerTitle} />
                            <TextBox name="subTitle" label="Sub Title" placeholder="Sub Title" area={true} initialValue={data.settings.data.subTitle} />
                        </form>
                    </CollapseCard>
                </div>
            </div>
        </div >
    )
}
