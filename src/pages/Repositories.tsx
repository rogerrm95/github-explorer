import { Header } from "../components/Header";
import { NoResults } from "../components/NoResults";
import { RepositoryCard } from "../components/RepositoryCard";
import { SearchInput } from "../components/SearchInput";

import styles from '../styles/repositories.module.scss'

export default function Repositories() {
    const isTrue = false
    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.content}>
                <header className={styles.topSearch}>
                    <SearchInput />
                </header>

                {
                    isTrue && (
                        <NoResults />
                    )
                }

                <ul className={styles.repositoriesList}>
                    <RepositoryCard />
                    <RepositoryCard />
                    <RepositoryCard />
                </ul>
            </main>

            <div className={styles.gradientBackground} />
        </div>
    )
}