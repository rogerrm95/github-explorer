import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useRepositoryList } from "../hooks/useRepositoryList"; // Hooks //
// Components //
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { NoResults } from "../components/NoResults";
import { RepositoryCard } from "../components/RepositoryCard";
import { SearchInput } from "../components/SearchInput";

import styles from '../styles/repositories.module.scss'
import { FiUser } from "react-icons/fi";

type PathParams = {
    login: string | undefined
}

export default function Repositories() {
    const { login } = useParams<PathParams>()
    const { user, isLoading, searchGithubUser } = useRepositoryList()
    const [username, setUsername] = useState("")

    useEffect(() => {
        login && searchGithubUser(login)
    }, [])

    async function handleSearchUser() {
        await searchGithubUser(username)
    }

    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.content}>
                <header className={styles.topSearchBox}>
                    <SearchInput
                        value={username}
                        handleSearchUser={handleSearchUser}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </header>

                {
                    isLoading ? (
                        <Loading />
                    ) : (
                        !user.repositories ? (
                            <NoResults />
                        ) : (
                            <div className={styles.repositoriesList}>
                                <h2>
                                    <FiUser size={24} color="#008779"/>
                                    {user.name}
                                </h2>
                                <ul>
                                    {
                                        user.repositories.map(repository => (
                                            <RepositoryCard
                                                key={repository.id}
                                                project={repository.name}
                                                description={repository.description}
                                                language={repository.language}
                                                updatedAt={repository.updated_at}
                                                url={repository.html_url}
                                                topics={repository.topics} />
                                        ))
                                    }
                                </ul>
                            </div>
                        )
                    )
                }
            </main>
            <div className={styles.gradientBackground} />
        </div>
    )
}