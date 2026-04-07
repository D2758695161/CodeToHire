import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [toggleOn, setToggleOn] = useState(false)

  return (
    <>
      <div style={{ padding: '1rem', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ fontWeight: 600 }}>Mode:</span>
        <button
          onClick={() => setToggleOn(!toggleOn)}
          style={{
            padding: '0.4rem 1rem',
            borderRadius: '20px',
            border: 'none',
            background: toggleOn ? '#4ade80' : '#e5e7eb',
            color: toggleOn ? '#fff' : '#333',
            cursor: 'pointer',
            fontWeight: 600,
            transition: 'all 0.2s',
          }}
        >
          {toggleOn ? 'ON' : 'OFF'}
        </button>
        <span style={{ color: '#666', fontSize: '0.9rem' }}>
          Toggle is {toggleOn ? 'active' : 'inactive'}
        </span>
      </div>

      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
