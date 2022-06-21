import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export function GithubProvider({ children }) {

    // State tracker
    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // Get search results
    async function searchUsers() {
        const response = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        const { items } = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                loading: state.loading,
                searchUsers
            }}
        >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext