import Nav from "./Nav"
import style from '@/app/style/header.module.css'
const Header = () => {
  return (
    <div className={style.header_}>
        <div className="logo">
            <img src="img.png" alt="logo" width={70} />
        </div>
        <Nav/>
    </div>
  )
}

export default Header