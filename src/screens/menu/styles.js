import styled from 'styled-components/native'
import { PixelRatio } from 'react-native'

export const Content = styled.View`
    flex: 1;
`

export const Field = styled.View`
    flex: 1;
    margin-top: ${PixelRatio.getPixelSizeForLayoutSize(4)}px; ;
`

export const TitleScreen = styled.Text``

export const Bottom = styled.TouchableOpacity`
    background-color: #846b72;
    height: ${PixelRatio.getPixelSizeForLayoutSize(30)}px;
    padding: ${PixelRatio.getPixelSizeForLayoutSize(2)}px;
    margin: ${PixelRatio.getPixelSizeForLayoutSize(2)}px;
    margin-left: ${PixelRatio.getPixelSizeForLayoutSize(4)}px;
    margin-right: ${PixelRatio.getPixelSizeForLayoutSize(4)}px;
    border-radius: ${PixelRatio.getPixelSizeForLayoutSize(1.5)}px;
`

export const BottomTitleText = styled.Text`
    font-size: ${PixelRatio.getPixelSizeForLayoutSize(5)}px;
    color: #ffff;
`

export const FieldBottom = styled.View`
    flex-direction: row;
`
