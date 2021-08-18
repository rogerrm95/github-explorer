import { useRepositoryList } from "../hooks/useRepositoryList"; // Hooks //
// Components //
import { Header } from "../components/Header";
import { NoResults } from "../components/NoResults";
import { RepositoryCard } from "../components/RepositoryCard";
import { SearchInput } from "../components/SearchInput";

import styles from '../styles/repositories.module.scss'

export default function Repositories() {

    const { name, repositories } = useRepositoryList()

    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.content}>
                <header className={styles.topSearch}>
                    <SearchInput />
                </header>

                {
                    !repositories ? (
                        <NoResults />
                    ) : (
                        <ul className={styles.repositoriesList}>
                            {
                                repositories.map(repository => (
                                    <RepositoryCard
                                        key={repository.id}
                                        project={repository.name}
                                        description={repository.description}
                                        language={repository.language}
                                        updatedAt={repository.updatedAt}
                                        url={repository.html_url}
                                        topics={repository.topics} />
                                ))
                            }
                        </ul>
                    )
                }
            </main>

            <div className={styles.gradientBackground} />
        </div>
    )
}