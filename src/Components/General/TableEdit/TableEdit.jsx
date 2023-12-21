import style from './style.module.css';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import Link from 'next/link';




export default function TableEdit({ header, body, setItems, hover, handelEdit, toEdit }) {

    const items = body;


    const handelDelete = (item) => {
        const idx = items.indexOf(item);
        if (idx == -1 || toEdit != null) return;
        items.splice(idx, 1);
        setItems([...items]);
    };
    const handelMove = (item, up) => {
        const idx = items.indexOf(item);
        if (idx == -1 || (up && idx == 0) || (!up && idx == items.length - 1)) return;
        if (up) {
            [items[idx], items[idx - 1]] = [items[idx - 1], items[idx]];
        } else {
            [items[idx], items[idx + 1]] = [items[idx + 1], items[idx]];
        }
        setItems([...items]);
    };


    let i = 0;
    return (<TableContainer component={Paper} >
        <Table aria-label="a dense table" className={style.table}>
            <TableHead className={style.tableHead} >
                <TableRow className={style.tableRow}>
                    {
                        header.map(e => <TableCell className={style.tableCell} key={i++}>{e.text}</TableCell>)
                    }
                    <TableCell className={style.tableCell} >
                        Delete
                    </TableCell>
                    <TableCell className={style.tableCell} align='center'>
                        Move
                    </TableCell>
                    <TableCell className={style.tableCell} align='center'>
                        Edit
                    </TableCell>
                </TableRow>
            </TableHead>
            <tbody>
                {
                    items.map(e => {
                        return (
                            <TableRow key={i++} className={`${style.tableRow} ${hover ? style.hover : ""}`}>
                                {
                                    header.map(c =>
                                        <TableCell className={`${c.large? style.large : ""} ${style.tableCell}`} key={i++}>
                                            {
                                                c.replacement != null ?
                                                    <Link className='link' href={e[c.ref]} target="_blank" rel="noopener noreferrer">
                                                        {c.replacement}
                                                    </Link> : c.type == "icon" ? <i className={`${e[c.ref]} icon`}></i> : e[c.ref]

                                            }

                                        </TableCell>
                                    )
                                }
                                <TableCell>
                                    <IconButton className='icon-ext' onClick={() => handelDelete(e)}>
                                        <ClearRoundedIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align='center'>
                                    <IconButton className='icon-ext' onClick={() => handelMove(e, true)}>
                                        <ArrowUpwardRoundedIcon />
                                    </IconButton>

                                    <IconButton className='icon-ext' onClick={() => handelMove(e, false)}>
                                        <ArrowDownwardRoundedIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align='center'>
                                    <IconButton className='icon-ext' onClick={() => handelEdit(e)}>
                                        <AutoFixHighRoundedIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        );
                    })
                }
            </tbody>
        </Table>
    </TableContainer>
    )
}
