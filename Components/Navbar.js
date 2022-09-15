import style from '../styles/NavBar.module.scss'
import Image from 'next/image'

const Navbar = () => {


    return (
        <section className={style.navBarContainer}>
            <div className={style.logo}>
                <Image width='100' height='60' src='http://gambiatechproject.org/wp-content/uploads/2022/01/cropped-cropped-GTP1.png' />
            </div>

            <div className={style.navListContainer}>
                <nav className={style.nav}>
                    <ul>
                        <li><a>Home</a></li>
                        <li>Who We Are</li>
                        <li>Events & WorkShops</li>
                        <li>Directory</li>
                        <li>Gallery</li>
                        <li>Database</li>
                        <li>Contact</li>
                        <li>Our Startups</li>
                    </ul>
                </nav>
            </div>

            <div className={style.applyButtonContainer}>
                <div className={style.applyButton}>
                    Apply Now
                </div>
            </div>
        </section>
    )
}

export default Navbar