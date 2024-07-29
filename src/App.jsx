import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './Components/navbar/Navbar'
import Landing from './Components/LandingPage/Landing'


function App() {
 
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
    {/* Let your routes come in here */}
    <h1>Employment edge!!!</h1>
    </BrowserRouter>
  )
}

export default App
