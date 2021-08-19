import { useState } from 'react'
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
    isLoading: boolean,
    searchGithubUser: (user: string | {}) => Promise<void>
}

interface UserRepositoryProviderProps {
    children: ReactNode,
}

export const UserRepository = createContext<UserRepositoryProps>({} as UserRepositoryProps)

export function UserRepositoryProvider({ children }: UserRepositoryProviderProps) {

    const [user, setUser] = useState<User>({} as User)
    const [isLoading, setIsLoading] = useState(false)

    async function searchGithubUser(login: string | {}) {
        if (login) {
            try {
                setIsLoading(true)
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
                setIsLoading(false)
            } catch (error) {
                alert(error)
            }
        }
    }

    return (
        <UserRepository.Provider value={{ user, isLoading, searchGithubUser }}>
            {children}
        </UserRepository.Provider>
    )
}

