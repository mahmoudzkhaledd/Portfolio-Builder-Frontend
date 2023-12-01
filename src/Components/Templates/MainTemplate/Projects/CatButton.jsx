import style from './style.module.css';

export default function CatButton({ name, onClick, selected }) {
  return (
    <div className={`${style.catButton} ${selected ? style.selected : ""}`}>
      {name}
    </div>
  )
}
