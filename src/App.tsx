import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RedirectPage from './pages/RedirectPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path='/redirect' element={<RedirectPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='*' element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
