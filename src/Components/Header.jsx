import styles from './header.module.css'

export function Header() {
  return (
    
    <header className={styles.header}>

        <img src='https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png' alt='logo-React' />

        <strong>E-Curriculo Profissional</strong>

    </header>
  )
}