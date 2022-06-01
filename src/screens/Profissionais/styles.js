import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background-color: #671BF2;
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    color: ${props => props.theme.color};
    font-size: 44px; 
`