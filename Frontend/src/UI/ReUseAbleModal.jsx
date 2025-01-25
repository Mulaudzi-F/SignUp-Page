// components/ReusableModal.jsx
import React from "react";
import Modal from "react-modal";
import { RiCloseLargeFill } from "react-icons/ri";

Modal.setAppElement("#root"); // For accessibility

const ReusableModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        content: {
          margin: "auto",
          width: "50%",
          padding: "20px",
          borderRadius: "8px",
        },
      }}
    >
      <button onClick={onClose} style={{ float: "right" }}>
        <RiCloseLargeFill />
      </button>
      {children}
    </Modal>
  );
};

export default ReusableModal;
