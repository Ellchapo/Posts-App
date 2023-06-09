import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";
import classes from './Posts.module.css';

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionsButton = ({post}) => {

  const dispatch = useDispatch();

  const ReactionButtons = Object.entries(reactionEmoji).map(([name,emoji])=>{
   return(
    <button
    key={name}
    type="button"
    className={classes.reactionButton}
    onClick={() =>dispatch(reactionAdded({postId:post.id, reactions:name}) )}
    >
       {emoji}{post.reactions[name] }
    </button>
   )
  });  
  return (
    <div>{ReactionButtons}</div>
  )
}

export default ReactionsButton