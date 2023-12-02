"use client";
import style from './style.module.css';

import { useContext } from "react";
import Card from "../../Card/Card";
import { dashContext } from "@/hooks/state/dashboardState";

export default function DashboardPage() {
    const port = useContext(dashContext).port;

    return (
        <div className={style.dashCont}>
            <Card
                title={"Total Views"}
                data={port.totalViews}
                image="fa-solid fa-display"
            />
            <Card
                title={"Total Messages"}
                data={port.totalMessages}
                image="fa-regular fa-comment"
            />
            <Card
                title={"Portfolio Availability"}
                data={port.online ? "Online" : "Offline"}
                image={`${port.online ? "fa-solid fa-globe" : "fa-solid fa-eye-slash"}`}
            />
        </div>
    )
}
