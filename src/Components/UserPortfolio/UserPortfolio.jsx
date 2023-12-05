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
import { UserProfileContextProvider } from './Context/UserProfileContext';
import { useRouter } from 'next/navigation';
import AddComponentSection from '../Templates/MainTemplate/AddComponent/AddComponentSection';
import Link from 'next/link';
function SorryDiv() {
    return <div className={style.sorryDiv}>
        Sorry, We can't find the portfolio you search for !
    </div>;
}
export default function UserPortfolio() {
    const route = useRouter();

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

    let keyCounter = 0;



    const showLoggedIn = (loggedIn && editMode != 'false');

    return (
        <UserProfileContextProvider value={{ components: loading.port.components, }}>

            {
                (showLoggedIn) && <>
                    <OwnerNavbar portId={param.id} />
                    <br />
                </>
            }
            <br /><br /><br />

            <div className={` ${style.centerCont}`}>
                {
                    loading.port.components.map((compData) => {

                        return (
                            <div style={{ width: '100%' }} key={keyCounter++}>
                                {
                                    (showLoggedIn) &&
                                    <div className={style.iconCont}>
                                        <Link href={`/portfolio/${param.id}/edit/${compData._id}`}>
                                            <IconButton style={{ color: "var(--text)" }} >
                                                <TbEditCircle />
                                            </IconButton>
                                        </Link>

                                    </div>
                                }
                                <RnderComponents component={compData.settings} />
                                <br />
                                {
                                    compData.settings.type != 'Navbar' && <hr style={{ opacity: 0.3 }} />
                                }
                                <br />
                            </div>
                        )
                    })
                }

                {
                    showLoggedIn && <>
                        {
                            loading.port.components.length == 0 &&
                            <>
                                <br />
                                <br />
                                <h5>
                                    No components added yet, Please Add More Components
                                </h5>
                                <br />
                                <br />
                            </>
                        }
                        <AddComponentSection />
                        <br />
                        <br />
                    </>
                }
            </div>

        </UserProfileContextProvider>
    );
}
