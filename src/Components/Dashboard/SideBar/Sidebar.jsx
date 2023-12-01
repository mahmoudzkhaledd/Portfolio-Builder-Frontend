"use client";

import { useContext, useState } from 'react';
import Button from '../../General/Button/Button';
import { data } from '../data';
import style from './style.module.css';
import { dashContext } from '@/hooks/state/dashboardState';
import { IconButton } from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
function BuildButton({ text, selected, icon, onClick, show }) {
  return <Button
    onClick={onClick}
    className={style.btn}
    fontSize={14}
    text={show ? text : null}
    verticalPadding={13}
    horizontalPadding={show ? 40 : 20}
    color={!selected ? "var(--secondary)" : "var(--secondary-select)"}
    textColor={!selected ? "var(--text-fade)" : "var(--text)"}
    flexDirection={!show ? "column" : "row"}

    icon={icon}
    justifyContent={!show ? "center" : null}
    borderRadius={7} />;
}

export default function SideBar() {
  const ctx = useContext(dashContext);
  const [show, setShow] = useState(false);
  let i = 0;
  return (
    <div className={style.mainBody} style={{ width: show ? "340px" : "100px" }}>

      <div style={{
        width: "100%",
        display: 'flex',
        flexDirection: show ? "row" : 'column',
        justifyContent: "end",
        alignItems: "center",
        color: "var(--text)"
      }}>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          style={{ color: "var(--text)" }}
          onClick={() => setShow(!show)}
          size="sm" >
          {
            show ? <ArrowBackIosNewRoundedIcon /> : <ArrowForwardIosRoundedIcon />
          }
        </IconButton>
      </div>
      {
        Object.values(data).map((v) => {
          return <BuildButton
            key={i++}
            text={v.text}
            hash={v.hash}
            show={show}
            icon={v.icon}
            selected={ctx.currentPage === v.text}
            onClick={() => ctx.setPage(v.text)}
          />
        })
      }
    </div>
  );
}

