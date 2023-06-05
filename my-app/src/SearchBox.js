import React, { useState } from 'react';
import { TextInput } from 'react-native';

const SearchBox = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
      placeholder="Search contacts..."
      onChangeText={handleSearch}
      value={searchText}
    />
  );
};

export default SearchBox;
