import styles from "./comments.module.css";

export function Comments() {
  return (
    <div className={styles.comments}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1066/1066421.png"
        alt="profile-author"
      />
      <div>
        <div className={styles.commentsContent}>
          <header>
            <div>
            <strong>Experiência 1</strong>
            </div>
          </header>
          <p>insira sua experiência</p>
        </div>
      </div>
    </div>
  );
}
