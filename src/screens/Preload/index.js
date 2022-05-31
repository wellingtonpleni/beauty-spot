import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'

import { Container, LoadingIcon, PreloadText } from './styles'
import BarberLogo from '../../assets/barber.jsx'

export default () => {

    const navigation = useNavigation()

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token')

            if(token) {
                //Validção do token
                alert("Teste")
            } else {
                navigation.navigate('SignIn')
            }
        }
        checkToken()
    }, [])

    return(
        <Container>
            <BarberLogo/>
            <PreloadText>Beuty Spot</PreloadText>
            <LoadingIcon size="large" color="#FFF" />
        </Container>
    )
}