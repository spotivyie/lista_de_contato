import { Titulo } from './styles'
import { MainContainer } from '../../styles/styles'
import Contato from '../../components/Tarefa'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <MainContainer>
      <Titulo>Lista de contatos</Titulo>
      <ul>
        {itens.map((c) => (
          <li key={c.id}>
            <Contato
              id={c.id}
              nome={c.nome}
              numero={c.numero}
              email={c.email}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
