import styles from './post.module.css';



export function Post() {
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}  >
                <img className={styles.avatar} src="https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png" alt="" />
            <div className={styles.authorInfo}>
                <strong >Nome do Profissional</strong>
                <span>Cargo/Função</span>
            </div>
            </div>
        </header>
        <div>
            <p>Sobre Você</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore dolorum cupiditate non, quod perspiciatis earum accusamus provident itaque voluptatum. Autem voluptatum pariatur quis perferendis facilis amet officiis vel harum, sit ipsam eum aliquid illo illum, dolores ullam exercitationem facere voluptatem, repellat sunt. Minima fugiat tenetur expedita atque praesentium optio nobis?</p>

            <p><a href="">Link Repositórios</a></p>
            <p><a href="">Último Projeto</a></p>
        
        </div>
    </article>
  )
}