import {Header} from './Components/Header'
import { Post } from './Components/Post'
import {Sidebar} from './Components/Sidebar'
import './styles.global.css'
import styles from './app.module.css'


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
      <main>
        <Post />
      </main>
      </div>
      </div>

    
  )
}
