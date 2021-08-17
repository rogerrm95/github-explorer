import { useEffect, useState } from 'react'
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
    project: string,
    description: string,
    language: string | null,
    updatedAt: string,
    url: string,
    topics: string[] | null
}

interface UserRepositoryProviderProps {
    children: ReactNode,

}

export const UserRepository = createContext<User>({} as User)

export function UserRepositoryProvider({ children }: UserRepositoryProviderProps) {

    const [user, setUser] = useState<User>({} as User)

    useEffect(() => {
        gitHubAPI.get('/rogerrm95/repos')
            .then(res => {
                const data = res.data
                const repositories = data.map((repository: Repository) => {
                    return {
                        id: repository.id,
                        project: repository.project,
                        description: repository.description,
                        language: repository.language ? repository.language : null,
                        updatedAt: repository.updatedAt,
                        url: repository.url,
                        topics: repository.topics ? repository.topics : null
                    }
                })

                console.log(repositories)
            })
    }, [])

    return (
        <UserRepository.Provider value={user}>
            {children}
        </UserRepository.Provider>
    )
}

