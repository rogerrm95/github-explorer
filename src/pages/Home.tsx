import { useState } from 'react';
import { useHistory } from 'react-router-dom'
// Components //
import { Header } from '../components/Header'
import { SearchInput } from "../components/SearchInput";
// Images & Icons //
import HeroImage from '../assets/hero-image.png'
// CSS //
import styles from "../styles/home.module.scss"

export default function Home() {

    const [username, setUsername] = useState('')
    const {push} = useHistory()

    async function handleSearchUser() {
        push(`/repositories/${username}`)
    }

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

                    <SearchInput
                        value={username}
                        handleSearchUser={handleSearchUser}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </section>
                <img src={HeroImage} alt="Hero" className={styles.heroImage} />
            </main>

            <div className={styles.gradientBackground} />
        </div>
    )
}