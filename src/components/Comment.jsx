import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(){
   return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/LeticiabarrosProjeto.png" alt='' /> 

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
           <header>
            <div className={styles.authorAndTime}>
                <strong>Hector Henrique</strong>
                <time title="23 de Maio às 13:11h" dateTime="2023-05-11 13:11:20">Cerca de 1h atrás</time>
            </div>

             <button title='Deletar comentário'>
                 <Trash size={24}/>
             </button>
           </header>

           <p>Muito bom Devon, Parabéns. </p>
        </div>
         <footer>
           <button>
             <ThumbsUp />
             Aplaudir <span>20</span>
           </button>
         </footer>
      </div>
    </div>
   )
}