import { FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";
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
                    {updatedAt}
                </span>
            </header>

            <main className={styles.content}>
                <div>
                    <span>Descrição:</span>

                    <p>
                        {description ? description : 'Sem descrição'}
                    </p>
                </div>

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
                <div>
                    <h3>
                        URL <FiLink size={18} color='#FFF' />
                    </h3>
                    <Link to={{ pathname: `${url}` }} target="_blank">{url}</Link>
                </div>

                <h3>
                    {language}
                </h3>
            </footer>
        </li>
    )
}