"use client"
import { useEffect, useState } from 'react';
import CatButton from './CatButton';
import style from './style.module.css';

export default function ProjectsCategory({ projects }) {
  const [catgory, setCategory] = useState({});

  useEffect(() => {
    const c = {};
    for (const [key, value] of Object.entries(projects)) {
      if (c[value.category] == null) {
        c[value.category] = 1;
      } else {
        c[value.category]++;
      }
    }
    setCategory(c);
  }, []);

  return (
    <div className={style.projectsCategoryContainer}>
      <CatButton key="All" name="All" selected={true} />
      {
        Object.keys(catgory).map((e) => <CatButton key={e} name={e} selected={false} />)
      }
    </div>
  )
}
