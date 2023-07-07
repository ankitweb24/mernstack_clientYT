import Link from "next/link"
import style from '@/app/style/header.module.css'
import { BsFillArrowRightCircleFill} from "react-icons/bs";
const Nav = () => {
  return (
   <nav className={style.nav_brand}>
    <Link href='/' className={style.nav_item}>Home</Link>
    <Link href='/about' className={style.nav_item}>About</Link>
    <Link href='/service' className={style.nav_item}>Service</Link>
    <Link href='/contact' className={style.nav_item}>Contact</Link>
    <Link href='/signup' className={style.singup}>Signup <BsFillArrowRightCircleFill/></Link>
   </nav>
  )
}

export default Nav