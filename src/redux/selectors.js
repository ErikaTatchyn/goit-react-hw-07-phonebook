export const selectContacts = state => state.contacts.contacts.items;
export const selectContactsLoading = state => state.contacts.contacts.isLoading;
export const selectContactsError = state => state.contacts.contacts.error;
export const selectFilter = state => state.contacts.filter;
