import { FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import Typescript from '../../assets/typescript.svg'

import styles from './styles.module.scss'

type RepositoryCardProps = {
    project: string,
    description?: string | null,
    language?: string | null,
    updatedAt: string,
    url: string,
    topics: string[] | null
}

export function RepositoryCard({ project, description = null, language = null, updatedAt, url, topics = [] }: RepositoryCardProps) {
    return (
        <li className={styles.container}>

            <header className={styles.header}>
                <h2>{project}</h2>
                <span>
                    Atualizado em: 10 de Outubro de 2021
                </span>
            </header>

            <main className={styles.content}>
                <p>{description}</p>

                <ul>
                    {
                        topics?.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </main>

            <footer className={styles.footer}>
                <h3>
                    URL <FiLink size={18} color='#FFF' />
                </h3>

                <Link to={{pathname: `${url}`}} target="_blank">{url}</Link> 

                <img src={Typescript} alt="Linguagem de Programação" />
            </footer>
        </li>
    )
}