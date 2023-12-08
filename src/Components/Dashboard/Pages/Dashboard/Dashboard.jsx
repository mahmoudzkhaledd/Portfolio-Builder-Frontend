"use client";
import style from './style.module.css';
import Spinner from '../../../General/Spinner/Spinner';
import moment from 'moment';
import { useContext, useState } from "react";
import Card from "../../Card/Card";
import { dashContext } from "@/hooks/state/dashboardState";
import { switchPortfolioState } from '../../../../Controllers/UserProfile/UserProfileCtrl';
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto';

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
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
    loading.data.viewsHistory = loading.data.viewsHistory || [];
    const chartData = {
        labels: loading.data.viewsHistory.map(e => moment(new Date(e.date).addDays(1)).format("MMM Do YY")),
        datasets: [{
            label: "",
            data: loading.data.viewsHistory.map(e => e.views),
        }]
    };
    return (
        <div className={style.mainCont}>
            <div className={style.dashCont}>
                <Card
                    title={"Total Views"}
                    data={loading.data.totalViews}
                    image="fa-solid fa-display"
                    toolTip="Portfolio total views"
                />
                <Card
                    title={"Total Messages"}
                    data={loading.data.totalMessages}
                    image="fa-regular fa-comment"
                    toolTip="Total Messages"
                />
                <Card
                    title={"Portfolio Availability"}
                    data={loading.data.online ? "Online" : "Offline"}
                    image={`${loading.data.online ? "fa-solid fa-globe" : "fa-solid fa-eye-slash"}`}
                    onClick={handelswitchmode}
                    toolTip="Click to switch availability"
                />
            </div>
            <br />
            <br />
            <div className={style.chart}>
                <Line data={chartData} width={800} height={300} />
            </div>
        </div>
    )
}
