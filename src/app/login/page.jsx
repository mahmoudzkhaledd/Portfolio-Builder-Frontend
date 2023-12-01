import style from './style.module.css'
import LoginPageForm from '@/Components/LoginPage/PageForm/PageForm';
export default function page() {



  return (
    <div className={style.mainContainer} style={{ position: 'absolute' }}>
      <div className={style.blur} />
      <div className={style.centerContainer}>
        <h1 className={style.title}>Log in to Portofolio Builder</h1>
        <LoginPageForm />
      </div>
    </div>
  )
}
