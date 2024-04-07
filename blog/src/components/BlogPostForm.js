import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { Context as BlogContext } from '../context/BlogContext'

const BlogPostForm = ({ type, actions }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    useEffect(() => {
        if (actions.initialValues) {
            setContent(actions.initialValues.content)
            setTitle(actions.initialValues.title)
        } else {
            return
        }
    }, [])
    return (
        <View style={{ margin: 5 }}>
            <Text>{type}</Text>
            <View >
                <Text style={styles.label}>Title:</Text>
                <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)} />
                <Text style={styles.label}>Content:</Text>
                <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)} />

                <Button title={type === 'Create New Post' ? 'Create' : 'Save'} onPress={() => actions.onSubmit(title, content)} />
            </View>
        </View>
    )
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

BlogPostForm.defaultProps = {
    actions: {
        initialValues: {
            title: '',
            content: ''
        }
    }
}

export default BlogPostForm