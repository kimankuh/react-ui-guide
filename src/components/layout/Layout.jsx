import styles from './Layout.module.scss';// module을 사용하면 css의 클래스들은 모두 객체 취급을 받게됨 ex) className={style.layout}
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <div className={styles.main}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout