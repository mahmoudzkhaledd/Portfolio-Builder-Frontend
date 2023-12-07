import CollapseCard from '@/Components/General/CollapseCard/CollapseCard';
import style from './style.module.css';
import TextBox from '@/Components/General/TextBox/TextBox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TableEdit from '@/Components/General/TableEdit/TableEdit';
import EditPageNavbar from '../Navbar/Navbar';
import Button from '@/Components/General/Button/Button';
import { useEffect, useState } from 'react';
import { updateComponent } from '@/Controllers/EditPortfolio/EditPortfolioCtrl';
import { useParams } from 'next/navigation';
import Swal from 'sweetalert2';
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
export default function EditNavbarForm({ data }) {
    const tableHeader = [
        {
            text: "Name",
            ref: "title",
        },
        {
            text: "Element To",
            ref: "to",
        }
    ];

    const [loading, setLoading] = useState(false);
    const [tableBody, setTableBody] = useState(data.settings.data.items);
    const [toEdit, setToEdit] = useState(null);
    const [checked, setChecked] = useState(data.settings.data.stickTop || false);
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

        for (const key of Object.keys(obj)) {
            if (key != 'name') {
                data.settings.data[key] = obj[key];
            }
        }
        data.settings.data.stickTop = checked;
        data.settings.data.items = tableBody;

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
        obj.to = `#${obj.to.trim().replaceAll("#", "").replaceAll(' ', "")}`;
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
            obj[key] = obj[key].trim().replaceAll("#", "").replaceAll(' ', "");
            if(key == 'to'){
                obj[key] = `#${obj[key]}`;
            }
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
                            <FormControlLabel
                                control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />}
                                label="Stick at top" />
                            <TextBox
                                name="name"
                                initialValue={data.name}
                                placeholder="Name"
                                label="Component name"
                                maxLength={30} />

                        </form>

                    </CollapseCard>
                </div>
                <div>
                    <CollapseCard title="Navbar Items">
                        <TableEdit toEdit={toEdit} handelEdit={handelEdit} hover={true} header={tableHeader} body={tableBody} setItems={setTableBody} />
                    </CollapseCard>
                </div>
            </div>
        </div>
    )
}
