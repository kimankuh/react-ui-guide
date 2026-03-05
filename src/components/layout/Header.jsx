import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = ({}) => {
    return (
        <div className={styles.header}>{/* css module 사용시 대시가 포함된 경우 대괄호+따옴표(styles["ui-header"])로 묶기. js 내부에 작성된 문자열이니까. */}
            <h1>React Guide</h1>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dropdown">Dropdown</Link></li>
                    <li><Link to="/modal">Modal</Link></li>
                    <li><Link to="/accordion">Accordion</Link></li>
                </ul>
                
                
                
                
            </nav>
        </div>
    )
}

export default Header