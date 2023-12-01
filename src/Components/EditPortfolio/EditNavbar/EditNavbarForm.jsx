import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { useRef, useState } from 'react';

import TextBox from '@/Components/General/TextBox/TextBox';
import Button from '@/Components/General/Button/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
export default function EditNavbarForm({ data, onClose }) {
    const [items, setItems] = useState({
        data: Object.assign([], data.items),
    });
    const to = useRef();
    const title = useRef();

    const [editIdx, setEditIdx] = useState(-1);

    const handelDelete = (element) => {
        if (editIdx != -1) return;
        items.data.splice(items.data.indexOf(element), 1);
        setItems({
            data: items.data,
        });
    };
    const handelMoveElement = (element, up) => {
        if (editIdx != -1) return;
        const idx = items.data.indexOf(element);
        const size = items.data.length;
        if (up && idx == 0 || !up && idx == size - 1) return;
        if (up) {
            [items.data[idx], items.data[idx - 1]] = [items.data[idx - 1], items.data[idx]];
        } else {
            [items.data[idx], items.data[idx + 1]] = [items.data[idx + 1], items.data[idx]];
        }
        setItems({
            data: items.data,
        });
    };
    const handelSave = () => {
        data.items = [];
        data.items.push(...items.data);
        onClose();
    };
    const handelAdd = () => {
        let eleTo = to.current.value;
        const eleTitle = title.current.value;
        if(eleTo == null || eleTitle == null || eleTitle == "" || eleTo == ""){
            return;
        }
        eleTo= eleTo.replaceAll("#",'');
        eleTo = `#${eleTo}`;

        items.data.push({
            to:eleTo,
            title:eleTitle,

        });
        setItems({
            data: items.data,
        });
    };  
    let i = 0;

    return (
        <div>
            <TableContainer component={Paper} style={{ boxShadow: "none" }}>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Component To</TableCell>

                            <TableCell align='center'>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                            <TableCell align='center'>Move</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            items.data && items.data.map((e) => {
                                let idx = i;
                                if (idx == editIdx) {
                                    return <Edit key={i++} closeEdit={() => setEditIdx(-1)} index={idx} data={e} />;
                                }
                                return (
                                    <TableRow key={i++}>
                                        <TableCell>{i + 1}</TableCell>
                                        <TableCell>{e.title}</TableCell>
                                        <TableCell>{e.to}</TableCell>

                                        <TableCell align='center'>
                                            <IconButton onClick={() => setEditIdx(idx)}>
                                                <AutoAwesomeRoundedIcon />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell align='center'>
                                            <IconButton onClick={() => handelDelete(e)}>
                                                <ClearRoundedIcon />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell align='center'>
                                            <IconButton onClick={() => handelMoveElement(e, true)}>
                                                <ArrowUpwardRoundedIcon />
                                            </IconButton>
                                            <IconButton onClick={() => handelMoveElement(e, false)}>
                                                <ArrowDownwardRoundedIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        }
                        <TableRow>
                            <TableCell>+</TableCell>
                            <TableCell><TextBox reference={title} placeholder="Title" /> </TableCell>
                            <TableCell><TextBox reference={to} placeholder="To" /> </TableCell>
                            <TableCell align='center'> </TableCell>
                            <TableCell align='center'>
                                <IconButton onClick={handelAdd}>
                                    <AddRoundedIcon />
                                </IconButton>
                            </TableCell>
                            <TableCell align='center'> </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <Button onClick={handelSave} text="Save" justifyContent="center" verticalPadding={10} />
        </div>
    )
}

function Edit({ data, index, closeEdit }) {
    const [values, setValues] = useState({
        title: data.title,
        to: data.to,
    });
    const handleInputChange = (event, key) => {
        values[key] = event.target.value;
        setValues({ ...values })
    }
    const handelSave = () => {
        data.title = values.title;
        data.to = values.to;
        closeEdit();
    };
    return (
        <TableRow>
            <TableCell>{index + 1}</TableCell>


            <TableCell><TextBox value={values.title} onChanged={(e) => handleInputChange(e, "title")} /> </TableCell>
            <TableCell><TextBox value={values.to} onChanged={(e) => handleInputChange(e, "to")} /> </TableCell>


            <TableCell align='center'>
                <IconButton onClick={handelSave}>
                    <DoneRoundedIcon />
                </IconButton>
            </TableCell>
            <TableCell align='center'>
                <IconButton onClick={closeEdit}>
                    <ClearRoundedIcon />
                </IconButton>
            </TableCell>
            <TableCell align='center'> </TableCell>
        </TableRow>
    );
}