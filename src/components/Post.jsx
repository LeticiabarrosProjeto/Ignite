import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';
import { useState } from 'react';


export function Post({author, publishedAt, content}) {
const [comments, setComments] = useState([
  'Post muito bacana, hein?!'
])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { 
    locale: ptBR,
    addSuffix: true,
  })

  //novos comentários 
    function handleCreateNewComment() {
      event.preventDefault()

      setComments([...comments, newCommentText]);
      setNewCommentText(''); //Programação declarativa 

    }
    function handleNewCommenteChange() {
      setNewCommentText(event.target.value);//Programação declarativa 
    }

    function deleteComment(commentToDelete) {
    //imutabilidade -> as viariáveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memorária)
    //criar um novo valor na memória é mais performatico no react do que consultar e alterar um valor que já existe
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete; 
    })
         setComments(commentsWithoutDeleteOne);
    }

    return (
        <article className={styles.post}>
            <header>
               <div className={styles.author}>
                 <Avatar src={author.avatarUrl}/>
                 <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                 </div>
               </div>

              <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
              </time>
            </header>

            <div className={styles.content}>
              {content.map(line => {
                if (line.type == 'paragraph') {
                  return <p key={line.content}>{line.content}</p>;
                } else if (line.type == 'link') {
                  return <p key={line.content}><a href="#">{line.content}</a></p>
                }
              })}
            
            </div>
         <form onSubmit={ handleCreateNewComment } className={styles.commentForm}> 
           <strong>Deixe seu feedback</strong>

           <textarea 
           name= "comment"
           placeholder='Deixe um comentário'
           value={newCommentText} //Programação declarativa 
           onChange={handleNewCommenteChange}
           />
           <footer>
             <button type='submit'>Publicar</button>
           </footer>
         </form>

     <div className={styles.commentList}>
        {comments.map(comment => {
          return (
          <Comment 
          key={comment} 
          content={comment}
          onDeleteComment={deleteComment} //comunicação entre componentes passando função como propriedade 
          />
          )
        })}
     </div>
   </article>
  )
}
