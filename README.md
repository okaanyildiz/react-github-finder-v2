react-github-finder-v2

Steps to take

PART 1: SETTING UP THE APP

Index.css

```
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
 
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
 <React.StrictMode>
   <App />
 </React.StrictMode>
)

```
App.js

```
function App() {
 return (
   <div>finderV2</div>
 )
}
 
export default App
```
Set up Tailwind 
https://tailwindcss.com/docs/guides/create-react-app

Set up DaisyUI
https://daisyui.com/docs/install/

```
module.exports = {
 purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
 content: ['./src/**/*.{js,jsx,ts,tsx}'],
 theme: {
   extend: {},
 },
 plugins: [require('daisyui')],
 daisyui: {
   themes: ['dark'],
 },
};
 
```
Index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Install React Router v6
https://reactrouter.com/docs/en/v6/getting-started/installation

Install React Icons
https://github.com/react-icons/react-icons


PART 2: BASIC LAYOUT

Navbar Component
Navbar: 

```
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
 
function Navbar({ title }) {
   return (
       <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
           <div className='container mx-auto'>
               <div className='flex-none px-2 mx-2'>
                   <FaGithub className='inline pr-2 text-3xl' />
                   <Link to='/' className='text-lg font-bold align-middle'>
                       {title}
                   </Link>
               </div>
 
               <div className='flex-1 px-2 mx-2'>
                   <div className='flex justify-end'>
                       <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                           Home
                       </Link>
                       <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                           About
                       </Link>
                   </div>
               </div>
 
           </div>
       </nav>
   )
}
 
Navbar.defaultProps = {
   title: 'Github Finder'
}
 
Navbar.propTypes = {
   title: PropTypes.string
}
 
export default Navbar
```
App: 

```
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
 
function App() {
 return (
   <Router>
     <div className='flex flex-col justify-between h-screen'>
       <Navbar />
 
       <main className='container mx-auto px-3 pb-12'>
         content
       </main>
 
     </div>
   </Router>
 )
}
 
export default App
```

Footer Component

Footer: 
```
function Footer() {
 
   const footerYear = new Date().getFullYear()
 
   return (
       <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
           <div>
               <svg
                   width='50'
                   height='50'
                   viewBox='0 0 24 24'
                   xmlns='http://www.w3.org/2000/svg'
                   fillRule='evenodd'
                   clipRule='evenodd'
                   className='inline-block fill-current'
               >
                   <path d='M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z'></path>
               </svg>
               <p>Copyright &copy; {footerYear} All rights reserved</p>
           </div>
       </footer>
   )
}
 
export default Footer
```
App:  
```
​​import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
 
function App() {
 return (
   <Router>
     <div className='flex flex-col justify-between h-screen'>
       <Navbar />
 
       <main className='container mx-auto px-3 pb-12'>
         content
       </main>
 
       <Footer />
     </div>
   </Router>
 )
}
 
export default App
```
Pages (Home, About, Not Found)

Home: 
```
function Home() {
   return (
       <div>Home</div>
   )
}
 
export default Home
```
About: 
```
function About() {
   return (
       <div>
           <h1 className='text-6xl mb-4'>Github Finder</h1>
           <p className='mb-4 text-2xl font-light'>
               A React app to search GitHub profiles and see profile details.
           </p>
           <p className='text-lg text-gray-400'>
               Version <span className='text-white'>2.0.0</span>
           </p>
 
       </div>
   )
}
 
export default About
```
NotFound: 
```
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
 
function NotFound() {
   return (
       <div className='hero'>
           <div className='text-center hero-content'>
               <div className='max-w-lg'>
                   <h1 className='text-8xl font-bold mb-8'>Hmmm…</h1>
                   <p className='text-5xl mb-8'>404 - Page Not Found!</p>
                   <Link className='btn btn-primary btn-lg' to='/'>
                       <FaHome className='mr-2' />
                       Back To Home
                   </Link>
               </div>
           </div>
       </div>
   )
}
 
export default NotFound
```
Page Routes

App:

