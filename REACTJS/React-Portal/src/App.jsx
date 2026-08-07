import { useRef, useState } from "react"
import Modal from "./Components/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputElement = useRef();
  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.style.background = 'pink';
    inputElement.current.placeholder = "geda";
  }
  return (
    <div>
      <h1>My App</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} >
        <h2>Modal Content</h2>
        <p>This content is rendered outside the App component!</p>
      </Modal>
<input type="text" ref={inputElement} />
<button onClick={focusInput}>Click</button>     
    </div>

  )
}

export default App
