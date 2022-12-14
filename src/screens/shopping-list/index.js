import React, { useState, useEffect } from 'react'

import {
    Content,
    Field,
    TextField,
    TextInputField,
    TextInput,
    AddItemField,
    AddItemTextInputField,
    AddItemTextInput,
    AddItemBottom,
    AddItemLine,
    IconClearField,
    ListField,
    List,
    ListItemField,
    ListCard,
    ItemCheckBottom,
    IconFieldCheckBox,
    ListItemItemNumberField,
    ListItemItemNumber,
    ListItemItemName,
    ReorderField,
    Divider,
    InTheCartField,
    ListInTheCartField,
    // ListInTheCart,
    FooterField,
    FinishBottom,
} from './styles'

import { Header } from '../../components/header'
import {
    addButton,
    trashCan,
    circleDivider,
    reorder,
    checkBoxUnselected,
    checkBoxSelected,
} from '../../assets/svg'

import { SvgXml } from 'react-native-svg'

import { ShoppingCartListItems } from '../../utils/mocks'

import uuid from 'react-native-uuid'

// import DropDownPicker from 'react-native-dropdown-picker'

// import AsyncStorage from '@react-native-async-storage/async-storage'

// import { useNavigation } from '@react-navigation/native'

export function ShoppingList() {
    const [listData, setListData] = useState([])
    const [addItemText, onChangeAddItemText] = useState(null)

    useEffect(() => {
        setListData(ShoppingCartListItems)
    }, [])

    const selectAndUnselectItem = (itemSelected) => {
        const newItemSelected = listData.map((item) => ({
            ...item,
            shoppingCart:
                itemSelected.id === item.id
                    ? !item.shoppingCart
                    : item.shoppingCart,
        }))

        setListData(newItemSelected)
    }

    const renderListNotShoppingCart = (items) => {
        let newList = items.filter((item) => !item.shoppingCart)
        return newList
    }

    const renderListShoppingCart = (items) => {
        let newList = items.filter((item) => item.shoppingCart)
        return newList
    }

    const addItem = () => {
        let addItem = {
            id: uuid.v4(),
            name: addItemText,
            value: 0.0,
            qtd: 1,
            shoppingCart: false,
        }

        setListData([addItem, ...listData])
    }

    const renderList = ({ item }) => (
        <ListItemField key={item.id}>
            <ListCard backgroundColor="#b5dcfa">
                <ItemCheckBottom onPress={() => selectAndUnselectItem(item)}>
                    <IconFieldCheckBox>
                        <SvgXml
                            xml={checkBoxUnselected()}
                            width="16px"
                            height="16px"
                        />
                    </IconFieldCheckBox>

                    <ListItemItemNumberField>
                        <ListItemItemNumber>{item.qtd}</ListItemItemNumber>
                    </ListItemItemNumberField>

                    <ListItemItemName>{item.name}</ListItemItemName>
                </ItemCheckBottom>

                <ReorderField>
                    <SvgXml xml={reorder()} width="16px" height="16px" />
                </ReorderField>
            </ListCard>
            <IconClearField>
                <SvgXml xml={trashCan()} width="100%" height="100%" />
            </IconClearField>
        </ListItemField>
    )

    const renderListInTheCart = ({ item }) => (
        <ListItemField key={item.id}>
            <ListCard backgroundColor="#E4E2E3">
                <ItemCheckBottom onPress={() => selectAndUnselectItem(item)}>
                    <IconFieldCheckBox>
                        <SvgXml
                            xml={checkBoxSelected()}
                            width="16px"
                            height="16px"
                        />
                    </IconFieldCheckBox>

                    <ListItemItemNumberField>
                        <ListItemItemNumber NotShoppingCart={true}>
                            {item.qtd}
                        </ListItemItemNumber>
                    </ListItemItemNumberField>

                    <ListItemItemName NotShoppingCart={true}>
                        {item.name}
                    </ListItemItemName>
                </ItemCheckBottom>
            </ListCard>

            <IconClearField>
                <SvgXml xml={trashCan()} width="100%" height="100%" />
            </IconClearField>
        </ListItemField>
    )

    return (
        <Content>
            <Header type="search" title="Minha Lista de Compras" />
            <Field>
                <TextField>
                    <TextInput>Lista De Compras</TextInput>
                    {/* <TextInput>{`R$ ${listData.reduce(function (
                        accumulator,
                        object
                    ) {
                        if (!object.shoppingCart)
                            return accumulator + object.value

                        return accumulator
                    },
                    0)}`}</TextInput> */}
                </TextField>

                <AddItemField>
                    <TextInputField>
                        <AddItemTextInputField>
                            <AddItemTextInput
                                onChangeText={onChangeAddItemText}
                                value={addItemText}
                                placeholder="Adicionar item"
                            />
                            <AddItemBottom onPress={() => addItem()}>
                                <SvgXml
                                    xml={addButton()}
                                    width="20"
                                    height="20"
                                />
                            </AddItemBottom>
                        </AddItemTextInputField>
                        <AddItemLine />
                    </TextInputField>

                    <IconClearField></IconClearField>
                </AddItemField>

                <ListField>
                    {/* <List
                        data={renderListNotShoppingCart(listData)}
                        renderItem={renderList}
                        keyExtractor={(item) => item.id}
                    /> */}

                    <List>
                        {renderListNotShoppingCart(listData).map((item) =>
                            renderList({ item })
                        )}
                    </List>
                </ListField>

                <Divider>
                    <SvgXml xml={circleDivider()} width="100%" height="20" />
                </Divider>

                <InTheCartField>
                    <TextField>
                        <TextInput>No Carrinho</TextInput>
                        <TextInput>{`R$ ${listData.reduce(function (
                            accumulator,
                            object
                        ) {
                            if (object.shoppingCart)
                                return accumulator + object.value

                            return accumulator
                        },
                        0)}`}</TextInput>
                    </TextField>

                    <ListInTheCartField>
                        {/* <ListInTheCart
                            data={renderListShoppingCart(listData)}
                            renderItem={renderListInTheCart}
                            keyExtractor={(item) => item.id}
                        /> */}

                        <List>
                            {renderListShoppingCart(listData).map((item) =>
                                renderListInTheCart({ item })
                            )}
                        </List>
                    </ListInTheCartField>
                </InTheCartField>

                <Divider>
                    <SvgXml xml={circleDivider()} width="100%" height="20" />
                </Divider>

                <FooterField>
                    <TextInput>
                        {`${
                            listData.filter((item) => item.shoppingCart).length
                        }/${listData.length}`}
                    </TextInput>

                    <FinishBottom>
                        <TextInput>Finalizar Compra</TextInput>
                    </FinishBottom>
                </FooterField>
            </Field>
        </Content>
    )
}
