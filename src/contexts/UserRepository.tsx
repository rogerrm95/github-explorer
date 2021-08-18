import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createContext, ReactNode } from 'react'
import { gitHubAPI } from '../services/app'

type User = {
    id: number,
    name: string,
    avatar: string,
    repositories: Repository[]
}

type Repository = {
    id: number,
    name: string,
    description?: string | null,
    language: string | null,
    updatedAt: string,
    html_url: string,
    topics: string[] | null
}

interface UserRepositoryProps {
    user: User,
    searchGithubUser: (user: string) => Promise<void>
}

interface UserRepositoryProviderProps {
    children: ReactNode,
}

export const UserRepository = createContext<UserRepositoryProps>({} as UserRepositoryProps)

export function UserRepositoryProvider({ children }: UserRepositoryProviderProps) {

    const [user, setUser] = useState<User>({} as User)

    async function searchGithubUser(login: string) {
        await gitHubAPI.get(`/${login}/repos`)
            .then(res => {
                const data = res.data
                const repositories = data.map((repository: Repository) => {
                    return {
                        id: repository.id,
                        name: repository.name,
                        description: repository.description ? repository.description : null,
                        language: repository.language ? repository.language : null,
                        updatedAt: repository.updatedAt,
                        html_url: repository.html_url,
                        topics: repository.topics ? repository.topics : null
                    }
                })

                const userInfo = data[0].owner

                setUser({
                    id: userInfo.id,
                    avatar: userInfo.avatar_url,
                    name: userInfo.login,
                    repositories
                })
            })
    }

    useEffect(() => {
        if (user) {
            gitHubAPI.get(`/${user}/repos`)
                .then(res => {
                    const data = res.data
                    const repositories = data.map((repository: Repository) => {
                        return {
                            id: repository.id,
                            name: repository.name,
                            description: repository.description,
                            language: repository.language ? repository.language : null,
                            updatedAt: repository.updatedAt,
                            html_url: repository.html_url,
                            topics: repository.topics ? repository.topics : null
                        }
                    })

                    const userInfo = data[0].owner

                    setUser({
                        id: userInfo.id,
                        avatar: userInfo.avatar_url,
                        name: userInfo.login,
                        repositories
                    })
                })
        }
    }, [])

    return (
        <UserRepository.Provider value={{ user, searchGithubUser }}>
            {children}
        </UserRepository.Provider>
    )
}

