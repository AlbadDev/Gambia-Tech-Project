import style from '../styles/WhyGambiaTech.module.scss'



const WhyGambiaTech = () => {



    return (
        <section className={style.sectionContainer}>
           <article className={style.whyGtArticleContainer}>
                <h3><span className={style.whyTitle}>Why Gambia Tech Project ?</span></h3>
                <span className={style.pSpan}>Project Goals and Objectives</span>
                <p className={style.mainObj}>The main objective is to have capable young entrepreneurs and start-ups that will be a strong successful network around the Tech ecosystem in The Gambia. The whole concept move around Tech events and entrepreneurship programs to Support, Coach, Guide and Fund start-ups to prepare them for another level of growth.</p>
                
                <div className={style.learnMoreContainer}>
                    <button className={style.learnMoreButton}>Learn More &#x2192;</button>
                </div>
           </article>
           <article className={style.mainObjImg}>
                <div></div>
           </article>
            


        </section>
    )
}

export default WhyGambiaTech