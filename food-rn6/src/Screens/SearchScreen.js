import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import { useState } from 'react'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultByPrice = (price) => {
        return results.filter(result => result.price === price)
    }

    return (
        <>
            <SearchBar term={term} onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultByPrice('$')} title='Cost Effective' />
                <ResultsList results={filterResultByPrice('$$')} title='Bit Pricier' />
                <ResultsList results={filterResultByPrice('$$$')} title='Big Spender' />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        backgroundColor: 'red',
        color: 'white',
        padding: 10,
        marginVertical: 10
    },
    displaySearchStatusText: {
        color: '#333',
        fontSize: 15,
        fontStyle: 'italic',
        marginLeft: 15,
        marginBottom: 10
    }
})

export default SearchScreen