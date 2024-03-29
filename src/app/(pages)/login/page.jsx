import style from './style.module.css'
import LoginPageForm from '@/Components/LoginPage/PageForm/PageForm';
import Link from 'next/link';
export default function page() {

  return (
    <div className={style.mainContainer} style={{ position: 'absolute' }}>
      <div className={style.blur} />
      <div className={style.centerContainer}>
        <h3 className={style.title}>Log in to Portofolio Builder</h3>
        <LoginPageForm />
        <br />
        <div style={{display:'flex'}}>
          <span style={{marginInline:'auto',textAlign:'center'}}>Don't have an account? <Link href="/register" className='link'>Create an account</Link></span>
        </div>
      </div>
    </div>
  )
}
