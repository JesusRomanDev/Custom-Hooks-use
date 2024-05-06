import './App.css'
import useFunction from './hooks/useFunction';
import useHTML from './hooks/useHTML'

function App() {
  const [RetornoHTML] = useHTML();
  const {numero, retornoFuncion, retornoFuncion2} = useFunction();
  return (
    <>
      <div>
        <RetornoHTML />
      </div>
      <div className="card">
        <p>
          <div>{numero}</div>
          <button onClick={retornoFuncion}>Incremento</button>
          <p>{retornoFuncion2()}</p>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
