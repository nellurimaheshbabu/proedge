import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Contacts from 'react-native-contacts';

const ContactList = ({ onContactPress }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = () => {
    Contacts.getAll((err, contacts) => {
      if (err) {
        console.error(err);
      } else {
        setContacts(contacts);
      }
    });
  };

  const renderContact = ({ item }) => (
    <TouchableOpacity onPress={() => onContactPress(item)}>
      <View style={{ padding: 10 }}>
        <Text>{item.displayName}</Text>
        <Text>{item.phoneNumbers[0]?.number}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={contacts}
      renderItem={renderContact}
      keyExtractor={(item) => item.recordID}
    />
  );
};

export default ContactList;
