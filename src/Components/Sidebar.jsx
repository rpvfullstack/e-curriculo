import styles from './sidebar.module.css';


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1625535069654-cfeb8f829088?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagem-Sidebar" />
        <div className={styles.profile}>
            <img className={styles.avatar} src="https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png" alt="imagem-Avatar" />
            <strong>Seu nome</strong>
            <span>Profissão</span>
        </div>

        <footer>
            <a href="">@seugitHub</a>
        </footer>

    </aside>
  )
}