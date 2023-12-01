"use client";
import TextBox from '@/Components/General/TextBox/TextBox';
import style from './style.module.css';
import Button from '@/Components/General/Button/Button';
import { useEffect, useRef, useState } from 'react';
import store from '@/hooks/Store/AppStore';
import { makeTemplateOrder } from '@/Controllers/TemplateOrder/TemplateOrderCtrl';
import Swal from 'sweetalert2';
export default function ShareTemplatePage() {

  const configs = store.getState().configs;
  const url = useRef();
  const desc = useRef();
  const [lodaing, setLoading] = useState(false);
  const submitOrder = async () => {
    const link = url.current.value || "";
    const description = desc.current.value || "";

    if (link == "" || description == "" || !URL.canParse(link)) {
      Swal.fire({
        title: "Validation Error",
        text: "Please enter all data required !",
        icon: "error",
      })
      return;
    }
    setLoading(true);
    const res = await makeTemplateOrder(link, description);
    setLoading(false);
    console.log(res);
  };

  let m = 0;

  return (
    <div>
      <div className={style.card}>
        <h1 className={style.title}>Instantly debug your applications with portfolio builder</h1>
        <br />
        <p className={style.subTitle}>The world’s leading AI-powered developer platform.</p>
        <div className={style.textCont}>
          <TextBox placeholder="Github link" />
          <TextBox placeholder="Template description" area={true} />
          <Button text="Share" justifyContent="center" />
        </div>
      </div>
    </div>
  );
}
