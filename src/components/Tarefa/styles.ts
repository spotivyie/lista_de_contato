import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  margin-bottom: 32px;
  border-radius: 12px;
`

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Descricao = styled.input`
  color: ${variaveis.preto};
  font-size: 14px;
  line-height: 24px;
  display: block;
  width: 100%;
  margin-bottom: 8px;
  resize: none;
  border: 1px solid ${variaveis.preto};
  background-color: transparent;
  padding: 8px;
  width: 160%;
`
