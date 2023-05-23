//JSX =JavaScript + XML (HTML)
import { Header } from './components/Header';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div> 
      <Header />
      
      <div className={styles.wrapper}>

      <Sidebar />
        <main>
        <Post 
      author="Leticia Barros"
      content="Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem "/>
      <Post 
      author="Leticia Barros"
      content="Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem "/>
      <Post 
      author="Leticia Barros"
      content="Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem "/>
      <Post />
      <Post />
        </main>
      </div>  
    </div>
  )
}
