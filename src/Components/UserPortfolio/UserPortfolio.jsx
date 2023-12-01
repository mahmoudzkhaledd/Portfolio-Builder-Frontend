"use client";
import style from './style.module.css';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Spinner from '../General/Spinner/Spinner';
import { getPortfolio } from '@/Controllers/PortfoliosPage/PortfoliosCtrl';
import RnderComponents from '@/Components/Templates/MainTemplate/Mapper';
import store from '@/hooks/Store/AppStore';
import OwnerNavbar from './OwnerNavbar/OwnerNavbar';
import { TbEditCircle } from "react-icons/tb";
import { IconButton } from '@mui/material';
import { useSearchParams } from 'next/navigation'
import EditPortfolioMapper from '../EditPortfolio/Mapper';
import { UserProfileContextProvider } from './Context/UserProfileContext';
function SorryDiv() {
    return <div className={style.sorryDiv}>
        Sorry, We can't find the portfolio you search for !
    </div>;
}
export default function UserPortfolio() {

    const [edited, setEdited] = useState(null);
    const param = useParams();
    const search = useSearchParams();
    if (param.id == null || param.id.length != 24) {
        return <SorryDiv />;
    }
    const [loading, setLoading] = useState({
        loading: true,
        port: null,
    });
    useEffect(() => {
        const getUsrPortfolio = async () => {
            const port = await getPortfolio(param.id);
            setLoading({
                loading: false,
                port: port,
            });
        };
        getUsrPortfolio();
    }, []);
    if (loading.loading) {
        return <div className={style.sorryDiv}> <Spinner size={35} /> </div>;
    }
    if (loading.port == null) {
        return <SorryDiv />;
    }
    const loggedIn = store.getState().loggedIn;
    const editMode = search.get('editMode');

    let i = 0;


    const handelEdit = (compData) => {
        if (compData != null) {
            setEdited(compData);
        }
    }

    return (
        <UserProfileContextProvider value={{
            components: loading.port.components,
        }}>
            {
                edited && <EditPortfolioMapper component={edited} onClose={() => setEdited(null)} />
            }
            {
                (loggedIn && editMode != 'false') && <OwnerNavbar portId={param.id} />
            }
            <br /><br />
            <div className={style.centerCont}>
                {
                    loading.port.components.map((compData) => <div key={i++}>
                        {
                            (loggedIn && editMode != 'false') &&
                            <div className={style.iconCont}>
                                <IconButton onClick={() => handelEdit(compData)}>
                                    <TbEditCircle />
                                </IconButton>
                            </div>
                        }
                        <RnderComponents component={compData} />
                    </div>)
                }
            </div>

        </UserProfileContextProvider>
    );
}
