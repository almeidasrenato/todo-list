import React from 'react'
import { Content, Field, Bottom, BottomTitleText, FieldBottom } from './styles'

import { useNavigation } from '@react-navigation/native'

import { ROUTES_LIST } from '../../utils'

import { Header } from '../../components/header'

export function Menu() {
    const navigation = useNavigation()

    const selectScreenClick = (screen) => {
        if (screen === ROUTES_LIST.SHOPPING_LIST)
            return navigation.navigate(ROUTES_LIST.SHOPPING_LIST)
    }

    return (
        <Content>
            <Header title="Menu" />

            <Field>
                <Bottom
                    onPress={() => selectScreenClick(ROUTES_LIST.SHOPPING_LIST)}
                >
                    <BottomTitleText>Lista de Compras</BottomTitleText>
                </Bottom>
                <FieldBottom>
                    <Bottom
                        onPress={() => selectScreenClick('Cadastrar mercado')}
                    >
                        <BottomTitleText>Cadastrar mercado</BottomTitleText>
                    </Bottom>
                    <Bottom onPress={() => selectScreenClick('Cadastrar Item')}>
                        <BottomTitleText>Cadastrar Item</BottomTitleText>
                    </Bottom>
                </FieldBottom>
                <Bottom onPress={() => selectScreenClick('Controle de gastos')}>
                    <BottomTitleText>Controle de gastos</BottomTitleText>
                </Bottom>
                <Bottom
                    onPress={() => selectScreenClick('Mercados próximos...')}
                >
                    <BottomTitleText>Mercados próximos...</BottomTitleText>
                </Bottom>
            </Field>
        </Content>
    )
}