```
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
 
function App() {
 return (
   <Router>
     <div className='flex flex-col justify-between h-screen'>
       <Navbar />
 
       <main className='container mx-auto px-3 pb-12'>
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />} />
           <Route path='/notfound' element={<NotFound />} />
           <Route path='*' element={<NotFound />} />
         </Routes>
       </main>
 
       <Footer />
     </div>
   </Router>
 )
}
 
export default App
```

PART 3: CHECKING THE API

Handle Github token

.env: 
```
REACT_APP_GITHUB_URL = "https://api.github.com"
REACT_APP_GITHUB_TOKEN = "[access token]"
```
Check the Api and the coming data
https://api.github.com/users/[user]

App: 

```
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
 
function App() {
 
 const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
 const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
 
 async function fetchUsers() {
   const response = await fetch(`${GITHUB_URL}/users`, {
     headers: {
       Authorization: `token ${GITHUB_TOKEN}`
     }
   })
   const data = response.json()
   console.log(data)
 }
 fetchUsers()
 
 return (
   <Router>
     <div className='flex flex-col justify-between h-screen'>
       <Navbar />
 
       <main className='container mx-auto px-3 pb-12'>
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />} />
           <Route path='/notfound' element={<NotFound />} />
           <Route path='*' element={<NotFound />} />
         </Routes>
       </main>
 
       <Footer />
     </div>
   </Router>
 )
}
 
export default App
```

PART 4: USER SEARCH FUNCTIONALITY

Github Context
Github Reducer

Setting Up Github Context and Reducer
Set up Context.js
Make SearchUsers() function
Add  GET_USERS dispatch
Setup Reducer.js
Add  GET_USERS dispatch to the reducer
Wrap App() with GithubProvider

GithubContext:

```
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
```
GithubReducer:

```
const githubReducer = (state, action) => {
   switch (action.type) {
       case 'GET_USERS':
           return {
               ...state,
               users: action.payload,
               loading: false
           }
       default:
           return state
   }
}
 
export default githubReducer
```
App:
```
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { GithubProvider } from './context/GithubContext'
 
function App() {
 
 return (
   <GithubProvider>
     < Router >
       <div className='flex flex-col justify-between h-screen'>
         <Navbar />
 
         <main className='container mx-auto px-3 pb-12'>
           <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/about' element={<About />} />
             <Route path='/notfound' element={<NotFound />} />
             <Route path='*' element={<NotFound />} />
           </Routes>
         </main>
 
         <Footer />
       </div>
     </Router >
   </GithubProvider>
 )
}
 
export default App
```

User Search

Searching Users
Make UserSearch.jsx
Use GithubContext to connect search input
Console.log search results

UserSearch: 
```
import { useContext, useState } from "react"
import GithubContext from "../../context/GithubContext"
 
function UserSearch() {
 
   const { searchUsers } = useContext(GithubContext)
   const [text, setText] = useState('')
 
   function handleChange(e) {
       setText(e.target.value)
   }
 
   function handleSubmit(e) {
       e.preventDefault()
       searchUsers(text)
       setText('')
   }
 
   return (
       <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
           <div>
               <form onSubmit={handleSubmit}>
                   <div className='form-control'>
                       <div className='relative'>
                           <input
                               type='text'
                               className='w-full pr-40 bg-gray-200 input input-lg text-black'
                               placeholder='Search'
                               value={text}
                               onChange={handleChange}
                           />
                           <button
                               type='submit'
                               className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                           >
                               Go
                           </button>
                       </div>
                   </div>
               </form>
           </div>
 
       </div>
   )
}
 
export default UserSearch
```
Home: 
```
import UserSearch from "../components/users/UserSearch"
 
function Home() {
   return (
       <div>
           <UserSearch />
       </div>
   )
}
 
export default Home
```
GithubContext:
```
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
   async function searchUsers(text) {
 
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
 
       console.log(items)
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
```

User Results
User Item

Displaying Search Results at Home Page
Make UserResults.jsx
Use GithubContext
Map users in UserResults 
Display raw results at home page
Make UserItem.jsx
Display the users with user cards

UserResults:

