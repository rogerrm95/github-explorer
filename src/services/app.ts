import axios from 'axios'

export const gitHubAPI = axios.create({
    baseURL: 'https://api.github.com/users', 
    headers: {
        "Accept": "application/vnd.github.mercy-preview+json"
    }
})