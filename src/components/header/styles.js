import styled from 'styled-components/native'
import { PixelRatio } from 'react-native'

export const Content = styled.View`
    /* background-color: red; */
    background-color: #e4e2e3;
    padding: ${PixelRatio.getPixelSizeForLayoutSize(2)}px;
    padding-bottom: ${PixelRatio.getPixelSizeForLayoutSize(4)}px;
`

export const Field = styled.View`
    flex: 1;
    margin-top: ${PixelRatio.getPixelSizeForLayoutSize(4)}px; ;
`

export const Title = styled.Text`
    font-size: ${PixelRatio.getPixelSizeForLayoutSize(6)}px;
    color: #846b72;
    font-weight: bold;
    text-align: center;
`

export const SearchTextInput = styled.TextInput`
    margin: ${PixelRatio.getPixelSizeForLayoutSize(4)}px;
    margin-bottom: ${PixelRatio.getPixelSizeForLayoutSize(0)}px;
    padding: ${PixelRatio.getPixelSizeForLayoutSize(3)}px;

    background: #ffff;
    border-radius: ${PixelRatio.getPixelSizeForLayoutSize(1.5)}px;
    color: #846b72;
`
