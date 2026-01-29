
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Products from './Products'
import Insert from './CRUD/Insert'
import Delete from './CRUD/Delete'

const App = () => {
  return (
    <>
      <Delete />
      {/* <Insert /> */}
      <Routes>
        {/* <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/product' element={<Products />} /> */}
      </Routes>

    </>
  )
}

export default App