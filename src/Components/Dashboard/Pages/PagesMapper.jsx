"use client";
import DashboardPage from "./Dashboard/Dashboard";
import { data } from "../data";
import { useContext } from "react";
import { dashContext } from "@/hooks/state/dashboardState";
import ShareTemplate from "./ShareTemplate/ShareTemplate";

export default function DashPagesMapper() {
    const page = useContext(dashContext).currentPage;
    
    
    if (page === data.dashboard.text) {
        return <DashboardPage />;
    }

    if (page === data.shareTemplate.text) {
        return <ShareTemplate />;
    }
    return <></>
}
