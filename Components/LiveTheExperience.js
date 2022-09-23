import style from '../styles/LiveTheExperience.module.scss'



const LiveTheExperience = () => {

    return (
        <section className={style.experienceContainer}>
            <article className={style.experienceArticle}>
                <h2>Live The Experience</h2>
                <h3>Within the two (2) years program, the main activities are listed as following :</h3>
            </article>
            <article className={style.articleContainer}>
                <div className={style.article}>
                    <div className={style.articleImg1}></div>
                    <div className={style.articleBoby}>
                        <h3>Organize public events around Tech</h3>
                        <p>Are you a Tech entrepreneur looking for tangible ways of building a successful startup?
                        Are you a person interested in investing in Tech startups? Are you involved in developing the generation of Tech entrepreneurs? This is targeted to you.</p>
                    </div>
                    <div className={style.readMoreContainer}>
                        <button className={style.readMore}>READ MORE &#x2192;</button>
                    </div>
                </div>
                <div className={style.article}>
                    <div className={style.articleImg2}></div>
                    <div className={style.articleBoby}>
                        <h3>Organize trainings and workshop for entrepreneurs</h3>
                        <p>The innovation lab is a concept developed within The Gambia Tech Project to develop and support innovation through panel discussions and one – one meeting between entrepreneurs and key mentors. The idea is to help entrepreneurs to find the uniqueness or the innovation of their concept.</p>
                    </div>
                    <div className={style.readMoreContainer}>
                        <button className={style.readMore}>READ MORE &#x2192;</button>
                    </div>
                </div>
                <div className={style.article}>
                    <div className={style.articleImg3}></div>
                    <div className={style.articleBoby}>
                        <h3>Offer technical and digital services </h3>
                        <p>Are you a Tech entrepreneur looking for tangible ways of building a successful startup? Are you a person interested in investing in Tech startups? Are you involved in developing the generation of Tech entrepreneurs? This is targeted to you.</p>
                    </div>
                    <div className={style.readMoreContainer}>
                        <button className={style.readMore}>READ MORE &#x2192;</button>
                    </div>
                </div>
                <div className={style.article}>
                    <section className={style.article4}>
                        <div className={style.articleImg4}></div>
                        <div className={style.articleBoby}>
                            <h3>Incubate ten (10) entrepreneurs every year</h3>
                            <p>The innovation lab is a concept developed within The Gambia Tech Project to develop and support innovation through panel discussions and one – one meeting between entrepreneurs and key mentors. The idea is to help entrepreneurs to find the uniqueness or the innovation of their concept.</p>
                        </div>
                        <div className={style.readMoreContainer}>
                            <button className={style.readMore}>READ MORE &#x2192;</button>
                        </div>
                    </section>
                </div>
            </article>
            <article >gallery</article>
        </section>
    )
}


export default LiveTheExperience