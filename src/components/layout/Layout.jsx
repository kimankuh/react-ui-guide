import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.scss'// module을 사용하면 css의 클래스들은 모두 객체 취급을 받게됨 ex) className={style.layout}

// Router "Outlet" 사용 예제
const Layout = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}


// Router "children" 사용 예제
// const Layout = ({ children }) => {
//     return (
//         <div className={styles.layout}>
//             <div className={styles.main}>
//                 <Header />
//                 <div className={styles.content}>
//                     {children}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     )
// }

export default Layout