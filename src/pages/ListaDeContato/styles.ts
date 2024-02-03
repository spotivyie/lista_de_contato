import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Card = styled.div`
  padding: 6px;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 60px;
  font-size: 18px;
  font-weight: 200;
`

export const Campo = styled.input`
  padding: 8px;
  margin-top: 8px;
  width: 160%;
`

export const BotaoAdicionar = styled.button`
  margin-top: 8px;
  border-radius: 2px;
  font-weight: bold;
  font-size: 12px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.verde};
  color: ${variaveis.branco};
`
