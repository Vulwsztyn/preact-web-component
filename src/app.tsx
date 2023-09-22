import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import './app.css'
import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiSpacer } from '@elastic/eui'
export function App() {
  const [count, setCount] = useState(0)
  const value = 'success'
  return (
    <div id='app'>
      <div class='card'>
        <EuiButton color='success' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </EuiButton>
      </div>
    </div>
  )
}
