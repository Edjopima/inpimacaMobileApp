import React from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import DelModal from './DelModal';
import EditAddModal from './EditAddModal';
import styles from './ModalStyles';

const ModalContainer = ({show, type, element, modalActions}) => {
  const {setModalElement, setShowModal, setModalType} = modalActions;

  const closeModal = () => {
    setShowModal(false);
    setModalElement({});
    setModalType('');
  }

  const deleteElement = (item) => {
    console.log(item);
    closeModal();
  };

  const renderModal = {
    edit: <EditAddModal 
      type={type}
      closeModal={closeModal}
      element={element}
    />,
    add: <EditAddModal 
      type={type}
      closeModal={closeModal}
      element={element}
    />,
    delete: <DelModal 
      item={element}
      closeModal={closeModal}
      deleteElement={deleteElement}
    />
  }

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