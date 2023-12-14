import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers'

import { Campo, Form, Titulo, BotaoAdicionar, Card } from './styles'
import { MainContainer } from '../../styles/styles'

const ListaDeContato = () => {
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        numero: Number(numero),
        email,
      })
    )
  }

  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
      <Card>
        <Form onSubmit={cadastrarTarefa}>
          <Campo
            type="text"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            placeholder="Nome"
          />
          <Campo
            type="tel"
            value={numero}
            onChange={(evento) => setNumero(evento.target.value)}
            placeholder="Número"
          />
          <Campo
            type="email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            placeholder="Email"
          />
          <BotaoAdicionar type="submit">Adicionar contato</BotaoAdicionar>
        </Form>
      </Card>
    </MainContainer>
  )
}

export default ListaDeContato
