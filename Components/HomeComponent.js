import Image from 'next/image'
import style from '../styles/HomeComponent.module.scss'
import afbanjul from '../public/afbanjul.jpg'



const HomeComponent = () => {


    return (
        <section className={style.homeSectionComponent}>
            <article className={style.homeRigthComponent}>
                <div className={style.homeRigthHead}>
                    <h2>INCUBATION</h2>
                    <h2>& </h2>
                    <h2>INOVATION</h2>
                </div>
                <p><i><span className={style.gtSpan}>Gambia Tech Project</span> is a program deployed by the French Embassy in collaboration with the French Alliance of Banjul to foster and participate actively in the development of a Tech ecosystem that will offer opportunities and <span className={style.higthLigth}>facilitate innovations for the young entrepreneurs.</span> With a dedicated incubation space and Tech Lab opened within the Alliance, the project is <span className={style.higthLigth}>giving the opportunity to all entrepreneurs to have access to different resources and opportunities.</span></i></p>
                <hr className={style.hr}/>
                <div className={style.rigthComponentImage}>
                    
                    <Image className={style.afLogo} src={afbanjul} width='110' height='40'/>
                    <Image className={style.afLogo} src='http://gambiatechproject.org/wp-content/uploads/2022/07/France-Embassy-logo.png' width='110' height='40'/>
                </div>
            </article>
        </section>
    )
}


export default HomeComponent