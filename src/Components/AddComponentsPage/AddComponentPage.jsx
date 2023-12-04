"use client";
import { addPortfolioComponents, getPortfolioComponents } from "@/Controllers/PortfoliosPage/PortfoliosCtrl"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react"
import Spinner from "../General/Spinner/Spinner";
import style from './style.module.css';
import { IconButton } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Button from "../General/Button/Button";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import InformationHeader from "../General/InformationHeader/InformationHeader";
function ComponentContainer({ comp, handelDrag, onClick }) {
    return (
        <div className={style.compContainer}
            onDragStart={(e) => handelDrag(e, comp)}
            draggable={true}>
            <div className={style.btnDiv}>
                <IconButton className={`icon-ext ${style.addIcon}`} onClick={() => onClick(comp._id, true)}>
                    <AddCircleRoundedIcon />
                </IconButton>
            </div>
            <div className={style.circleDiv}>
                <div className={style.circle}>
                    <h2>0</h2>
                </div>
                <h6> {comp.name} </h6>
            </div>
        </div>
    )
}

function ChosenComponent({ ele, idx, handelDelete, outer, onDeleteNetwork }) {
    const stll = {
        color: !outer ? "var(--text)" : "white",
        borderColor: !outer ? "var(--text)" : "white"
    };
    return (
        <div className={style.chosenElement} style={{ backgroundColor: outer ? "var(--primary)" : "", }}>
            <div className={style.texts} >
                <div className={style.circle} style={{ width: "50px", height: '50px', margin: '0', ...stll }}>
                    <h6 style={stll}>{idx}</h6>
                </div>
                <p style={stll}>{ele.name}</p>
            </div>
            {
                <IconButton className="icon-ext" onClick={() => handelDelete != null ? handelDelete(ele._id) : onDeleteNetwork(ele._id)}>
                    <MdDeleteOutline />
                </IconButton>
            }
        </div>
    );
}
export default function AddComponentPage() {
    const router = useRouter();

    const { id } = useParams();
    const [chosen, setChosen] = useState({
        inner: [],
        outer: [],
        toDelete: [],
    });
    const [saving, setSaving] = useState(false);
    const [loading, setLoading] = useState({
        loading: true,
        comps: null,
    });

    useEffect(() => {
        const getCopms = async () => {
            loading.loading = true;
            setLoading({ ...loading });
            const res = await getPortfolioComponents(id);
            loading.comps = res.components;
            loading.loading = false;
            setLoading({ ...loading });
            chosen.outer = res.portfolio.components;
            setChosen({ ...chosen });
        };
        getCopms();
    }, []);
    if (loading.loading) {
        return <div className={style.loadingDiv}>
            <Spinner />
        </div>
    }

    if (loading.comps == null) {
        return <div className={style.loadingDiv}>
            <h6>Sorry, we can't find the template you are looking for.</h6>
        </div>
    }

    const handelDrag = (event, comp) => {
        event.dataTransfer.setData("ElementId", comp._id);
    }
    const handelDrop = (e, notParse) => {
        if (chosen.inner.length + chosen.outer.length > 9) {
            Swal.fire({
                title: "Number Exceeded",
                text: "Maximum number of components is 10",
                icon: 'info',
            })
            return;
        }
        const type = notParse ? e : e.dataTransfer.getData("ElementId");
        chosen.inner.push(type);
        setChosen({ ...chosen });
    }
    const handelDragOver = (e) => {
        e.preventDefault();
    }
    const handelDelete = id => {
        for (let x = 0; x < chosen.inner.length; x++) {
            if (chosen.inner[x] == id) {
                chosen.inner.splice(x, 1);
                break;
            }
        }
        setChosen({ ...chosen });
    };
    const handelDeleteNetwork = (id) => {
        if (window.confirm("Dou you want to delete this component?")) {
            chosen.toDelete.push(id);
            for (let i = 0; i < chosen.outer.length; i++) {
                if (chosen.outer[i]._id == id) {
                    chosen.outer.splice(i, 1);
                    setChosen({ ...chosen });
                    break;
                }
            }
        }
    };
    const handelSave = async () => {
        if (chosen.inner.length == 0 && chosen.toDelete.length == 0) {
            return;
        }
        setSaving(true);
        const res = await addPortfolioComponents(id, chosen);
        if (res != null) {
            chosen.inner = [];
            chosen.toDelete = [];
            chosen.outer.push(...res.portComps);
            setChosen({ ...chosen });
            router.replace(window.location.pathname.split('/add-components')[0]);
        } else {
            Swal.fire({
                title: "Failed operation",
                text: "Unknown error occured, please try again later.",
                icon: 'error'
            })
        }
        setSaving(false);
    };
    let i = 0, j = 0;
    return (
        <div className={style.parentDiv}>
            <br />
            <br />
            <InformationHeader
                image="/images/Choose-pana.svg"
                onClick={() => router.replace(window.location.pathname.split('/add-components')[0])}
                buttonText="Back to Portfolio" title={'Enjoy chosing\ncomponents '} />
            <br />
            <br />

            <div className={style.mainBody}>
                <div className={style.mainCont}>
                    {
                        loading.comps.map((e) =>
                            <ComponentContainer
                                onClick={handelDrop}
                                comp={e}
                                key={i++}
                                handelDrag={handelDrag} />)
                    }
                </div>
                <div
                    className={style.dragArea}
                    onDrop={(e) => handelDrop(e, false)}
                    onDragOver={handelDragOver}>
                    <div className={style.headerTitleFlex}>
                        <h5>Portfolio skeleton</h5>
                        <Button
                            loading={saving}
                            disabled={saving}
                            width="fit-content"
                            justifyContent="center"
                            text="save"
                            className="icon-ext"
                            onClick={handelSave} />
                    </div>
                    {
                        chosen.outer.map(o => {

                            j++;
                            return <ChosenComponent
                                outer={true}
                                onDeleteNetwork={handelDeleteNetwork}
                                key={i += 2}
                                ele={o}
                                idx={j} />;
                        })
                    }
                    {
                        (chosen.inner.length + chosen.outer.length) > 0 ?
                            chosen.inner.map(c => {
                                let ele = null;
                                for (let x = 0; x < loading.comps.length; x++) {
                                    if (loading.comps[x]._id == c) {
                                        ele = loading.comps[x];
                                        break;
                                    }
                                }
                                if (ele == null) return <div key={i++}></div>;
                                j++;
                                return <ChosenComponent key={i += 2} ele={ele} idx={j} handelDelete={handelDelete} />;
                            }) : <div className={`floatingImage ${style.noDataCont}`}>
                                <br />
                                <br />
                                <i className={`fa-solid fa-battery-empty ${style.emptyBox}`} />
                                <p style={{ fontSize: "1.1rem", textAlign: 'center' }}>No data yet!</p>
                            </div>
                    }
                </div>
            </div>
        </div>

    )
}
