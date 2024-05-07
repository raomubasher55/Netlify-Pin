import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PostContext from './postContext';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from '../../components/Spinner';


const PostState = (props) => {
    const [posts, setPosts] = useState([]);
    const [spinner, setSpinner] = useState(false)
    const navigate = useNavigate();


   const addPost = async (title, description, image, id) => {
       // Show spinner
       setSpinner(true);
   
       const newPost = {
           title: title,
           description: description,
           image: image,
           id: uuidv4(),
       }
       setPosts([...posts, newPost]);
   
       const timer = setTimeout(() => {
           setSpinner(false);
       }, 500);
   
       return () => clearTimeout(timer);
   }
   


// Update a post
const updatePost = async (id, title, description) => {
    setSpinner(true);
    const updatedPosts = posts.map(post => post.id === id ? { ...post, title, description } : post);
    setPosts(updatedPosts);
    const timer = setTimeout(() => {
        setSpinner(false);
    }, 500); 
    return () => clearTimeout(timer);
};

// Delete Post
const deletePost = async (id) => {
    setSpinner(true);
    setPosts(posts.filter(post => post.id !== id));
    const timer = setTimeout(() => {
        setSpinner(false);
    }, 500);
    return () => clearTimeout(timer);
};

    return (
        <PostContext.Provider value={{ posts, addPost, updatePost, deletePost }}>
            {spinner && <Spinner/>}
            {props.children}
            <ToastContainer />
        </PostContext.Provider>
    );
};

export default PostState;
