import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Context as BlogContext } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'


const ShowScreen = ({ navigation }) => {
    const { state, getBlogById } = useContext(BlogContext)
    // useEffect(() => {
    //     getBlogById(navigation.getParam('id'))
    // }, [])
    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'))
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: '800',
        alignSelf: 'center'
    },
    container: {
        margin: 10
    }
})

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        ),
    };
}

export default ShowScreen