import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './redux/slice/countSlice'
import { postAsyncThunk } from './redux/thunk/postThunk'

import './App.css'

function App() {
  const { value, gembel } = useSelector(state => state.counter)
  const { loading, data, error } = useSelector(state => state.post)
  const [id, setId ] = useState(0)

  const dispatch = useDispatch()

  console.log('data...', data)
  console.log('error', error)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {value}
        </button>
        <p>{gembel}</p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <input type='text' id={'id'} value={id} onChange={(event) => setId(event.target.value)}/>
        <button onClick={() => dispatch(postAsyncThunk(id))} disabled={id == 0 ? true : false}>submit</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {
        loading ? 
        <p>loading...</p>
        : data ?
        <>
        <h5>{data.title}</h5>
      <p>{data.body}</p>
        </>
        : error ? 
        <p>something wrong</p>
        : null
      }
      
    </>
  )
}

export default App
