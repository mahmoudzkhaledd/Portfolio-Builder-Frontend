import style from './style.module.css';
import UserPortfolio from '@/Components/UserPortfolio/UserPortfolio';

export default async function Home() {
  



  let i = 0;
  return (
    <div className={style.cont}>
      <UserPortfolio />
    </div>
  );
}
