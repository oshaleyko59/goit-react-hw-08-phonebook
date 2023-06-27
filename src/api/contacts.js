import axios from 'axios';

const getAll = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

const post = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

const deleteById= async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};

const apiContacts = { getAll, post, deleteById };

export default apiContacts;
