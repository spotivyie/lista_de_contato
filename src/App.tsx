import { Provider } from 'react-redux'

import ListaDeContato from './pages/ListaDeContato'
import store from './store'
import AdicionarContato from './pages/AdicionarContato'
import EstiloGlobal from './styles/styles'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <ListaDeContato />
      <AdicionarContato />
    </Provider>
  )
}

export default App
