import React, { useState } from 'react';
import { View } from 'react-native';
import ContactList from './ContactList';
import SearchBox from './SearchBox';
import ContactDetailsPopup from './ContactDetailsPopup';

const App = () => {
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSearch = (text) => {
    const contacts = [];
    const filtered = contacts.filter((contact) =>
      contact.displayName.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  const handleContactPress = (contact) => {
    setSelectedContact(contact);
  };

  const handleClosePopup = () => {
    setSelectedContact(null);
  };

  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <SearchBox onSearch={handleSearch} />
      <ContactList
        contacts={filteredContacts}
        onContactPress={handleContactPress}
      />
      <ContactDetailsPopup
        contact={selectedContact}
        onClose={handleClosePopup}
      />
    </View>
  );
};

export default App;

