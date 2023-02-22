import React, { useState } from "react";
import Modal from "../../Components/Modal/Modal";
import "./HomePage.css";

function HomePage() {

  const [showModal, setShowModal] = useState(false)

  const handleClose = () => {
    setShowModal(false);
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div id="page-container">
      <button onClick={toggleModal}>modal</button>
      <h1>hello</h1>
      {showModal && (
        <Modal onClose={handleClose}/>
      )}
    </div>
  );
}

export default HomePage;
