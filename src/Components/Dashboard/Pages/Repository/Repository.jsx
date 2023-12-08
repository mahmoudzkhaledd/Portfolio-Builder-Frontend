import InformationHeader from '@/Components/General/InformationHeader/InformationHeader';
import style from './style.module.css';


export default function Repository({ }) {
    const images = [
        'https://picsum.photos/2000/2000',
        'https://picsum.photos/3000/2000',
        'https://picsum.photos/2000/1500',
        'https://picsum.photos/3000/1500',
        'https://picsum.photos/1000/2000',
        'https://picsum.photos/1500/2000',
        'https://picsum.photos/2000/3000',
    ];
    let i = 0;
    return (
        <div>
            <InformationHeader
                buttonText="Add More"
                title="Your Repository Images" />
            <br />
            <div className={style.grid}>

                {
                    images.map(e => <div key={i++}> <img alt='Image' className={style.image} src={e} key={e} /> </div>)
                }

            </div>
        </div>

    )
}
