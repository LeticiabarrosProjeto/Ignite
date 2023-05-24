//JSX =JavaScript + XML (HTML)
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
         id: 1,
         author:{
         avatarUrl:'https://github.com/LeticiabarrosProjeto.png',
         name: 'Leticia Barros',
         role:'Web Developer', 
  },
         content: [
    { type: 'paragraph', content: 'Fala Galera 👋🏻',}, 
    { type: 'paragraph', content: 'Acabei de subor mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da'},
    { type: 'paragraph', content:  'Rocketseat. O nome do projeto é DoctorCare.'},
    { type: 'link', content:'ane.design/doctorcare'},
  ],
         publishedAt: new Date('2023-05-24 16:00:00'),
 },
  {
    id: 2,
      author:{
      avatarUrl:'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      name: 'Hector Barros',
      role:'Back-end developer', 
  },
  content: [
    { type: 'paragraph', content: 'Fala Galera 👋🏻',}, 
    { type: 'paragraph', content: 'Acabei de subor mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da'},
    { type: 'paragraph', content:  'Rocketseat. O nome do projeto é DoctorCare.'},
    { type: 'link', content:'ane.design/doctorcare'},
  ],
  publishedAt: new Date('2023-05-23 18:00:00'),
 },
];
 



export function App() {
  return (
    <div> 
      <Header />
      
      <div className={styles.wrapper}>

      <Sidebar />
        <main>
        {posts.map(post => {
          return (
           <Post 
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
           />
          )
        })}
        </main>
      </div>  
    </div>
  )
}
