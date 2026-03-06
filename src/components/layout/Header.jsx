import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = ({}) => {
    const menus = [
        {
            name: 'Home',// 메뉴명
            path: '/',// 라우터 경로
            end: true,// 경로가 정확히 '/'일때만 active
        },
        {name: 'Dropdown', path: '/dropdown'},
        {name: 'Modal', path: '/modal'},
        {name: 'Accordion', path: '/accordion'}
    ]
    return (
        <div className={styles.header}>{/* css module 사용시 대시가 포함된 경우 대괄호+따옴표(styles["ui-header"])로 묶기. js 내부에 작성된 문자열이니까. */}
            <h1 className={styles.h1}>React Guide</h1>

            <nav>
                <ul className={styles.sidebar}>
                    <li className={styles["sidebar-item"]}>
                        {/* NavLink는 현재 경로가 일치하면 isActive prop이 제공되어 active 클래스를 줄 수 있음 - NavLink는 함수에 객체를 전달함 */}
                        {/* 경로를 '/'만 사용하면 모든 메뉴의 '/'와 겹치기 때문에 정확히 일치해야함이 요구되는 경우 'end' 옵션을 추가 */}
                        <NavLink to="/" className={({ isActive }) => `${styles["sidebar-link"]} ${isActive ? styles.active : ''}`}>Home</NavLink>
                    </li>
                    <li className={styles["sidebar-item"]}>
                        <NavLink to="/" className={styles["sidebar-link"]}>Home</NavLink>
                    </li>
                    <li className={styles["sidebar-item"]}>
                        <NavLink to="/dropdown" className={styles["sidebar-link"]}>Dropdown</NavLink>
                    </li>
                    <li className={styles["sidebar-item"]}>
                        <NavLink to="/modal" className={styles["sidebar-link"]}>Modal</NavLink>
                    </li>
                    <li className={styles["sidebar-item"]}>
                        <NavLink to="/accordion" className={styles["sidebar-link"]}>Accordion</NavLink>
                    </li>
                    <li className={styles["sidebar-item"]}>
                        <Link to="/etc" className={styles["sidebar-link"]}>일반 링크</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header