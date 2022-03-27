import styles from './Header.module.css'

export default function Header() {
    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.logo}>the<strong>Doguinhos</strong></h1>
            </div>
        </div>
    )
}