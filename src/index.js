import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Provider from './context/FirestoreContext'
import AuthProvider from './context/AuthContext'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import Single from './components/Single'
import 'bootstrap-icons/font/bootstrap-icons.css'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/images/:id' element={<Single />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider>
        <Router>
          <Layout>
            <AppRoutes />
          </Layout>
        </Router>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
