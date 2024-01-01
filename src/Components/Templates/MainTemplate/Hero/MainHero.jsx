import style from './style.module.css';
import Animation from './Animation'
export default function MainHero({ data }) {
    
    return (
        <div className={style.mainContainer} id={data.id}>
            <div>
                <div className={style.blur}></div>
                <div className={style.detailsCont}>
                    {data.leftImage && <img
                        
                        src={data.leftImage.link}
                        width={data.leftImage.width}
                        height={data.leftImage.height}
                        alt=''
                        className={style.circleImage}
                    />}
                    <p className={style.header}>
                        {data.headerTitle}
                    </p>
                    <br />
                    <p className={style.subtitle}>
                        {data.subTitle}
                    </p>
                </div>
            </div>
            {
                data.rightImage.laptop ? <Animation className={style.animation} /> :
                    (data.rightImage && <img  className={data.rightImage.floating ? `${'floatingImage'} ${style.rightImage}` : style.rightImage} src={data.rightImage.link} width={data.rightImage.width} height={data.rightImage.height} />)
            }

        </div>
    )
}
