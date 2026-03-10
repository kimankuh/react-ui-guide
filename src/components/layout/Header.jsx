import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = ({}) => {
    // 메뉴 데이터. map구조.
    const menus = [
        {
            name: 'Home',// 메뉴명
            path: '/',// 라우터 경로
            end: true,// React Router 전용 옵션. url과 to값이 정확히 일치할때만 active
        },
        {name: 'Button', path: '/button'},
        {name: 'Input', path: '/input'},
        {name: 'Textarea', path: '/textarea'},
        {name: 'Radio', path: '/radio'},
        {name: 'Radio Group', path: '/radioGroup'},
        {name: 'Checkbox', path: '/checkbox'},
        {name: 'Custom Checkbox', path: '/customCheckbox'},
        {name: 'Custom Checkbox 2', path: '/customCheckbox2'},
        {name: 'Custom Checkbox Group', path: '/customCheckboxGroup'},
        {name: 'Select', path: '/select'},
        {name: 'Custom Select', path: '/customSelect'},
        {name: 'Accordion', path: '/accordion'},
        {name: 'Tab', path: '/tab'},
        {name: 'Dropdown', path: '/dropdown'},
        {name: 'Modal Popup', path: '/modalPopup'},
        {name: 'Modal Popup 2', path: '/modalPopup2'},
    ]
    return (
        <div className={styles.header}>{/* css module 사용시 대시가 포함된 경우 대괄호+따옴표(styles["ui-header"])로 묶기. js 내부에 작성된 문자열이니까. */}
            <h1 className={styles.h1}>React<br/>Guide</h1>

            <nav>
                <ul className={styles.sidebar}>
                    {menus.map((menu) => (
                        <li key={menu.path} className={styles["sidebar-item"]}>
                            <NavLink to={menu.path} end={menu.end} className={({ isActive }) => `${styles["sidebar-link"]} ${isActive ? styles.active : ''}`}>{menu.name}</NavLink>
                        </li>
                    ))}

                    {/* 메뉴 링크 - 배열x */}
                    <li className={styles["sidebar-item"]}>
                        {/* NavLink는 현재 경로가 일치하면 isActive prop이 제공되어 active 클래스를 줄 수 있음 - NavLink는 함수에 객체를 전달함 */}
                        {/* 경로를 '/'만 사용하면 모든 메뉴의 '/'와 겹치기 때문에 정확히 일치해야함이 요구되는 경우 'end' 옵션을 추가 */}
                        <NavLink to="/" className={({ isActive }) => `${styles["sidebar-link"]} ${isActive ? styles.active : ''}`}>Home</NavLink>
                    </li>
                
                    {/* 그냥 링크 */}
                    <li className={styles["sidebar-item"]}>
                        <Link to="/etc" className={styles["sidebar-link"]}>링크</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header