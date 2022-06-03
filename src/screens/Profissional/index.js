import React, { useState } from 'react'
import { TextInput, StyleSheet, Platform, ActivityIndicator, Button, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Container, Title } from './styles'

import themes from '../../themes'
import Api from '../../resources/api/Api'

export default ({ route }) => {
    const navigation = useNavigation()
    //Veio algum dado através da rota de navegação?
    const registroInicial = route.params ? route.params.profissinal :
        {
            nome: '', email: '', celular: '', servico: ''
        }

    const [profissional, setProfissional] = useState(registroInicial)

    const salvarProfissional = async (dadosProfissional) => {
        let salvar = dadosProfissional.hasOwnProperty('_id') ? await Api.alteraProfissional(dadosProfissional) : await Api.incluiProfissional(dadosProfissional)
        if (salvar.hasOwnProperty('errors')) {
            Platform.OS === 'web' ? alert(`‼️Erro: ${salvar.errors[0].msg}`) : Alert.alert("‼️Erro", salvar.errors[0].msg)
        } else if (salvar.hasOwnProperty('acknowledged')) {
            Platform.OS === 'web' ? alert(`✅Tudo OK: Registro salvo com sucesso `) : Alert.alert("✅Tudo OK", 'Registro salvo com sucesso')
            navigation.navigate('Profissionais')
        }
    }

    return (
        <Container>
            <View>
                <Title>Cadastro de Profissionais</Title>
                <Title style={styles.label}>Nome:</Title>
                <TextInput
                    name='nome'
                    style={styles.input}
                    onChangeText={(text) => setProfissional({ ...profissional, nome: text })}
                    value={profissional.nome}
                    keyboardType='default'
                    placeholder='nome'
                    maxLength={100}
                />

                <Title style={styles.label}>Email:</Title>
                <TextInput
                    name='email'
                    style={styles.input}
                    onChangeText={(text) => setProfissional({ ...profissional, email: text })}
                    value={profissional.email}
                    keyboardType='default'
                    placeholder='email'
                    maxLength={50}
                />

                <Title style={styles.label}>Serviço:</Title>
                <TextInput
                    name="Serviço prestado"
                    style={styles.input}
                    onChangeText={(text) => setProfissional({ ...profissional, servico: text })}
                    value={profissional.servico}
                    keyboardType="default"
                    placeholder='Ex: Cabeleireira'
                    maxLength={30}
                />

                <Title style={styles.label}>Celular:</Title>
                <TextInput
                    name="celular"
                    style={styles.input}
                    onChangeText={(text) => setProfissional({ ...profissional, celular: text })}
                    value={profissional.celular}
                    keyboardType="default"
                    placeholder='Celular'
                    autoComplete='tel'
                    maxLength={20}
                />

                <Button
                    onPress={() => salvarProfissional(profissional)}
                    title='Salvar o Registro'
                    color={themes.padrao.colors.neutral.neutral_60}
                    accessibilityLabel='Salvar os dados'
                />
                <Button
                    onPress={() => navigation.navigate('Profissionais')}
                    title='Cancelar'
                    color={themes.padrao.colors.brand.laranja}
                    accessibilityLabel='Cancelar'

                />

            </View>
        </Container>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40, margin: 8, borderWidth: 1,
        borderColor: themes.padrao.colors.brand.laranja, padding: 8,
        backgroundColor: themes.padrao.colors.brand.branca,
    },
    label: { marginLeft: 8, marginTop: 8, marginBottom: 4, fontSize: 14 }
})