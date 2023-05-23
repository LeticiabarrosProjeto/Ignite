import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
               <div className={styles.author}>
                 <img className={styles.avatar} src="https://github.com/LeticiabarrosProjeto.png"/>
                 <div className={styles.authorInfo}>
                    <strong>Leticia Barros</strong>
                    <span>Font-end</span>
                 </div>
               </div>

               <time title="23 de Maio às 13:11h" dateTime="2023-05-11 13:11:20">Publicado há 1h </time>
            </header>

            <div className={styles.content}>

            <p>Fala Galera 👋🏻 </p>
            <p>Acabei de subor mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da</p>
            <p>Rocketseat. O nome do projeto é DoctorCare.</p>
            <p><a href=""> jane.design/doctorcare</a></p>
            <p>
                <a href="">#novoprojeto</a>{' '}
                <a href=''>#nlw</a>{' '}
                <a href=''>#rocketseat</a>
            </p>
            </div>
         <form className={styles.commentForm}> 
           <strong>Deixe seu feedback</strong>

           <textarea placeholder='Deixe um comentário'
           />
           <footer>
             <button type='submit'>Publicar</button>
           </footer>
         </form>
        </article>
    )
}
