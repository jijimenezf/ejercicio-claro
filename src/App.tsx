import { useState } from "react";
import Modal from "./components/Modal";
import Layout from "./components/Layout";
import { inputParams } from './utils/constants';

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center">
        <button onClick={openModal}>Mostar EPG</button>
      </div>
      <Modal
        hasCloseBtn={true}
        isOpen={modalIsOpen}
        onClose={closeModal}
        >
         {modalIsOpen && (<Layout inputParams={inputParams} />)} 
      </Modal>
    </>
  );
}

export default App;
