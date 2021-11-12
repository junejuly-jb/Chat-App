import { creatSlice } from '@reduxjs/toolkit'

const initialState = {
     messages: []
}

const messageSlice = creatSlice({
     name: 'messages',
     initialState,
     reducers: {
          fetchMessage: (state, action) => {
               state.messages = action.payload
          }
     }
})

export const { sendMessage } = messageSlice.actions

export default messageSlice.reducer