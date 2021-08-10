import React from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import DelModal from './DelModal';
import EditAddModal from './EditAddModal';
import styles from './ModalStyles';

const ModalContainer = ({show, type, element, modalActions}) => {
  const {setModalElement, setShowModal, setModalType} = modalActions;

// clear state and close modal fucniton 
  const closeModal = () => {
    setShowModal(false);
    setModalElement({});
    setModalType('');
  }

// object used to return the modal component
  const renderModal = {
    edit: <EditAddModal 
      type={type}
      closeModal={closeModal}
      element={element}
      modalActions={modalActions}
    />,
    add: <EditAddModal 
      type={type}
      closeModal={closeModal}
      element={element}
      modalActions={modalActions}
    />,
    delete: <DelModal 
      item={element}
      closeModal={closeModal}
      modalActions={modalActions}
    />
  }

// render function
  return (
    <Modal
      transparent={true}
      visible={show}
    >
      <View style={styles.modal}>
        <View style={styles.container}>
          {renderModal[type]}
        </View>
      </View>
    </Modal>
  );
}

export default ModalContainer;