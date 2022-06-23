import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export function GithubProvider({ children }) {

    // State tracker
    const initialState = {
        users: [],
        user: {},
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // Get search results
    async function searchUsers(text) {

        setLoading()

        const params = new URLSearchParams({
            q: text,
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })

        const { items } = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }

    // Get a single user
    async function getUser(login) {

        setLoading()

        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })

        if (response.status === 404) {
            window.location = '/notfound'
        } else {
            const data = await response.json()

            dispatch({
                type: 'GET_USER',
                payload: data,
            })
        }
    }

    function clearUsers() {
        dispatch({
            type: 'CLEAR_USERS'
        })
    }

    function setLoading() {
        dispatch({
            type: 'SET_LOADING'
        })
    }

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                loading: state.loading,
                searchUsers,
                clearUsers,
                getUser
            }}
        >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext