import React, { useState } from 'react'
import { Alert, Platform } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation, CommonActions } from '@react-navigation/native'

import Api from '../../resources/api/Api'

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles'

import BeautyLogo from '../../assets/BeautySpotLogo'
import IconInput from '../../components/styled/IconInput'
import { StyledButton } from '../../components/styled/Others'

export default () => {

    const navigation = useNavigation()

    const [nomeField, setNomeField] = useState('')
    const [emailField, setEmailField] = useState('')
    const [senhaField, setSenhaField] = useState('')

    const handleSignClick = async () => {
        if (senhaField && emailField && nomeField) {
            let res = await Api.signUp(nomeField, emailField, senhaField)
            if (res.acknowledged) { //Retorno do backend se inseriu
                Platform.OS === 'web' ? alert(`Usuário criado! Efetue o login`) : Alert.alert("✅Aviso",`Usuário cadastrado com sucesso! \nPor favor, efetue o Login`)
                
                navigation.navigate('SignIn') //Direcionamos para o login

            } else {
                Platform.OS === 'web' ? alert(`‼️Erro: ${res.errors[0].msg}`) : Alert.alert("‼️Erro", res.errors[0].msg)
            }
        } else {
            Platform.OS === 'web' ? alert(`Preencha todos os campos`) : Alert.alert("‼️Erro", 'Preencha todos os campos')
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        })
    }

    return (
        <Container>
            <BeautyLogo />

            <InputArea>

                <IconInput
                    icon="account"
                    placeholder="Digite o seu nome"
                    value={nomeField}
                    onChangeText={t => setNomeField(t)}
                />

                <IconInput
                    icon="email"
                    placeholder="Digite o seu e-mail"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />

                <IconInput
                    icon="lock"
                    placeholder="Digite a sua senha"
                    value={senhaField}
                    onChangeText={t => setSenhaField(t)}
                    password={true}
                />

                <StyledButton
                    onPress={handleSignClick}
                    icon="archive"
                    text="Cadastrar" />

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça login</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    )
}