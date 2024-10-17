import CollapseCard from '@/Components/General/CollapseCard/CollapseCard';
import style from './style.module.css';
import TextBox from '@/Components/General/TextBox/TextBox';
import TableEdit from '@/Components/General/TableEdit/TableEdit';
import EditPageNavbar from '../Navbar/Navbar';
import Button from '@/Components/General/Button/Button';
import { useState } from 'react';
import { updateComponent } from '@/Controllers/EditPortfolio/EditPortfolioCtrl';
import { useParams } from 'next/navigation';
import Swal from 'sweetalert2'
function LeftImageCollapse({ image }) {
    const [img, setImg] = useState(image);

    const handelTest = (e) => {
        e.preventDefault();
        const value = new FormData(document.getElementById('submit-frm-image'));
        const obj = Object.fromEntries(value.entries());
        for (const key of Object.keys(obj)) {
            image[key] = obj[key];
        }
        setImg(obj);
    };
    return (
        <CollapseCard className={style.rightImageCollapse} title="Left Image">
            <img
                className={`circle-image ${style.image}`}
                src={img.link}
                alt=''
                width={img.width}
                height={img.height} />
            <br />
            <br />
            <form id='submit-frm-image' onSubmit={(e) => { e.preventDefault() }}>
                <TextBox initialValue={img.link} name="link" placeholder="link" label="Image link" />
                <TextBox initialValue={img.width} name="width" type="number" placeholder="width" label="Image width" />
                <TextBox initialValue={img.height} name="height" type="number" placeholder="height" label="Image height" />
                <Button onClick={handelTest} verticalPadding={8} text="Apply" justifyContent="center" width="fit-content" className={`icon-ext ${style.textBtn}`} />
            </form>

        </CollapseCard>
    );
}
export default function AboutMeEditor({ data }) {
    const tableHeader = [
        {
            text: "Icon",
            ref: "icon",
            type: "icon",
        },
        {
            text: "Title",
            ref: "title",
        },
        {
            text: "Subtitle",
            ref: "subTitle",
            maxLength: 50,
        },
    ];

    const [loading, setLoading] = useState(false);
    const [tableBody, setTableBody] = useState(data.settings.data.experiences);
    const [toEdit, setToEdit] = useState(null);
    const { id, compId } = useParams();


    const handelSaveNetwork = async () => {

        const mainInfoObj = Object.fromEntries((new FormData(document.getElementById('frm-main-info'))).entries());
        const imageInfoObj = Object.fromEntries((new FormData(document.getElementById('submit-frm-image'))).entries());
        const btnInfoObj = Object.fromEntries((new FormData(document.getElementById('from-btn'))).entries());
        for (const key of Object.keys(mainInfoObj)) {
            if (mainInfoObj[key] == "") {
                return;
            }
        }
        for (const key of Object.keys(imageInfoObj)) {
            if (imageInfoObj[key] == "") {
                return;
            }
        }
        // for (const key of Object.keys(btnInfoObj)) {
        //     if (btnInfoObj[key] == "") {
        //         return;
        //     }
        // }
        data['name'] = mainInfoObj['name'];
        data.settings.data['id'] = mainInfoObj['id'].trim().replaceAll('#',"").replaceAll(' ','');
        for (const key of Object.keys(mainInfoObj)) {
            if (key != 'name' && key != "id") {
                data.settings.data[key] = mainInfoObj[key];
            }
        }
        data.settings.data.experiences = tableBody;
        data.settings.data.image = imageInfoObj;
        data.settings.data.button = btnInfoObj;
        setLoading(true);
        const res = await updateComponent(id, compId, data);
        setLoading(false);
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
    const handelEdit = (item) => {
        const idx = tableBody.indexOf(item);
        if (idx == -1 || toEdit != null) return;
        setToEdit(idx);
        for (const x of tableHeader) {
            const inp = document.getElementById(x.ref);
            if (inp != null) {
                inp.value = tableBody[idx][x.ref];
            }
        }
    };
    const handelAddItem = (e) => {
        e.preventDefault();
        const val = new FormData(document.getElementById('frm-submit'));
        const obj = Object.fromEntries(val.entries());
        for (const key of Object.keys(obj)) {
            if (obj[key] == "") {
                return;
            }
        }
        tableBody.push(obj)
        setTableBody([...tableBody]);
        for (const x of tableHeader) {
            const inp = document.getElementById(x.ref);
            if (inp != null) {
                inp.value = "";
            }
        }
    };
    const handelSaveItem = (event) => {
        event.preventDefault();
        const val = new FormData(document.getElementById('frm-submit'));
        const obj = Object.fromEntries(val.entries());

        for (const key of Object.keys(obj)) {
            if (obj[key] == "") {
                return;
            }
        }
        for (const key of Object.keys(obj)) {

            tableBody[toEdit][key] = obj[key];
        }

        setTableBody([...tableBody]);
        setToEdit(null);
        for (const x of tableHeader) {
            const inp = document.getElementById(x.ref);
            if (inp != null) {
                inp.value = "";
            }
        }
    };

    let i = 0;
    return (
        <div className={style.mainCont}>
            <EditPageNavbar onClick={handelSaveNetwork} loading={loading} />
            <div className={style.mainGrid}>

                <div className={style.bottomSide}>
                    <CollapseCard title={toEdit == null ? "Add New Item" : "Edit Item"}>
                        <form id='frm-submit' onSubmit={(e) => { e.preventDefault() }}>
                            {
                                tableHeader.map(e => {
                                    return <TextBox
                                        id={e.ref}
                                        key={i++}
                                        name={e.ref}
                                        placeholder={e.text}
                                        label={e.text}
                                        maxLength={e.maxLength}
                                    />;
                                })
                            }
                            <Button
                                onClick={toEdit == null ? handelAddItem : handelSaveItem}
                                btnStyle={{ marginLeft: "auto" }}
                                text={toEdit == null ? "Add" : "Edit"}
                                width="fit-content"
                                className="icon-ext"
                                justifyContent="center" />
                        </form>
                    </CollapseCard>

                    <CollapseCard title="Main Information">
                        <form id='frm-main-info' onSubmit={(e) => { e.preventDefault() }}>
                            <TextBox
                                name="id"
                                initialValue={data.settings.data.id}
                                placeholder="Component Id"
                                label="Component Id"
                                maxLength={30} />
                            <TextBox
                                name="name"
                                initialValue={data.name}
                                placeholder="Name"
                                label="Component name"
                                maxLength={30} />
                            <TextBox
                                name="title"
                                initialValue={data.settings.data.title}
                                placeholder="Title"
                                label="Title"
                                maxLength={30} />
                            <TextBox
                                name="subTitle"
                                initialValue={data.settings.data.subTitle}
                                placeholder="Subtitle"
                                label="Subtitle"
                                area={true} />

                            <TextBox
                                name="description"
                                initialValue={data.settings.data.description}
                                placeholder="Description"
                                label="Description"
                                area={true}
                            />
                        </form>

                    </CollapseCard>
                </div>
                <div className={style.bottomSide}>
                    <LeftImageCollapse image={data.settings.data.image} />
                    <CollapseCard title="Cards">
                        <TableEdit toEdit={toEdit} handelEdit={handelEdit} hover={true} header={tableHeader} body={tableBody} setItems={setTableBody} />
                    </CollapseCard>
                    <CollapseCard title="Button Info">
                        <form id='from-btn' onSubmit={(e) => { e.preventDefault() }}>
                            <TextBox
                                name="text"
                                initialValue={data.settings.data.button.text}
                                placeholder="Button Text"
                                label="Button Text"
                                maxLength={30} />
                            <TextBox
                                name="link"
                                initialValue={data.settings.data.button.link}
                                placeholder="On click link"
                                label="On click link"
                            />
                        </form>
                    </CollapseCard>
                </div>
            </div>
        </div>
    )
}