```
import { useContext } from 'react'
import GithubContext from '../../context/GithubContext'
import UserItem from '../users/UserItem'
 
function UserResults() {
 
   const { users } = useContext(GithubContext)
 
   return (
       <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
           {users.map((user) => (
               <UserItem key={user.id} user={user} />
           ))}
       </div>
   )
}
 
export default UserResults
```
UserItem: 
```
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
 
function UserItem({ user: { login, avatar_url } }) {
   return (
       <div className='card shadow-md compact side bg-base-100'>
           <div className='flex-row items-center space-x-4 card-body'>
               <div>
                   <div className='avatar'>
                       <div className='rounded-full shadow w-14 h-14'>
                           <img src={avatar_url} alt='Profile' />
                       </div>
                   </div>
               </div>
               <div>
                   <h2 className='card-title'>{login}</h2>
                   <Link
                       className='text-base-content text-opacity-40'
                       to={`/user/${login}`}
                   >
                       Visit Profile
                   </Link>
               </div>
           </div>
       </div>
   )
}
 
UserItem.protTypes = {
   user: PropTypes.object.isRequired
}
 
export default UserItem
```
Home:
```
import UserSearch from "../components/users/UserSearch"
import UserResults from "../components/users/UserResults"
 
function Home() {
   return (
       <div>
           <UserSearch />
           <UserResults />
       </div>
   )
}
 
export default Home
```

Clear the user results
Spinner

Clear Results
Clear the users
Set the Loading
Make Spinner.jsx

GithubContext: 
```
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
               loading: state.loading,
               searchUsers,
               clearUsers,
           }}
       >
           {children}
       </GithubContext.Provider>
   )
}
 
export default GithubContext

```
GithubReducer:

```
const githubReducer = (state, action) => {
   switch (action.type) {
       case 'GET_USERS':
           return {
               ...state,
               users: action.payload,
               loading: false
           }
       case 'CLEAR_USERS':
           return {
               ...state,
               users: []
           }
       case 'SET_LOADING':
           return {
               ...state,
               loading: true
           }
       default:
           return state
   }
}
 
export default githubReducer
```
Spinner: 
```
import spinner from './assets/spinner.gif'
 
function Spinner() {
   return (
       <div className='w-100 mt-20'>
           <img
               width={180}
               className='text-center mx-auto'
               src={spinner}
               alt='Loading...'
           />
       </div>
   )
}
 
export default Spinner
```
UserResults: 
```
import { useContext } from 'react'
import UserItem from '../users/UserItem'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/GithubContext'
 
function UserResults() {
 
   const { users, loading } = useContext(GithubContext)
 
   if (!loading) {
       return (
           <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
               {users.map((user) => (
                   <UserItem key={user.id} user={user} />
               ))}
           </div>
       )
   } else {
       return <Spinner />
   }
}
 
export default UserResults
```

PART 4: SINGLE USER SEARCH FUNCTIONALITY

User Page

Fetching and Displaying Single User Data
Get a single user data
User Page

App: 

