import { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { postAdded } from "./postsSlice";
import React from 'react'
import classes from './Posts.module.css';

const AddPostForm = () => {
     
    const dispatch = useDispatch();
    const [title,setTitle] = useState();
    const [content,setContent] = useState();
    const [userId,setUsersId] = useState();

    const users = useSelector(selectAllUsers);

    const onTitleChanged = (e)=>setTitle(e.target.value);
    const onContentChanged = (e)=>setContent(e.target.value);
    const onAuthorChanged = (e)=>setUsersId(e.target.value);

    const onSavePostClicked = ()=>{
        if(title&&content){
            dispatch(
            postAdded(title, content,userId)
            )
        }
        setTitle("");
        setContent('');
    }
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
    
    const usersOption= users.map((user)=>{
        return(
        <option key={user.id} value={user.id}>
             {user.name}
        </option>)
    })
  return (
    <section className={classes.form}>
        <h2>Add a new post</h2>
        <form>
            <label htmlFor="postTitle">Post title:</label>
            <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
            >
             
            </input>
            <label htmlFor="postAuthor">Author:</label>
            <select
            id="postAuthor"
            value={userId}
            onChange={onAuthorChanged}
            >
                <option value=""></option>
                {usersOption}
            </select>
            <label htmlFor="postContent">Content:</label>
            <textarea
            type="text"
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
            />
            <button onClick={onSavePostClicked}
            type="button" disabled={!canSave}>Save post</button>
        </form>
    </section>
  )
}

export default AddPostForm; 