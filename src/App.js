import React,{useState} from 'react'
import { Routes,Route } from 'react-router'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import History from './Components/History'
import WordPage from './Components/WordPage'

const App = () => {
  const [search,setSearch] = useState("");
  return (
    <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home search={search} setSearch={setSearch}/>}/>
          <Route path='/history' element={<History setSearch={setSearch}/>}/>
          <Route path= {`/word/:${search}`} element={<WordPage search={search}/>}/>
        </Routes>
    </div>
  )
}

export default App