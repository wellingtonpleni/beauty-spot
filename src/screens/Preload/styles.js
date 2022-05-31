import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background-color: #671BF2;
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`
export const PreloadText = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #fff;
`