```
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import User from './pages/User'
import { GithubProvider } from './context/GithubContext'
 
function App() {
 
 return (
   <GithubProvider>
     < Router >
       <div className='flex flex-col justify-between h-screen'>
         <Navbar />
 
         <main className='container mx-auto px-3 pb-12'>
           <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/about' element={<About />} />
             <Route path='/user/:login' element={<User />} />
             <Route path='/notfound' element={<NotFound />} />
             <Route path='*' element={<NotFound />} />
           </Routes>
         </main>
 
         <Footer />
       </div>
     </Router >
   </GithubProvider>
 )
}
 
export default App
```
GithubContext: 
```
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
```
GithubReducer:  
```
const githubReducer = (state, action) => {
   switch (action.type) {
       case 'GET_USERS':
           return {
               ...state,
               users: action.payload,
               loading: false
           }
       case 'GET_USER':
           return {
               ...state,
               user: action.payload,
               loading: false
           }
       case 'CLEAR_USERS':
           return {
               ...state,
               users: []
           }
       case 'SET_LOADING':
           return {
               ...state,
               loading: true
           }
       default:
           return state
   }
}
 
export default githubReducer
```
User:
```
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../components/layout/Spinner'
import GithubContext from '../context/GithubContext'
 
function User({ match }) {
 
   const { loading, getUser, user } = useContext(GithubContext)
 
   useEffect(() => {
       getUser(match.params.login)
   }, [])
 
   const {
       name,
       type,
       avatar_url,
       location,
       bio,
       blog,
       twitter_username,
       login,
       html_url,
       followers,
       following,
       public_repos,
       public_gists,
       hireable,
   } = user
 
   if (loading) {
       return <Spinner />
   }
 
   return (
       <>
           <div className='w-full mx-auto lg:w-10/12'>
               <div className='mb-4'>
                   <Link to='/' className='btn btn-ghost'>
                       Back To Search
                   </Link>
               </div>
 
               <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
                   <div className='custom-card-image mb-6 md:mb-0'>
                       <div className='rounded-lg shadow-xl card image-full'>
                           <figure>
                               <img src={avatar_url} alt='' />
                           </figure>
                           <div className='card-body justify-end'>
                               <h2 className='card-title mb-0'>{name}</h2>
                               <p>{login}</p>
                           </div>
                       </div>
                   </div>
 
                   <div className='col-span-2'>
                       <div className='mb-6'>
                           <h1 className='text-3xl card-title'>
                               {name}
                               <div className='ml-2 mr-1 badge badge-success'>{type}</div>
                               {hireable && (
                                   <div className='mx-1 badge badge-info'>Hireable</div>
                               )}
                           </h1>
                           <p>{bio}</p>
                           <div className='mt-4 card-actions'>
                               <a
                                   href={html_url}
                                   target='_blank'
                                   rel='noreferrer'
                                   className='btn btn-outline'
                               >
                                   Visit Github Profile
                               </a>
                           </div>
                       </div>
 
                       <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
                           {location && (
                               <div className='stat'>
                                   <div className='stat-title text-md'>Location</div>
                                   <div className='text-lg stat-value'>{location}</div>
                               </div>
                           )}
                           {blog && (
                               <div className='stat'>
                                   <div className='stat-title text-md'>Website</div>
                                   <div className='text-lg stat-value'>
                                       <a
                                           href={`https://${blog}`}
                                           target='_blank'
                                           rel='noreferrer'
                                       >
                                           {blog}
                                       </a>
                                   </div>
                               </div>
                           )}
                           {twitter_username && (
                               <div className='stat'>
                                   <div className='stat-title text-md'>Twitter</div>
                                   <div className='text-lg stat-value'>
                                       <a
                                           href={`https://twitter.com/${twitter_username}`}
                                           target='_blank'
                                           rel='noreferrer'
                                       >
                                           {twitter_username}
                                       </a>
                                   </div>
                               </div>
                           )}
                       </div>
                   </div>
               </div>
 
               <div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
                   <div className='stat'>
                       <div className='stat-figure text-secondary'>
                           <FaUsers className='text-3xl md:text-5xl' />
                       </div>
                       <div className='stat-title pr-5'>Followers</div>
                       <div className='stat-value pr-5 text-3xl md:text-4xl'>
                           {followers}
                       </div>
                   </div>
 
                   <div className='stat'>
                       <div className='stat-figure text-secondary'>
                           <FaUserFriends className='text-3xl md:text-5xl' />
                       </div>
                       <div className='stat-title pr-5'>Following</div>
                       <div className='stat-value pr-5 text-3xl md:text-4xl'>
                           {following}
                       </div>
                   </div>
 
                   <div className='stat'>
                       <div className='stat-figure text-secondary'>
                           <FaCodepen className='text-3xl md:text-5xl' />
                       </div>
                       <div className='stat-title pr-5'>Public Repos</div>
                       <div className='stat-value pr-5 text-3xl md:text-4xl'>
                           {public_repos}
                       </div>
                   </div>
 
                   <div className='stat'>
                       <div className='stat-figure text-secondary'>
                           <FaStore className='text-3xl md:text-5xl' />
                       </div>
                       <div className='stat-title pr-5'>Public Gists</div>
                       <div className='stat-value pr-5 text-3xl md:text-4xl'>
                           {public_gists}
                       </div>
                   </div>
               </div>
           </div>
       </>
   )
}
 
export default User
```
UserItem: 
```
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
 
