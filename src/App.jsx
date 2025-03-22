import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo}  alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo}  alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='m-[40px] pt-12'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='text-green-500'>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='text-red-500 bg-slate-400'>Hello World</p>
      <p>
        Click on the Vite and React logos to learn more hello world
      </p>
    </>
  )
}

export default App