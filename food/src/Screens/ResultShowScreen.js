import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp'

const ResultShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const [result, setResult] = useState([])

    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`)
            setResult(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null
    }
    return (
        <View>
            <Text style={styles.restaurantName}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image style={styles.image} source={{ uri: item }} />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    restaurantName: {
    },
    image: {
        width: 240,
        height: 140
    }
})

export default ResultShowScreen