function UserItem({ user: { login, avatar_url } }) {
   return (
       <div className='card shadow-md compact side bg-base-100'>
           <div className='flex-row items-center space-x-4 card-body'>
               <div>
                   <div className='avatar'>
                       <div className='rounded-full shadow w-14 h-14'>
                           <img src={avatar_url} alt='Profile' />
                       </div>
                   </div>
               </div>
               <div>
                   <h2 className='card-title'>{login}</h2>
                   <Link
                       className='text-base-content text-opacity-40'
                       to={`/user/${login}`}
                   >
                       Visit Profile
                   </Link>
               </div>
           </div>
       </div>
   )
}
 
UserItem.protTypes = {
   user: PropTypes.object.isRequired
}
 
export default UserItem
```
index.css: 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
 
.custom-card-image .card.image-full:before {
   border-radius: 0.5rem;
   opacity: 0.45;
}
```

Repo List
Repo Item

Get user repos
Repo List
Repo Item
Display user repos in user page

GithubContext: 
```
import { createContext, useReducer } from 'react'
import { createRenderer } from 'react-dom/test-utils'
import githubReducer from './GithubReducer'
 
const GithubContext = createContext()
 
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
 
export function GithubProvider({ children }) {
 
   // State tracker
   const initialState = {
       users: [],
       user: {},
       repos: [],
       repo: {},
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
 
   // Get repos
   async function getUserRepos(login) {
 
       setLoading()
 
       const params = new URLSearchParams({
           sort: 'created',
           per_page: 10
       })
 
       const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
           headers: {
               Authorization: `token ${GITHUB_TOKEN}`,
           },
       })
 
       const data = await response.json()
 
       dispatch({
           type: 'GET_REPOS',
           payload: data
       })
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
               repos: state.repos,
               loading: state.loading,
               searchUsers,
               clearUsers,
               getUser,
               getUserRepos
           }}
       >
           {children}
       </GithubContext.Provider>
   )
}
 
export default GithubContext
```
GithubReducer: 
```
const githubReducer = (state, action) => {
   switch (action.type) {
       case 'GET_USERS':
           return {
               ...state,
               users: action.payload,
               loading: false
           }
       case 'GET_USER':
           return {
               ...state,
               user: action.payload,
               loading: false
           }
       case 'GET_REPOS':
           return {
               ...state,
               repos: action.payload,
               loading: false
           }
       case 'CLEAR_USERS':
           return {
               ...state,
               users: []
           }
       case 'SET_LOADING':
           return {
               ...state,
               loading: true
           }
       default:
           return state
   }
}
 
export default githubReducer
```
RepoList: 
```
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'
 
function RepoList({ repos }) {
   return (
       <div className='rounded-lg shadow-lg card bg-base-100'>
           <div className='card-body'>
               <h2 className='text-3xl my-4 font-bold card-title'>
                   Latest Respositories
               </h2>
               {repos.map((repo) => (
                   <RepoItem key={repo.id} repo={repo} />
               ))}
           </div>
       </div>
   )
}
 
RepoList.propTypes = {
   repos: PropTypes.array.isRequired
}
 
export default RepoList
```
RepoItem: 
```
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
import PropTypes from 'prop-types'
 
function RepoItem({ repo }) {
 
   const {
       name,
       description,
       html_url,
       forks,
       open_issues,
       watchers_count,
       stargazers_count,
   } = repo
 
   return (
       <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
           <div className='card-body'>
               <h3 className='mb-2 text-xl font-semibold'>
                   <a href={html_url}>
                       <FaLink className='inline mr-1' /> {name}
                   </a>
               </h3>
               <p className='mb-3'>{description}</p>
               <div>
                   <div className='mr-2 badge badge-info badge-lg'>
                       <FaEye className='mr-2' /> {watchers_count}
                   </div>
                   <div className='mr-2 badge badge-success badge-lg'>
                       <FaStar className='mr-2' /> {stargazers_count}
                   </div>
                   <div className='mr-2 badge badge-error badge-lg'>
                       <FaInfo className='mr-2' /> {open_issues}
                   </div>
                   <div className='mr-2 badge badge-warning badge-lg'>
                       <FaUtensils className='mr-2' /> {forks}
                   </div>
               </div>
           </div>
       </div>
   )
}
 
RepoItem.propTypes = {
   repo: PropTypes.object.isRequired
}
 
export default RepoItem
```
User: 
```
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../components/layout/Spinner'
import RepoList from '../components/repo/RepoList'
import GithubContext from '../context/GithubContext'
 
function User({ match }) {
 
   const { loading, user, getUser, repos, getUserRepos } = useContext(GithubContext)
 
   useEffect(() => {
       getUser(match.params.login)
       getUserRepos(match.params.login)
   }, [])
 
   const {
       name,
       type,
       avatar_url,
       location,
       bio,
       blog,
       twitter_username,
       login,
       html_url,
       followers,
       following,
       public_repos,
       public_gists,
       hireable,
   } = user
 
   if (loading) {
       return <Spinner />
   }
 
   return (
       <>
           <div className='w-full mx-auto lg:w-10/12'>
               <div className='mb-4'>
                   <Link to='/' className='btn btn-ghost'>
                       Back To Search
                   </Link>
               </div>
 
               <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
                   <div className='custom-card-image mb-6 md:mb-0'>
                       <div className='rounded-lg shadow-xl card image-full'>
                           <figure>
                               <img src={avatar_url} alt='' />
                           </figure>
                           <div className='card-body justify-end'>
                               <h2 className='card-title mb-0'>{name}</h2>
                               <p>{login}</p>
                           </div>
                       </div>
                   </div>
 
                   <div className='col-span-2'>
                       <div className='mb-6'>
                           <h1 className='text-3xl card-title'>
                               {name}
                               <div className='ml-2 mr-1 badge badge-success'>{type}</div>
                               {hireable && (
                                   <div className='mx-1 badge badge-info'>Hireable</div>
                               )}
                           </h1>
                           <p>{bio}</p>
                           <div className='mt-4 card-actions'>
                               <a
                                   href={html_url}
                                   target='_blank'
                                   rel='noreferrer'
                                   className='btn btn-outline'
                               >
                                   Visit Github Profile
                               </a>
                           </div>
                       </div>
 
                       <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
                           {location && (
                               <div className='stat'>
                                   <div className='stat-title text-md'>Location</div>
                                   <div className='text-lg stat-value'>{location}</div>
                               </div>
                           )}
                           {blog && (
                               <div className='stat'>
                                   <div className='stat-title text-md'>Website</div>
                                   <div className='text-lg stat-value'>
                                       <a
                                           href={`https://${blog}`}
                                           target='_blank'
                                           rel='noreferrer'
                                       >
                                           {blog}
                                       </a>
                                   </div>
                               </div>
                           )}
                           {twitter_username && (
                               <div className='stat'>
                                   <div className='stat-title text-md'>Twitter</div>
                                   <div className='text-lg stat-value'>
                                       <a
                                           href={`https://twitter.com/${twitter_username}`}
                                           target='_blank'
                                           rel='noreferrer'
                                       >
                                           {twitter_username}
                                       </a>
                                   </div>
                               </div>
                           )}
                       </div>
                   </div>
               </div>
 
               <div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
                   <div className='stat'>
                       <div className='stat-figure text-secondary'>
                           <FaUsers className='text-3xl md:text-5xl' />
                       </div>
                       <div className='stat-title pr-5'>Followers</div>
                       <div className='stat-value pr-5 text-3xl md:text-4xl'>
                           {followers}
                       </div>
                   </div>
 
                   <div className='stat'>
                       <div className='stat-figure text-secondary'>
                           <FaUserFriends className='text-3xl md:text-5xl' />
                       </div>
                       <div className='stat-title pr-5'>Following</div>
                       <div className='stat-value pr-5 text-3xl md:text-4xl'>
                           {following}
                       </div>
                   </div>
 
                   <div className='stat'>
                       <div className='stat-figure text-secondary'>
                           <FaCodepen className='text-3xl md:text-5xl' />
                       </div>
                       <div className='stat-title pr-5'>Public Repos</div>
                       <div className='stat-value pr-5 text-3xl md:text-4xl'>
                           {public_repos}
                       </div>
                   </div>
 
                   <div className='stat'>
                       <div className='stat-figure text-secondary'>
                           <FaStore className='text-3xl md:text-5xl' />
                       </div>
                       <div className='stat-title pr-5'>Public Gists</div>
                       <div className='stat-value pr-5 text-3xl md:text-4xl'>
                           {public_gists}
                       </div>
                   </div>
               </div>
               <RepoList repos={repos} />
           </div>
       </>
   )
}
 
