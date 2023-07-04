const contactsApiErrors = {
  'auth/loginPlus/rejected': {
    400: 'Invalid credentials',
  },
  'auth/register/rejected': { 400: 'This user cannot be created' },
  'contacts/fetchAll/rejected': { 400: 'Contacts not fetched' },
  'contacts/addContact/rejected': {400: 'Contact not created'},
  'contacts/deleteContact/rejected': {404: 'Contact does not exist'},
};

export function transformErrorMsg(errcode, type) {
  console.log('transformErrorMsg', errcode, type);
  if (!errcode) {
    if (type === 'auth/refresh/rejected') {
      return '';
    } else {
      return 'Unexpected error';
    }
  }
  if (errcode === 500) {
    return 'Server error. Try again later.';
  }
  if (errcode === 401) {
    return 'Something happened... Refresh page.';
  }
/*   if (errcode === 400 && type.startsWith('auth')) {
    return 'Invalid credentials';
  } */

  const msg = contactsApiErrors[type][errcode];
  console.log('transformErrorMsg', msg);
  return msg;
}
