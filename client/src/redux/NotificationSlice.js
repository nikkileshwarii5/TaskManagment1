// // src/features/notifications/notificationSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   messages: []
// };

// const NotificationSlice = createSlice({
//   name: 'notifications',
//   initialState,
//   reducers: {
//     addNotification: (state, action) => {
//       state.messages.push({
//         id: new Date().getTime(), // simple unique ID
//         message: action.payload.message,
//         type: action.payload.type // e.g., 'success', 'error', 'info'
//       });
//     },
//     removeNotification: (state, action) => {
//       state.messages = state.messages.filter(message => message.id !== action.payload.id);
//     }
//   }
// });

// export const { addNotification, removeNotification } = NotificationSlice.actions;
// export default NotificationSlice.reducer;
