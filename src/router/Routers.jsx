import { Routes, Route } from "react-router-dom"
// 페이지
import Layout from "../components/layout/Layout"
import Home from "../pages/Home/Home"
import ButtonPage from "../pages/Button/ButtonPage"
import RadioPage from "../pages/RadioPage/RadioPage"
import CheckboxPage from "../pages/CheckboxPage/CheckboxPage"
import InputPage from "../pages/InputPage/InputPage"
import TextareaPage from "../pages/TextareaPage/TextareaPage"
import DropdownPage from "../pages/DropdownPage/DropdownPage"
import ModalPage from "../pages/ModalPage/ModalPage"
import AccordionPage from "../pages/AccordionPage/AccordionPage"

const Routers = () => {
    return (

        // Router "Outlet" 사용 예제
        // 모든 페이지의 공통 구조
        <Routes>
            {/* Outlet tip : Layout 외부 Route의 컴포넌트들은 Layout이 갖고있는 header 컴포넌트 등을 표시하지 않음 */}
            {/* <Route path="/" element={<AccordionPage />} />
            <Route path="/" element={<AccordionPage />} /> */}

            {/* 공통 Layout */}
            <Route element={<Layout />}>
                {/* Outlet tip : 중첩라우팅. Layout 내부에 들어가있는 페이지들은 Layout에 포함된 컴포넌트들을 함게 표시함 */}
                <Route path="/" element={<Home />} />
                <Route path="/button" element={<ButtonPage />} />
                <Route path="/input" element={<InputPage />} />
                <Route path="/radio" element={<RadioPage />} />              
                <Route path="/checkbox" element={<CheckboxPage />} />              
                <Route path="/textarea" element={<TextareaPage />} />
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

export default Routers