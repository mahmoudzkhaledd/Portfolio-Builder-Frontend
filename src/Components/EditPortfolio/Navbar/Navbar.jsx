import Button from '@/Components/General/Button/Button';
import style from './style.module.css';
import Link from 'next/link';
import { useParams } from 'next/navigation';
export default function EditPageNavbar({ onClick, loading }) {
    const { id, compId } = useParams();
    return (
        <>
            <div className={style.navBar}>
                <Link href={`/dashboard/${id}`} target="_blank" rel="noopener noreferrer">
                    <h5 style={{ userSelect: "none" }}>Portfolio Builder</h5>
                </Link>
                <h5 style={{ userSelect: "none" }}>Edit Mode</h5>
                <div style={{ display: "flex", columnGap: "10px" }}>
                    <Link href={window.location.pathname.split('edit')[0]} target="_blank" rel="noopener noreferrer">
                        <Button
                            justifyContent='center'
                            width='fit-content'
                            text="Portfolio"
                            className="icon-ext" />
                    </Link>
                    <Button
                        disabled={loading}
                        loading={loading}
                        justifyContent='center'
                        width='fit-content'
                        text="Save"
                        className="icon-ext"
                        onClick={onClick}
                    />
                </div>
            </div>
        </>
    )
}
