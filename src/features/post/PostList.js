import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButton from "./ReactionsButton";
import classes from './Posts.module.css';
import React from 'react'

const PostList = () => {

  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map(post=>{
    return (
      <article key={post.id}>
         <h3>{post.title}</h3>  
         <p>{post.content.substring(0,100)}</p>
         <p  className={classes.postCredit}>
          <PostAuthor usersId={post.userId}/>
          <TimeAgo timestamp={post.date} />
          
         </p>
         <ReactionsButton post={post}/>
      </article>
    )
  });
  return (
    <section>
    <div>Posts</div>
    {renderedPosts}
    </section>
  )
}

export default PostList