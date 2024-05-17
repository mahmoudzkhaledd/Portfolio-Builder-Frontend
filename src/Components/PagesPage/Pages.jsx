'use client';
import InformationHeader from '@/Components/General/InformationHeader/InformationHeader';
import style from './style.module.css';
import { useState, useEffect } from 'react';
import { getUserPages } from '@/Controllers/Pages/pagesCtrl';
import Spinner from '@/Components/General/Spinner/Spinner';
import AddPageModal from './Modal/AddPageModal';
import Link from 'next/link';
export default function Pages({ }) {

    const [loading, setLoading] = useState({
        data: null,
        loading: true,
    });
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const fun = async () => {
            loading.loading = true;
            setLoading({ ...loading });
            loading.data = await getUserPages();
            loading.loading = false;
            setLoading({ ...loading });
        }
        fun();
    }, []);

    if (loading.loading) {
        return <div className={style.sorryDiv}>
            <Spinner />
        </div>
    }
    if (loading.data == null) {
        return <div className={style.sorryDiv}>
            Sorry, We can't find the page you want.
        </div>
    }
    let i = 0;
    return (
        <div style={{ padding: "30px" }}>
            {
                modal && <AddPageModal onClose={() => setModal(false)} />
            }
            <InformationHeader
                buttonText="Add More"
                title="Your Projects Pages"
                onClick={() => setModal(true)} />
            <br />
            <div className={style.grid}>

                {
                    loading.data.map(e => <Link key={i++} href={`/page/${e._id}`} className={style.imgCont}>
                        <img alt='Image' className={style.image} src={e.imageUrl} key={e} />
                        <div className={style.content} >
                            <h5 style={{ color: "white" }}>
                                {e.name}
                            </h5>
                        </div>
                    </Link>)
                }

            </div>
            <br />
            <br />
            <br />
            <br />
        </div>

    )
}
