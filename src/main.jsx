import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HashRouter } from 'react-router-dom' // Github pages 사용시 => router에 '/' 경로를 사용하려면. vite.config.js 파일엔 /react-ui-guide/ 이렇게 설정되어있어 '/'를 사용할 수 없기때문
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import './styles/global.scss'
import './components/layout/layout.module.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* react router 기능을 전체 앱에 적용. BrowserRouter => 페이지 이동 기능을 제공 */}
    {/* Github pages 사용시 'HashRouter'를 사용하지 않고 'BrowserRouter'를 유지하려면 basename="/react-ui-guide" 추가 */}
    <BrowserRouter basename="/react-ui-guide">
        {/* 앱 전체 */}
        <App />
    </BrowserRouter>
  </StrictMode>,
)
