import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* react router 기능을 전체 앱에 적용. BrowserRouter => 페이지 이동 기능을 제공 */}
    <HashRouter>
        {/* 앱 전체 */}
        <App />
    </HashRouter>
  </StrictMode>,
)
