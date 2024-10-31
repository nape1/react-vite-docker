import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"

function App() {
  return (
    <>
      <div className="grid-container centered h-100"
      >
        <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <h4>Vite</h4>
        </div>
        <div>+</div>
        <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h4>React</h4>
        </div>
      </div>
    </>
  )
}

export default App
