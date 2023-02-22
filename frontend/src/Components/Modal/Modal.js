import ReactDOM from "react-dom";
import { useEffect } from "react";
import './Modal.css'

const Modal = ({onClose}) => {

  useEffect(() => {
    document.body.classList.add('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  return ReactDOM.createPortal(
    <div>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">Modal Content</div>
    </div>,
    document.querySelector('.modal-container')
  );
};

export default Modal;
