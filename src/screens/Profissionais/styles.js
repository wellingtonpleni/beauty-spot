import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background-color: #671BF2;
    flex: 1;
`
//${props => props.theme.color}
export const Title = styled.Text`
    color: #fff;
    font-size: 24px;
    font-weight: bold; 
`

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`

export const HeaderArea = styled.View`
    justify-content: space-between;
    align-items: center;
`

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`

export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`