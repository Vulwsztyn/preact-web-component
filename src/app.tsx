import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import './app.css'
import Button from '@mui/material/Button'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='app'>
      <img src={preactLogo} alt='logo' />
      <div class='card'>
        <Button variant='contained' color='success' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </div>
  )
}
