import Image from 'next/image'
import style from '../styles/Awareness.module.scss'


const Awareness = () => {


    return (
        <section className={style.container}>
            <h2 className={style.header}><span className={style.lineHigthLigth}>We</span> Raise Awareness</h2>
            <section className={style.sectionContainer}>
                <section className={style.awareness}>
                    <div className={style.awareImg1}></div>
                    <div className={style.awareText}>
                        <h3>Tech Events</h3>
                        <p>Gambia Tech Project grow a wide list of events around Tech to raise awareness and help entrepreneurs to understand a lot more.</p>
                    </div>
                    <div className={style.learnMoreContainer}>
                        <button className={style.learnMoreButton}>Learn More</button>
                    </div>
                </section>

                <section className={style.awareness}>
                    <div className={style.awareImg2}></div>
                    <div className={style.awareText}>
                        <h3>Tech Resources</h3>
                        <p>We offer a wide range of services to support entrepreneurs and stakeholders in our Lab open to the public</p>
                    </div> 
                    <div className={style.learnMoreContainer}>
                        <button className={style.learnMoreButton}>Learn More</button>
                    </div>   
                </section> 
                <section className={style.awareness}>
                    <div className={style.awareImg3}></div>
                    <div className={style.awareText}>
                        <h3>Startups acceleration</h3>
                        <p>We have different programs, workshops and an incubator to support, train and accelerate Tech Startups</p>
                    </div>
                    <div className={style.learnMoreContainer}>
                        <button className={style.learnMoreButton}>Learn More</button>
                    </div>   
                </section>
            </section>
        </section>
    )
}

export default Awareness