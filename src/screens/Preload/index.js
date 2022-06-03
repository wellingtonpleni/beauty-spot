import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

import Api from '../../resources/api/Api'
import { Container, LoadingIcon, PreloadText } from './styles'
import BeautyLogo from '../../assets/BeautySpotLogo'

export default () => {

    const navigation = useNavigation()

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token')

            if (token) {
                let res = await Api.checkToken(token)
                
                if (res.access_token) { //Se retornou o token, está ok
                    await AsyncStorage.setItem('token', res.access_token)
                    navigation.navigate('Tabs')
                } else {
                    navigation.navigate('SignIn') //Token é inválido
                }
            } else { //Token não existe no AsyncStorage
                navigation.navigate('SignIn')
            }
        }
        checkToken()
    }, [])

    return (
        <Container>
            <BeautyLogo />
            <PreloadText>Beauty Spot</PreloadText>
            <LoadingIcon size="large" color="#FFF" />
        </Container>
    )
}