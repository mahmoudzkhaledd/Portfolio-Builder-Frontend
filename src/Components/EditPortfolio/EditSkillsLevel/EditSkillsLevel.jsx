import CollapseCard from '@/Components/General/CollapseCard/CollapseCard';
import style from './style.module.css';
import TextBox from '@/Components/General/TextBox/TextBox';
import TableEdit from '@/Components/General/TableEdit/TableEdit';
import EditPageNavbar from '../Navbar/Navbar';
import Button from '@/Components/General/Button/Button';
import { useEffect, useState } from 'react';
import { updateComponent } from '@/Controllers/EditPortfolio/EditPortfolioCtrl';
import { useParams } from 'next/navigation';
import Swal from 'sweetalert2'
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

function clear(tableHeader) {
    for (const x of tableHeader) {
        const inp = document.getElementById(x.ref);
        if (inp != null) {
            if (x.textType == "number") {
                inp.value = "0";
            } else {
                inp.value = "";
            }
        }
    }
}



export default function EditSkillsLevel({ data }) {
    const tableHeader = [
        {
            text: "Title",
            ref: "title",

        },
        {
            text: "Progress",
            ref: "progress",
            textType: "number",
        },
    ];

    const [loading, setLoading] = useState(false);
    const [tableBody, setTableBody] = useState(data.settings.data.skills);
    const [toEdit, setToEdit] = useState(null);
    const { id, compId } = useParams();


    const handelSaveNetwork = async () => {
        const val = new FormData(document.getElementById('frm-main-info'));
        const obj = Object.fromEntries(val.entries());
        for (const key of Object.keys(obj)) {
            if (obj[key] == "") {
                return;
            }
        }
        data['name'] = obj['name'];
        data.settings.data['id'] = obj['id'].trim().replaceAll('#', "").replaceAll(' ', '');
        for (const key of Object.keys(obj)) {
            if (key != 'name' && key != 'id') {
                data.settings.data[key] = obj[key];
            }
        }
        data.settings.data.skills = tableBody;
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
        for (const val of tableHeader) {
            if (obj[val.ref] == "" || (val.textType == 'number' && !isNumeric(obj[val.ref]) || (val.textType == 'number' && Number(obj[val.ref]) > 100))) {
                return;
            }
        }
        tableBody.push(obj)
        setTableBody([...tableBody]);
        clear(tableHeader);
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
        clear(tableHeader);
    };
    let i = 0;
    return (
        <div className={style.mainCont}>
            <EditPageNavbar onClick={handelSaveNetwork} loading={loading} />
            <div className={style.mainGrid}>

                <div className={style.bottomSide}>
                    <CollapseCard title={toEdit == null ? "Add New Item" : "Edit Item"}>
                        <form id='frm-submit'>
                            {
                                tableHeader.map(e => {
                                    return <TextBox
                                        id={e.ref}
                                        key={i++}
                                        name={e.ref}
                                        placeholder={e.text}
                                        label={e.text}
                                        type={e.textType || ""}
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
                        <form id='frm-main-info'>
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
                                area={true}
                                maxLength={300} />
                        </form>

                    </CollapseCard>
                </div>
                <div>
                    <CollapseCard title="Progress">
                        <TableEdit toEdit={toEdit} handelEdit={handelEdit} hover={true} header={tableHeader} body={tableBody} setItems={setTableBody} />
                    </CollapseCard>
                </div>
            </div>
        </div>
    )
}
