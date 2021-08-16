// Components //
import { Header } from '../components/Header'
import { SearchInput } from "../components/SearchInput";
// Images & Icons //
import HeroImage from '../assets/hero-image.png'
// CSS //
import styles from "../styles/home.module.scss"

export default function Home() {
    return (
        <div className={styles.container}>

            <Header />

            <main className={styles.main}>
                <section className={styles.content}>
                    <h2>
                        Bem vindo ao GitHub Repository,
                    </h2>
                    <p>
                        A plataforma que lista os projetos mais <br />relevantes do seu Github.
                    </p>
                    <label htmlFor="search">
                        Para começar a utilizar, informe seu nick do Github abaixo:
                    </label>

                    <SearchInput />
                </section>
                <img src={HeroImage} alt="Hero" className={styles.heroImage} />
            </main>

            <div className={styles.gradientBackground} />
        </div>
    )
}