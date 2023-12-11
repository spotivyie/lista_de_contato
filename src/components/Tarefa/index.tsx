import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import {
  Botao,
  BotaoCancelarRemover,
  BotaoSalvar,
  MainContainer,
} from '../../styles/styles'

import { remover, editar } from '../../store/reducers'
import ContatoClass from '../../models/index'
import { Card, Descricao } from './styles'

type Props = ContatoClass

const Contato = ({
  id,
  nome: descricaoNome,
  numero: descricaoNumero,
  email: descricaoEmail,
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (descricaoNome.length > 0) {
      setNome(descricaoNome)
      setNumero(descricaoNumero)
      setEmail(descricaoEmail)
    }
  }, [descricaoNome, descricaoNumero, descricaoEmail])

  function cancelaEdicao() {
    setEstaEditando(false)
    setNome(descricaoNome)
    setNumero(descricaoNumero)
    setEmail(descricaoEmail)
  }

  return (
    <Card>
      <MainContainer>
        <Descricao
          type="text"
          disabled={!estaEditando}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
        <Descricao
          type="tel"
          disabled={!estaEditando}
          value={numero}
          onChange={(evento) => setNumero(evento.target.value)}
        />
        <Descricao
          type="email"
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <div>
          {estaEditando ? (
            <>
              <BotaoSalvar
                onClick={() => {
                  dispatch(
                    editar({
                      id,
                      nome,
                      numero,
                      email,
                    })
                  )
                  setEstaEditando(false)
                }}
              >
                Salvar
              </BotaoSalvar>
              <BotaoCancelarRemover onClick={cancelaEdicao}>
                Cancelar
              </BotaoCancelarRemover>
            </>
          ) : (
            <>
              <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
              <BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
                Remover
              </BotaoCancelarRemover>
            </>
          )}
        </div>
      </MainContainer>
    </Card>
  )
}

export default Contato
