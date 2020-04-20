import React from 'react'
import Graficas from '../Graficas/Graficas'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'

const Example =({cerveza})=>{

  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className=" btn btn-dark" onClick={showModal}>Display Modal</button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
         <Modal.Title>{cerveza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>  
                    <Graficas obj={cerveza} ></Graficas>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Cancel</button>
          <button>Save</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example