export default User
```


PART 5: ALERT FUNCTIONALITY

Alert Context
Alert Reducer
Alert Component


App: 

```
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Alert from './components/layout/Alert'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import User from './pages/User'
import { GithubProvider } from './context/GithubContext'
import { AlertProvider } from './context/AlertContext'
 
function App() {
 
 return (
   <GithubProvider>
     <AlertProvider>
       < Router >
         <div className='flex flex-col justify-between h-screen'>
           <Navbar />
 
           <main className='container mx-auto px-3 pb-12'>
             <Alert />
             <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/about' element={<About />} />
               <Route path='/user/:login' element={<User />} />
               <Route path='/notfound' element={<NotFound />} />
               <Route path='*' element={<NotFound />} />
             </Routes>
           </main>
 
           <Footer />
         </div>
       </Router >
     </AlertProvider>
   </GithubProvider>
 )
}
 
export default App
```
AlertContext: 
```
import { createContext, useReducer } from 'react'
import AlertReducer from './AlertReducer'
 
const AlertContext = createContext()
 
export function AlertProvider({ children }) {
 
   const initialState = null
 
   const [state, dispatch] = useReducer(AlertReducer, initialState)
 
   // Set an alert
   function setAlert(msg, type) {
       dispatch({
           type: 'SET_ALERT',
           payload: { msg, type }
       })
 
       setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000)
   }
 
   return (
       <AlertContext.Provider
           value={{
               alert: state,
               setAlert
           }}
       >
           {children}
       </AlertContext.Provider >
   )
}
 
