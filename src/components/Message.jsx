import React, {useState} from 'react';
import {Modal, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const AlertMessage = ({message, visible, onClose}) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.alertBox}>
          <Text style={styles.alertText}>{message}</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const Message = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  const showAlert = () => {
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showAlert}>
        <Text>Show Alert</Text>
      </TouchableOpacity>

      <AlertMessage
        message="This is an alert message with a red background."
        visible={alertVisible}
        onClose={hideAlert}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  alertBox: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  alertText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default Message;
