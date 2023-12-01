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
                image="/images/eye.png"
            />
            <Card
                title={"Total Messages"}
                data={port.totalMessages}
                image="/images/email.png"
            />
            <Card
                title={"Portfolio Availability"}
                data={port.online ? "Online" : "Offline"}
                image="/images/availability.png"
            />
        </div>
    )
}
