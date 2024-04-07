import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultsDetails from './ResultsDetails'
import { withNavigation } from 'react-navigation'

const ResultsList = ({ title, results, navigation }) => {
    if (!results.length) return null
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(results) => results.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate(
                            'ResultShow',
                            { id: item.id }
                        )
                    }}>
                        <ResultsDetails result={item} />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
})

export default withNavigation(ResultsList)