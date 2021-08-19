import { useContext } from "react"
import { UserRepository } from "../contexts/UserRepository"

export const useRepositoryList = () => {
    return useContext(UserRepository)
}