
import style from './style.module.css';
import Button from '@/Components/General/Button/Button';

export default function ShareTemplateLandingPage({ onSuccess }) {

  return (
    <div className={style.mainCont}>
      <div className={`${style.leftSection} ${style.section}`}>
        <h1 className={style.title}>Share your
          <span className={style.templateText}>{" {"}template{"} "} </span>with us!
        </h1>
        <br />
        <p className={style.subTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo error officia nesciunt facere, architecto est saepe iste cupiditate unde! Veniam veritatis in blanditiis facere, voluptatum reprehenderit quaerat sequi fuga nemo!</p>
        <br /> <br />
        <Button width={200} text="Get Started" justifyContent="center" onClick={onSuccess} color="#555ea3" />
      </div>
      <div className={`${style.rightSection} ${style.section}`}>

        <div>
          <div className={style.blur}></div>
          <img className={style.img} src="/images/code.png" alt="" />
        </div>
      </div>

    </div>
  )
}