export default AlertContext
```

AlertReducer: 

```
function AlertReducer(state, action) {
   switch (action.type) {
       case 'SET_ALERT':
           return action.payload
       case 'REMOVE_ALERT':
           return null
       default:
           return state
   }
}
 
export default AlertReducer
```
Alert: 
```
import { useContext } from 'react'
import AlertContext from '../../context/AlertContext'
 
function Alert() {
 
   const { alert } = useContext(AlertContext)
 
   return (
       alert !== null && (
           <p className='flex items-start mb-4 space-x-2'>
               {alert.type === 'error' && (
                   <svg
                       className='w-6 h-6 flex-none mt-0.5'
                       fill='none'
                       viewBox='0 0 24 24'
                   >
                       <circle cx='12' cy='12' r='12' fill='#FECDD3'></circle>
                       <path
                           d='M8 8l8 8M16 8l-8 8'
                           stroke='#B91C1C'
                           strokeWidth='2'
                       ></path>
                   </svg>
               )}
               <p className='flex-1 text-base font-semibold leading-7 text-white'>
                   <strong>{alert.msg}</strong>
               </p>
           </p>
       )
   )
}
 
export default Alert
```
UserSearch:
 ```
import { useContext, useState } from "react"
import GithubContext from "../../context/GithubContext"
import AlertContext from '../../context/AlertContext'
 
function UserSearch() {
 
   const { users, searchUsers, clearUsers } = useContext(GithubContext)
   const [text, setText] = useState('')
 
   const { setAlert } = useContext(AlertContext)
 
   function handleChange(e) {
       setText(e.target.value)
   }
 
   function handleSubmit(e) {
       e.preventDefault()
 
       if (text === '') {
           setAlert('Please enter something')
       } else {
           searchUsers(text)
           setText('')
       }
 
   }
 
   return (
       <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
           <div>
               <form onSubmit={handleSubmit}>
                   <div className='form-control'>
                       <div className='relative'>
                           <input
                               type='text'
                               className='w-full pr-40 bg-gray-200 input input-lg text-black'
                               placeholder='Search'
                               value={text}
                               onChange={handleChange}
                           />
                           <button
                               type='submit'
                               className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                           >
                               Go
                           </button>
                       </div>
                   </div>
               </form>
           </div>
           {users.length > 0 && (
               <div>
                   <button onClick={clearUsers} className='btn btn-ghost btn-lg'>
                       Clear
                   </button>
               </div>
           )}
       </div>
   )
}
 
export default UserSearch
```

