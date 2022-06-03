import React from 'react'
import styled from 'styled-components/native'

const Area = styled.TouchableOpacity`
    background-color: #FFF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`
const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
`
const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`
const UserName = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: #671BF2;
`
const Text = styled.Text`
    font-size: 14px;
    color: #E82733;
`
const ProfileButton = styled.View`
    margin-top: 10px;
    width: 85px;
    height: 26px;
    border: 1px solid #671BF2;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`
const ProfileButtonText = styled.Text`
    font-size: 14px;
    color: #671BF2;
`

export default ({ data }) => {
    return (
        <Area>
            <Avatar source={{uri: `https://ui-avatars.com/api?background=FFE5AA&color=3B5998&name=${data.nome}`}} />
            <InfoArea>
                <UserName>{ data.nome }</UserName>
                <Text>{ data.servico }</Text>
                <Text>{ data.celular }</Text>

                <ProfileButton>
                    <ProfileButtonText>Ver Perfil</ProfileButtonText>
                </ProfileButton>
            </InfoArea>
        </Area>
    )
}