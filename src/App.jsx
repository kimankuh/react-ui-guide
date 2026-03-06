import { Routes, Route } from "react-router-dom"

// import { useState } from 'react'


// 공통 레이아웃
import Layout from "./components/layout/Layout"
import './styles/global.scss'

// 페이지
import Home from "./pages/Home"
import DropdownPage from "./pages/DropdownPage"
import ModalPage from "./pages/ModalPage"
import AccordionPage from "./pages/AccordionPage"

function App() {

    return (
        
        // Router "Outlet" 사용 예제
        // 모든 페이지의 공통 구조
        <Routes>
            {/* 공통 Layout */}
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/dropdown" element={<DropdownPage />} />
                <Route path="/modal" element={<ModalPage />} />
                <Route path="/accordion" element={<AccordionPage />} />            
            </Route>
        </Routes>


        // Router "children" 사용 예제 
        // 모든 페이지의 공통 구조
        // <Layout>
        //     {/* 페이지 라우팅 영역 */}
        //     <Routes>
        //         {/* 메인 페이지 */}
        //         <Route path="/" element={<Home />} />

        //         {/* 컴포넌트 페이지 */}
        //         <Route path="/dropdown" element={<DropdownPage />} />
        //         <Route path="/modal" element={<ModalPage />} />
        //         <Route path="/accordion" element={<AccordionPage />} />
        //     </Routes>
        // </Layout>
    )
}

export default App
