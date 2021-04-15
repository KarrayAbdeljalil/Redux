import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/actions";

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

Modal.setAppElement("#root");
const EditForm = ({ oldTask}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [old, setOld] = useState(oldTask.task);
    const dispatch = useDispatch();
    function openModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
      }
    const handleChange =(e) => setOld(e.target.value);
    const handleSubmit =(e) => {
        e.preventDefault();
        const editedTask = { ...oldTask, task:old};
        dispatch(editTask(editedTask));
        closeModal();
    };
    return (
        <div>
            <button onclick={openModal}>Edit</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <form onSubmit={handleSubmit}>
                    <input 
                    className="inp"
                    type="text"
                    value={old}
                    onChange={handleChange}
                    />
                    <button>Confirm</button>
                    <button id="del" onClick={closeModal}>Cancel</button>
                </form>
            </Modal>
        </div>
    );
};
export default EditForm;