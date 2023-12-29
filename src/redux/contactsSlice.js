import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from 'api/api';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(addContact.pending, state => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(deleteContact.pending, state => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const newObj = state.items.filter(
          contact => contact.id !== action.payload
        );
        state.items = newObj;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { addContact, fetchContacts, deleteContact } from 'api/api';

// const handlePending = state => {
//   state.error = false;
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = true;
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },

//   extraReducers: {
//     [fetchContacts.pending]: handlePending,
//     [addContact.pending]: handlePending,
//     [deleteContact.pending]: handlePending,
//     [fetchContacts.rejected]: handleRejected,
//     [deleteContact.rejected]: handleRejected,
//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.items = action.payload;
//     },
//     [addContact.fulfilled](state, action) {
//       state.isLoading = false;
//     },

//     [deleteContact.fulfilled](state, action) {
//       state.isLoading = false;
//       const newObj = state.items.filter(
//         contact => contact.id !== action.payload
//       );
//       state.items = newObj;
//     },
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
