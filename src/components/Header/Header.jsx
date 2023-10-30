import styles from './Header.module.css'
const Header =()=>{
    return(
        <>
        <div className={`container ${styles.nav}`}>
            <div className={styles.logo}>
            <img src="../../../public/images/Frame 2 1.png" alt=" Logo"/>
            </div>
            <div>
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
            </div>
        </div>
        </>
    );
};
export default Header;