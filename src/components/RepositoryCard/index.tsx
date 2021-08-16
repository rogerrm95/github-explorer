import { FiLink } from "react-icons/fi";
import Typescript from '../../assets/typescript.svg'

import styles from './styles.module.scss'

export function RepositoryCard() {
    return (
        <li className={styles.container}>
            <header className={styles.header}>
                <h2>github-explorer</h2>
                <span>
                    Atualizado em: 10 de Outubro de 2021
                </span>
            </header>

            <main className={styles.content}>
                <p>
                    myGit é uma plataforma que funciona como um Github Explorer,
                    permitindo pesquisar reposiórios de usuários do Github.
                </p>

                <ul>
                    <li>react</li>
                    <li>javascript</li>
                    <li>api</li>
                    <li>api</li>
                    <li>api</li>
                    <li>api</li>
                    <li>api</li>
                    <li>api</li>
                    <li>api</li>
                    <li>api</li>
                    <li>api</li>
                    <li>GITHUB</li>
                </ul>
            </main>

            <footer className={styles.footer}>
                <h3>
                    URL
                    <FiLink size={18} color='#FFF' />
                </h3>

                <a href="https://github.com/">https://github.com/</a>

                <img src={Typescript} alt="Linguagem de Programação" />
            </footer>
        </li>
    )
}