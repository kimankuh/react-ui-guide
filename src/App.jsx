import GlobalStyle from "./styles/GlobalStyle"// 프로젝트의 뿌리가 되는 곳에 딱 한 번만 선언하면 됨. 모든 컴포넌트에 적용됨.
import Routers from "./router/Routers"

function App() {
    return (     
        <>
            <GlobalStyle /> {/* 컴포넌트 최상단에 위치시켜 모든 요소에 적용 */}
            <Routers />
        </>
    )
}

export default App
