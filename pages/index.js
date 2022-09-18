import Navbar from '../Components/Navbar'
import Head from 'next/head'
import style from '../styles/Home.module.css'
import HomeComponent from '../Components/HomeComponent'
import WhyGambiaTech from '../Components/WhyGambiaTech'
import Awareness from '../Components/Awareness'
import LiveTheExperience from '../Components/LiveTheExperience'





export default function Home() {
  return (
    <div >
      <Head>
        <title>Gambia Tech Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="http://gambiatechproject.org/wp-content/uploads/2022/01/cropped-cropped-GTP1.png" />
      </Head>
      <Navbar />
      
      <main className={style.main}>
        <HomeComponent />
        <WhyGambiaTech />
        <Awareness />
        <LiveTheExperience />
      </main>

      <footer className={style.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span >
            copyright 2022 build with love by AlbadDev
          </span>
        </a>
      </footer>
    </div>
  )
}
