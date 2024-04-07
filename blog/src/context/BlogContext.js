
import { createContext, useReducer } from "react";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blog':
            return [...state, { id: Math.floor(Math.random() * 9999999999), title: action.payload.title, content: action.payload.content }]
        case 'delete_blog':
            return state.filter(item => item.id !== action.payload)
        case 'get_blog_by_id':
            return state.find(item => item.id === action.payload)
        case 'edit_blog':
            return state.map(blog => {
                return blog.id === action.payload.id ? action.payload : blog
            })
        default:
            return state
    }
}

const addBlogPost = (dispatch) => {
    return (data) => {
        dispatch(
            {
                type: 'add_blog', payload: { title: data.title, content: data.content }
            }
        )
        if (data.callback) {
            data.callback()
        }
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => dispatch({ type: 'delete_blog', payload: id })
}

const getBlogById = (dispatch) => {
    return (id) => dispatch({ type: 'get_blog_by_id', payload: id })
}

const editBlogPost = (dispatch) => {
    return (data) => {
        dispatch({ type: 'edit_blog', payload: { title: data.title, id: data.id, content: data.content } })
        if (data.callback) {
            data.callback()
        }
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, getBlogById, editBlogPost }, [{ id: 1, title: 'blog 1', content: 'content blog 1' }])