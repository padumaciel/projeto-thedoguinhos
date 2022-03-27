import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div>
            <div className={styles.footer}>
                <p className={styles.texto1}>Não compre seu pet, <strong>adote</strong>!</p>
                <p className={styles.texto2}>Desenvolvido por <strong>Paula Eduarda Maciel</strong></p>
            </div>
        </div>
    )
}