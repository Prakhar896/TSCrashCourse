import { EuiProvider } from '@elastic/eui'
import './App.css'
import Home from './pages/Home'

function App() {
    return <EuiProvider colorMode='light'>
        <Home />
    </EuiProvider>
}

export default App