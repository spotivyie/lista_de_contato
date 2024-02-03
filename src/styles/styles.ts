import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Botao = styled.button`
  color: ${variaveis.branco};
  background-color: ${variaveis.verde};
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
