import { View, Image, StyleSheet, Text } from 'react-native'
import React from 'react'

const ResultsDetails = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { marginLeft: 15 },
    image: {
        width: 250,
        height: 150,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default ResultsDetails