import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://641b54ed1f5d999a4461467e.mockapi.io/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('contacts');

  return response.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await axios.post('contacts', contact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await axios.delete(`contacts/${id}`);
    return id;
  }
);
