import style from './style.module.css'
import LoginPageForm from '@/Components/LoginPage/PageForm/PageForm';
import Link from 'next/link';
import RegisterPageForm from '../../../Components/RegisterPageForm/RegisterPageForm';
export default function page() {

  return (
    <div className={style.mainContainer} style={{ position: 'absolute' }}>
      <div className={style.blur} />
      <div className={style.centerContainer}>
        <h3 className={style.title}>Log in to Portofolio Builder</h3>
        <RegisterPageForm />
        <br />
        <div style={{display:'flex'}}>
          <span style={{marginInline:'auto',textAlign:'center'}}>Already have an account? <Link href="/login" className='link'>Login</Link></span>
        </div>
      </div>
    </div>
  )
}
