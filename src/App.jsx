//JSX =JavaScript + XML (HTML)
import { Header } from './components/Header';
import { Post } from './Post';

export function App() {
  return (
    <div> 

      <Header />
      
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
    </div>
  )
}
