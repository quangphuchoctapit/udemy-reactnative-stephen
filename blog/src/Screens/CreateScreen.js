import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import React, { useState, useContext } from 'react'
import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(BlogContext)
    return <BlogPostForm type='Create New Post' actions={{
        onSubmit: (title, content) => {
            addBlogPost({ title, content, callback: () => navigation.navigate('Index') })
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

export default CreateScreen