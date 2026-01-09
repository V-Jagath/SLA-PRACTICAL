
import { Route, Routes } from 'react-router-dom'
import Register from './mock/Form/Register'
import Login from './mock/Form/Login'
import Admin from './mock/Form/Admin'
import User from './mock/Form/User'
import RegisterForm from './form/RegisterForm'

const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={<User />} />
        <Route path='/admin' element={<Admin />} />
      </Routes> */}

      <Routes>
        <Route path='/' element={<RegisterForm />} />
      </Routes>

    </>
  )
}

export default App