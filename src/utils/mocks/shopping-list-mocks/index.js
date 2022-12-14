import uuid from 'react-native-uuid'

export const ShoppingCartListItems = [
    {
        id: uuid.v4(),
        name: 'Pão Frances',
        value: 2.0,
        qtd: 2,
        shoppingCart: true,
    },
    {
        id: uuid.v4(),
        name: 'Coca-cola zero 2l',
        value: 6.0,
        qtd: 1,
        shoppingCart: true,
    },
    {
        id: uuid.v4(),
        name: 'Coca-cola zero 2l',
        value: 6.0,
        qtd: 1,
        shoppingCart: false,
    },
    {
        id: uuid.v4(),
        name: 'Coca-cola 2l',
        value: 2.0,
        qtd: 1,
        shoppingCart: false,
    },
    {
        id: uuid.v4(),
        name: 'Coca-cola zero',
        value: 2.0,
        qtd: 1,
        shoppingCart: false,
    },
]
