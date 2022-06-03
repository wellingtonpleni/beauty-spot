import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import {Container, Title, Scroller, HeaderArea, LoadingIcon, ListArea} from './styles'
import ProfissionalItem from '../../components/styled/ProfissionalItem'
import Api from '../../resources/api/Api'
import Fab from '../../components/styled/Fab'

export default () => {

    const navigation = useNavigation()

    const [loading, setLoading] = useState(false)
    const [list, setList] = useState([])

    const getProfissionais = async () => {
        setLoading(true)
        setList([])

        let res = await Api.getProfissionais()

        console.log(res)

        res.ok === 0 
        ? alert(`Não foi possível obter a lista de profissionais ${res.codeName}`)
        : setList(res)

        setLoading(false)
    }

    useEffect(() => {
        getProfissionais()
    }, [])

    return (
        <Container>
            <Scroller>

                <HeaderArea>
                    <Title>Encontre seu profissional favorito</Title>
                </HeaderArea>

                {loading &&
                    <LoadingIcon size="large" color="#fff" />
                }
             
                <ListArea>
                    {list.map((item, k) => (
                        <ProfissionalItem key={k} data={item} />
                    ))}
                </ListArea>

            </Scroller>

            <Fab title="Novo"
                 onPress={()=> navigation.navigate('Profissional')}
            />
        </Container>
    )
}