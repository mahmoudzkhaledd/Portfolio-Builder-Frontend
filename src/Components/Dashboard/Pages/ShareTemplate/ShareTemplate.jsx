import { useDispatch } from 'react-redux';
import ShareTemplateLandingPage from './LandingPage/LangingPage';
import ShareTemplatePage from './SharePage/ShareTemplatePage';
import style from './style.module.css';

import { useState } from 'react';
export default function ShareTemplate() {
  const [share, setShare] = useState(false);
  const onSuccess = () => {
    setShare(true);
  };
  return (
    <div className={style.mainCont}>
      {
        !share ?
          <ShareTemplateLandingPage onSuccess={onSuccess} /> :
          <ShareTemplatePage />
      }
    </div>
  )
}
