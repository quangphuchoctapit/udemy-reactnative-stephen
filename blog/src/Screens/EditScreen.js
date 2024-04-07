import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
    const { editBlogPost, state } = useContext(BlogContext)
    return <BlogPostForm type='Edit Blog Post' actions={{
        initialValues: state.find(item => item.id === navigation.getParam('id')), onSubmit: (title, content) => {
            editBlogPost({ title, content, id: navigation.getParam('id'), callback: () => navigation.pop() })
        }
    }} />
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5
    },
    label: {
        fontSize: 18,
        marginBottom: 10
    }
})

export default EditScreen