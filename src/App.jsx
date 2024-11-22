import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './Components/Dashboard'
import { Productos } from './Components/Productos'

export function App() {
  return (    
      <Routes>
        <Route path='/' element={<Dashboard/>}/>        
        <Route path="/productos" element={<Productos/>} />
      </Routes>   
  )
}


