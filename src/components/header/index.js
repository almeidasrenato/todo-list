/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react'
import { Content, Title, SearchTextInput } from './styles'

const defaultHeader = (title) => (
    <Content>
        <Title>{title}</Title>
    </Content>
)

const searchHeader = (title, search, onChangeSearch) => (
    <Content>
        <Title>{title}</Title>
        <SearchTextInput
            onChangeText={onChangeSearch}
            value={search}
            placeholder="Procurar"
        />
    </Content>
)

export function Header({ type, title }) {
    const [search, onChangeSearch] = useState(null)

    if (!type || type === 'default') return defaultHeader(title)

    if (!type || type === 'search')
        return searchHeader(title, search, onChangeSearch)
}
