// import { StatusBar } from 'expo-status-bar'
import React from 'react'
// import styled from 'styled-components/native'

import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'

import { AppRoutes } from './src/routes'

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'#e4e2e3'} barStyle="dark-content" />
            <AppRoutes />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e4e2e3',
    },
})
