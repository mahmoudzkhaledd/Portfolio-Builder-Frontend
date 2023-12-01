"use client";
import Image from "next/image";
import style from "./style.module.css";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

export default function UnauhtorizedPage() {
  const rout = useRouter();

  return (
    <div className={style.mainCont}>
      <Image alt="" src="/images/lock.png" width={200} height={200} />
      <br />
      <h2 style={{ textAlign: 'center' }}>The page is not publically available,<br />please login first.</h2>
      <div>
      <br/>
        <Button text="Login Page" onClick={() => { rout.replace('/login');rout.refresh(); }} justifyContent="center"/>
      </div>
    </div>
  )
}
