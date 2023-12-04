"use client";
import DashboardPage from "./Dashboard/Dashboard";
import { data } from "../data";
import { useContext } from "react";
import { dashContext } from "@/hooks/state/dashboardState";
import ShareTemplate from "./ShareTemplate/ShareTemplate";
import Repository from "./Repository/Repository";

export default function DashPagesMapper() {
    const page = useContext(dashContext).currentPage;
    
    if (page === data.dashboard.text) {
        return <DashboardPage />;
    }

    if (page === data.shareTemplate.text) {
        return <ShareTemplate />;
    }
    if (page === data.repository.text) {
        return <Repository />;
    }
    return <></>
}
