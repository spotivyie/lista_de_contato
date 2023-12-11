import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  max-width: 240px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  padding: 16px;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 8px;
  backgroung-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
  margin-top: 8px;
`

export const BotaoAdicionar = styled.button`
  margin-top: 8px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 12px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.verde};
  color: #fff;
`
