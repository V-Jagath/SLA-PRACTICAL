
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Products from './Products'
import Insert from './CRUD/Insert'

const App = () => {
  return (
    <>
      <Insert />
      <Routes>
        {/* <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/product' element={<Products />} /> */}
      </Routes>

    </>
  )
}

export default App