import { useState } from 'react'
import { createContext, ReactNode } from 'react'
import { format } from 'date-fns'
import { gitHubAPI } from '../services/app'
import { ptBR } from 'date-fns/locale'

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
    updated_at: string,
    html_url: string,
    topics: string[] | null
}

interface UserRepositoryProps {
    user: User,
    pageLimit: number,
    isLoading: boolean,
    hasMoreRepositories: boolean,
    readMore: (repositories: Repository[]) => void
    searchGithubUser: (user: string | {}) => Promise<void>
}

interface UserRepositoryProviderProps {
    children: ReactNode,
}

export const UserRepository = createContext<UserRepositoryProps>({} as UserRepositoryProps)

export function UserRepositoryProvider({ children }: UserRepositoryProviderProps) {

    const [user, setUser] = useState<User>({} as User)
    const [pageLimit, setPageLimit] = useState(10)
    const [allRepositories, setAllRepositories] = useState([] as Repository[])
    const [isLoading, setIsLoading] = useState(false)
    const [hasMoreRepositories, setHasMoreRepositories] = useState(true)

    async function searchGithubUser(login: string | {}) {
        if (login) {
            try {
                setIsLoading(true)
                await gitHubAPI.get(`/${login}/repos`)
                    .then(res => {
                        console.log(res.data)
                        const data = res.data
                        const all = data.map((repository: Repository) => {
                            return {
                                id: repository.id,
                                name: repository.name,
                                description: repository.description ? repository.description : null,
                                language: repository.language ? repository.language : null,
                                updated_at: format(new Date(repository.updated_at),
                                    "dd 'de' MMMM 'de' yyy", {
                                    locale: ptBR
                                }),
                                html_url: repository.html_url,
                                topics: repository.topics ? repository.topics : null
                            }
                        })

                        const userInfo = data[0].owner

                        const repositories = all.filter((item: any, index: number) => {
                            return index < pageLimit && item
                        })

                        setAllRepositories(all)

                        setUser({
                            id: userInfo.id,
                            avatar: userInfo.avatar_url,
                            name: userInfo.login,
                            repositories
                        })
                    })

                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                setUser({} as User)
                alert("Usuário não encontrado!")
            }
        }
    }

    function readMore(repositories: Repository[]) {
        if (repositories.length === pageLimit) {
            let newArray = allRepositories.filter((item, index) => {
                return (repositories.length < (index + 1) && (index + 1) <= (pageLimit + 10)) && item
            })

            setPageLimit(pageLimit + 10)
            setHasMoreRepositories(true)
            setUser({
                ...user,
                repositories: [...repositories, ...newArray]
            })
        } else {
            setHasMoreRepositories(false)
        }
    }

    return (
        <UserRepository.Provider value={{
            user,
            isLoading,
            pageLimit,
            hasMoreRepositories,
            readMore,
            searchGithubUser }}>
            {children}
        </UserRepository.Provider>
    )
}

