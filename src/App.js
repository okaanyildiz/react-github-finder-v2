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