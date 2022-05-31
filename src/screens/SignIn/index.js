import React, { useState } from 'react'

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles'

import BarberLogo from '../../assets/barber.jsx'
import IconInput from '../../components/styled/IconInput'
import { StyledButton } from '../../components/styled/Others'

export default () => {

    const [emailField, setEmailField] = useState('')
    const [senhaField, setSenhaField] = useState('')

    const handleSignClick = async () => {
        if (senhaField && emailField) {
            let res = await Api.signIn(emailField, senhaField)
            if (res.access_token) {
                await AsyncStorage.setItem('token', res.access_token)
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            { name: 'Tabs' },
                        ],
                    })
                )
            } else {
                Platform.OS === 'web' ? alert(`‼️Erro: ${res.errors[0].msg}`) : Alert.alert("‼️Erro", res.errors[0].msg)
            }
        } else {
            Platform.OS === 'web' ? alert(`‼️Atenção: Preencha todos os campos`) : Alert.alert("‼️Atenção", 'Preencha todos os campos')
        }

    }

    return (
        <Container>
            <BarberLogo />

            <InputArea>

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
                    icon="login"
                    text="Login" />

            </InputArea>

            <SignMessageButton>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    )
}