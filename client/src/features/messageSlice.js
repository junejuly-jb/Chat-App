import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     messages: [],
     user: ''
}

const messageSlice = createSlice({
     name: 'messages',
     initialState,
     reducers: {
          addUser: (state, action) => {
               state.user = action.payload
          },
          sendMessage: (state, action) => {
               state.messages = action.payload
          }
     }
})

export const { sendMessage, addUser } = messageSlice.actions

export const user = state => state.messages.user
export const messages = state => state.messages.messages

export default messageSlice.reducer