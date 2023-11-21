import { useDispatch, useSelector } from 'react-redux';
import Navigation from './components/Navigation';
import HomeUnAuthed from './pages/Home/HomeUnAuthed';
import HomeAuthed from './pages/Home/HomeAuthed';
import { asyncUnsetAuthUser } from './redux/authUser/action';
import { useEffect } from 'react';
import { asyncSetPreload } from './redux/isPreload/action';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Index';
import Register from './pages/Register';
import Footer from './components/Footer';
import ThreadDetail from './pages/ThreadDetail';


function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncSetPreload())
  }, [dispatch])

  const onLogOut = () => {
    dispatch(asyncUnsetAuthUser())
  }

  if(isPreload) {
    return null
  }

  if(authUser === null) {
    return (
      <>
        <Navigation btnName='Need Login'/>
        <main>
          <Routes>
            <Route path='/*' element={<HomeUnAuthed />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
          </Routes>
        </main>
        <Footer />
      </>
    )
  }
  return (
    <>
      <Navigation btnName='Logout' logout={onLogOut}/>
      <main>
        <Routes>
          <Route path='/' element={<HomeAuthed />}/>
          <Route path='/threads/:id' element={<ThreadDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
