
function Article({title,date="January 1, 1970",preview}){
    // const {title,date="January 1, 1970",preview} = props.post
return(
<article>
<h3>{title}</h3>
<small>{date}</small>
<p>{preview}</p>
</article>
)

}

export default Article;