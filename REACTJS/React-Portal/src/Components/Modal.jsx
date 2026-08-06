import { createPortal } from "react-dom";
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return createPortal(
        <div style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            right: 0,
            display: "flex",
            justifyContent: "center",
            alignItems:'center',
        }}>
            <div style={{
                background: "white",
                padding: '20px'
            }}>
                {children}
                <button onClick={onClose}>close</button>
            </div>
        </div>,
        document.body
    )
}

export default Modal
