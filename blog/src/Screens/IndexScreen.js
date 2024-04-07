
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const IndexScreen = (props) => {
    const { navigation } = props
    const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext)
    return (
        <View>
            <Button title='ADD POST' onPress={() => navigation.navigate('Create')} />
            <FlatList style={{ marginVertical: 10 }} keyExtractor={data => data.title} data={state} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                    <View style={styles.row}>
                        <Text>{item.title}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather style={styles.icon} name='trash' />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            )} />
        </View>
    )
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
        margin: 2,
        borderColor: 'black',
        borderWidth: 2
    },
    icon: {
        fontSize: 18,
        padding: 10,

    }
})


IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                < Feather name="plus" size={30} />
            </TouchableOpacity>
        ),
    };
}

export default IndexScreen