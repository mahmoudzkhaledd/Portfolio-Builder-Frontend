"use client";
import style from './style.module.css';
import Spinner from '../../../General/Spinner/Spinner';

import { useContext, useState } from "react";
import Card from "../../Card/Card";
import { dashContext } from "@/hooks/state/dashboardState";
import { switchPortfolioState } from '../../../../Controllers/UserProfile/UserProfileCtrl';
export default function DashboardPage() {
    const port = useContext(dashContext);
    const [loading, setLoading] = useState({
        loading: false,
        data: port.port,
    });

    const handelswitchmode = async () => {
        loading.loading = true;
        setLoading({ ...loading });
        const res = await switchPortfolioState(loading.data._id, !loading.data.online);
        if (res != null) {
            loading.data = res;
            port.port = res;
        }
        loading.loading = false;
        setLoading({ ...loading });
    };
    if (loading.loading) {
        return <div className={style.sorryDiv}>
            <Spinner />
        </div>
    }
    return (
        <div className={style.dashCont}>
            <Card
                title={"Total Views"}
                data={loading.data.totalViews}
                image="fa-solid fa-display"
            />
            <Card
                title={"Total Messages"}
                data={loading.data.totalMessages}
                image="fa-regular fa-comment"
            />
            <Card
                title={"Portfolio Availability"}
                data={loading.data.online ? "Online" : "Offline"}
                image={`${loading.data.online ? "fa-solid fa-globe" : "fa-solid fa-eye-slash"}`}
                onClick={handelswitchmode}
            />
        </div>
    )
}
