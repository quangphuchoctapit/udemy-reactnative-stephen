import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {


    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput
                style={styles.inputStyle} placeholder='Search'
                value={term} onChangeText={newTerm => onTermChange(newTerm)}
                autoCapitalize='none' autoCorrect={false}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#ddd',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingHorizontal: 10,
    },
    inputStyle: {
        flex: 1,
        alignSelf: 'stretch',
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
    }
})

export default SearchBar