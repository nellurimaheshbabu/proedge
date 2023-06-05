import React from 'react';
import { View, Text, Modal, Button } from 'react-native';

const ContactDetailsPopup = ({ contact, onClose }) => {
  return (
    <Modal visible={!!contact} animationType="slide">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{contact?.displayName}</Text>
        <Text>{contact?.phoneNumbers[0]?.number}</Text>
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default ContactDetailsPopup;
