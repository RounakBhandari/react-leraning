import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, setUserToLocal } from "../utils/local";

export const userSlice = createSlice({
  //creates a slice of the store.
  name: "userSlice",
  initialState: {
    users: getUserFromLocal(), //initial state of users is fetched from the local storage
  },
  reducers: {
    //reducer for adding user
    addUser: (state, action) => {
      state.users.push(action.payload); //action.payload is the object passed by user through the form which is added to the users array
      setUserToLocal(state.users); //updates the users array in the local storage
    },
    //reducer for removing user
    removeUser: (state, action) => {
      state.users.splice(action.payload, 1); //removes the selected user from the users array
      setUserToLocal(state.users); //updates the users array in the local storage
    },
    //reducer for updating user
    updateUser: (state, action) => {
      state.users = state.users.map((user) => {
        return user.id === action.payload.id ? action.payload : user; //updates the selected user if the id matches
      });
      setUserToLocal(state.users); //updates the users array in the local storage
    },
  },
});

export const { addUser, removeUser, updateUser } = userSlice.actions; //exporting the actions of the userSlice to the store so that they can be used in the components.
