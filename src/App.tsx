import React from "react"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/app/Header'
import { setAuthAction, setUserTokenAction } from './core/store/actions/auth'
import AuthAPI from './core/store/api/auth'
import { AppStateType } from './core/store/store'
import NotFound from './pages/404'
import HomePage from './pages/Home'
import LevelPage from './pages/Level'
import ProfilePage from './pages/Profile'

// const pages = import.meta.globEager('./pages/*.jsx')

// const routes = Object.keys(pages).map((path) => {
//   const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1]
//   return {
//     name,
//     path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
//     component: pages[path].default
//   }
// })

function App() {
  const dispatch = useDispatch()
  const { isLoader } = useSelector((state: AppStateType) => state.AuthReducer)

  useEffect(() => {
    AuthAPI.checkauth().then(res => {
      if (res.isAuth) dispatch(setUserTokenAction({email: res.email, id: res.id}))
      dispatch(setAuthAction(res.isAuth))
    })
  }, [])

  return (
    <Router basename={process.env.PUBLIC_URL}>
      { !isLoader ? <Header /> : "" }
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/profile/:id">
          <ProfilePage />
        </Route>
        <Route path="/level">
          <LevelPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
