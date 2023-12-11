import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/index'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nome: 'Ana',
      numero: 77999098908,
      email: 'anacontato@teste.com',
    },
  ],
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter(
          (contato: { id: number }) => contato.id !== action.payload
        ),
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDaTarefa = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const ContatoJaExiste = state.itens.find(
        (contato: { nome: string }) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (ContatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimaContato = state.itens[state.itens.length - 1]

        const contatoNova = {
          ...action.payload,
          id: ultimaContato ? ultimaContato.id + 1 : 1,
        }
        state.itens.push(contatoNova)
      }
    },
  },
})

export const { remover, cadastrar, editar } = contatosSlice.actions
export default contatosSlice.reducer
