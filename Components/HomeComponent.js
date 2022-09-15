import style from '../styles/HomeComponent.module.scss'


const HomeComponent = () => {


    return (
        <section className={style.homeSectionComponent}>
            <article className={style.articleComponent}>
                <h2>INCUBATION</h2>
                <h2>& </h2>
                <h2>INNOVATION</h2>
                <p>The Gambia Tech Project is a program deployed by the French Embassy in collaboration with the French Alliance of Banjul to foster and participate actively in the development of a Tech ecosystem that will offer opportunities and facilitate innovations for the young entrepreneurs. With a dedicated incubation space and Tech Lab opened within the Alliance, the project is giving the opportunity to all entrepreneurs to have access to different resources
and opportunities.</p>
            </article>
        </section>
    )
}


export default HomeComponent