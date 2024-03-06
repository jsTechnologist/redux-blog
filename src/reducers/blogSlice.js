import { createSlice , nanoid } from "@reduxjs/toolkit"; 
import { newDate } from "date-fns-jalali";
import {sub } from "date-fns-jalali";
const initialState = {
    blogs:[
    {
        id : nanoid(),
        date :  sub(new Date(),{days:2, minutes : 10}). toISOString(),
        title : "اولین پست ",
        content : "محتوای اولین پست  😀 ",
        user : "-iB4k3I0fZ_VfBm4Zh9Jb",
        reactions :{
            thumpsup : 0 ,
            hooray : 0 ,
            heart : 0,
            rocket : 0,
            eyes : 0
        }
    },
    {
        id : nanoid(),
        date : sub(new Date(),{minutes : 3}). toISOString(),
        title : "دومین پست ",
        content : "محتوای دومین پست سلام زندگی   😚 ",
        user : "kS1DYxlVhlRw07aBt48OG",
        reactions :{
            thumpsup : 0 ,
            hooray : 0 ,
            heart : 0,
            rocket : 0,
            eyes : 0
        }
    }
]
};
 const blogsSlice =createSlice (
    {
        name : "blogs",
        initialState : initialState ,
        reducers: {
            blogAdded: {
                reducer (state,action) {state.blogs.push(action.payload) },
                prepare (title , content , userId) {
                    return {payload : {
                        id: nanoid(),
                        date : new Date().toISOString(),
                        title,
                        content,
                        user : userId
                    }
                }
             }
          },
          blogUpdated : (state , action) =>{
              const { id,title ,content} = action.payload;
              const existingBlog =state.blogs.find((blog) =>blog.id===id);

              if(existingBlog) {
                existingBlog.title=title;
                existingBlog.content=content;
              }
          },
          
            blogDeleted : (state , action) =>{
               const { id }=action.payload ;
               state.blogs = state.blogs.filter ((blog) =>blog.id !==id) ;
            },
            reactionAdded : (state ,action) =>{
                const {blogId , reaction} = action .payload;
                const existingBlog = state .blogs.find(blog=> blog.id ===blogId);

                if(existingBlog) {
                    existingBlog.reactions[reaction]++;
                }
            }
       }
    });
    export const selectAllBlogs = (state) => state.blogs.blogs;

    export const selectBlogById = (state, blogId) =>
    state.blogs.blogs.find((blog) => blog.id === blogId);

    export const {blogAdded , blogUpdated ,blogDeleted ,reactionAdded} = blogsSlice.actions;
    export default blogsSlice.reducer ;