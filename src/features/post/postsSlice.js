import { createSlice, nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";

const initialState = [
    { id: '1', title: 'Learning Redux' , content: 'I have heard good',
        date: sub(new Date(), {minutes:10}).toISOString(),
        reactions:{
            thumbsUp:0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0
        }
    },
    { id: '2', title: 'Slices...' , content: 'The more  I say the more i want',
    date: sub(new Date(), {minutes:5}).toISOString(),
    reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
    }
}

]

 const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        postAdded:{
         reducer(state,action){
            state.push(action.payload);
         },
         prepare(title,content,userId){
            return{
            payload:{
                id:nanoid(),
                title,
                content,
                date:new Date().toISOString(),
                userId,
                reactions:{
                    thumbsUp:0,
                    wow:0,
                    heart:0,
                    rocket:0,
                    coffee:0
                }
            }}
         }
        },
      reactionAdded(state,action){
        const {postId, reactions}=action.payload;
        const existingPost = state.find(post => post.id === postId);

        if(existingPost){
            existingPost.reactions[reactions]++;
        }
      }
    }
 })

 export const selectAllPosts = (state)=>state.posts;
 export const {postAdded,reactionAdded} = postsSlice.actions;
 export default postsSlice.reducer;