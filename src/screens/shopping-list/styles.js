import styled from 'styled-components/native'
import { PixelRatio } from 'react-native'

export const Content = styled.View`
    flex: 1;
    background: #ffff;
`

export const Field = styled.View`
    flex: 1;
    padding: ${PixelRatio.getPixelSizeForLayoutSize(2)}px;
    padding-left: ${PixelRatio.getPixelSizeForLayoutSize(6)}px;
    padding-right: ${PixelRatio.getPixelSizeForLayoutSize(6)}px;
`

export const TextField = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const TextInput = styled.Text`
    color: #846b72;
    font-size: ${PixelRatio.getPixelSizeForLayoutSize(5.5)}px;
    font-weight: 500;
`

export const AddItemField = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-top: ${PixelRatio.getPixelSizeForLayoutSize(4)}px;
`

export const TextInputField = styled.View`
    flex: 1;
`

export const AddItemTextInputField = styled.View`
    flex-direction: row;
    align-items: center;
`

export const AddItemTextInput = styled.TextInput`
    flex: 1;
    padding: ${PixelRatio.getPixelSizeForLayoutSize(3)}px;
    color: #846b72;
`

export const AddItemBottom = styled.TouchableOpacity``

export const AddItemLine = styled.View`
    background-color: #846b72;
    height: ${PixelRatio.getPixelSizeForLayoutSize(0.5)}px;
`

export const IconClearField = styled.View`
    height: ${PixelRatio.getPixelSizeForLayoutSize(6.6)}px;
    width: ${PixelRatio.getPixelSizeForLayoutSize(7)}px;
    margin-left: ${PixelRatio.getPixelSizeForLayoutSize(4)}px;
`
export const ListField = styled.View`
    flex: 1;
`

export const List = styled.ScrollView`
    flex: 1;
    margin-top: ${PixelRatio.getPixelSizeForLayoutSize(4)}px;
`

export const ListItemField = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${PixelRatio.getPixelSizeForLayoutSize(4)}px;
`

export const ListCard = styled.View`
    flex: 1;
    flex-direction: row;
    padding: ${PixelRatio.getPixelSizeForLayoutSize(2.6)}px;
    border-radius: ${PixelRatio.getPixelSizeForLayoutSize(1.5)}px;
    /* background-color: #b5dcfa; */
    background-color: ${(props) => props.backgroundColor};
`

export const ItemCheckBottom = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    /* background-color: red; */
`

export const IconFieldCheckBox = styled.View`
    justify-content: center;
    margin-right: ${PixelRatio.getPixelSizeForLayoutSize(4)}px;
`

export const ListItemItemNumberField = styled.View`
    margin-right: ${PixelRatio.getPixelSizeForLayoutSize(4)}px;
    justify-content: center;
    align-items: center;
`

export const ListItemItemNumber = styled.Text`
    ${(props) =>
        !props.NotShoppingCart ? 'color: #4999D1;' : 'color: #846B72;'}
`

export const ListItemItemName = styled.Text`
    flex: 1;
    margin-right: ${PixelRatio.getPixelSizeForLayoutSize(4)}px;

    ${(props) =>
        !props.NotShoppingCart
            ? 'color: #4999D1;'
            : 'color: #846B72; text-decoration-color: #846B72; text-decoration-line: line-through; text-decoration-style: solid;'}
`

export const ReorderField = styled.View`
    margin-right: ${PixelRatio.getPixelSizeForLayoutSize(0)}px;
    margin-left: ${PixelRatio.getPixelSizeForLayoutSize(2)}px;
    justify-content: center;
`

export const Divider = styled.View``

export const InTheCartField = styled.View`
    height: ${PixelRatio.getPixelSizeForLayoutSize(56)}px;
`

export const ListInTheCartField = styled.View`
    flex: 1;
`

export const ListInTheCart = styled.FlatList`
    margin-top: ${PixelRatio.getPixelSizeForLayoutSize(4)}px;
`

export const ListItemItemNameInTheCart = styled.Text``

export const FooterField = styled.View`
    height: ${PixelRatio.getPixelSizeForLayoutSize(22)}px;
`

export const FinishBottom = styled.View`
    padding: ${PixelRatio.getPixelSizeForLayoutSize(2)}px;
    align-items: flex-end;
`
