import {useState} from "react";
import { default as ReactModal } from "react-modal";
import { CloseButton } from './modal.style';
import { BsX } from "react-icons/bs";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Modal = ({ children, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  }

  return (
    <div>
      <ReactModal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <CloseButton onClick={closeModal}><BsX /></CloseButton>
        { children }
      </ReactModal>
    </div>
  );
}

export default Modal;