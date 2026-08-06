import { useState } from "react"
import Modal from "./Components/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h1>My App</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} >
        <h2>Modal Content</h2>
        <p>This content is rendered outside the App component!</p>
      </Modal>
    </div>
  )
}

export default App
