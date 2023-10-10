
import styles from './header.module.css';
function Header () {
    return(
        <div className = {styles.header}>
            <div className = {styles.container}>
                <div className = {styles.title}> Albion Secret </div>
                <div className ={styles.menuText}> Home </div>
            </div>
        </div>
    );
}

export default Header;