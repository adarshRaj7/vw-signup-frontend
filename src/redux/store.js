import { createSlice, configureStore } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    // value: 0
    Name: "",
    Email: "",
    Username: "",
    Password: "",
    Location: "",
    isLoading: false,
    avatar: File | null ,
    avatarLink: "",
    id: "",
    Interests: {
      newCar: false,
      exchangeCar: false,
      browsing: false,
    },
  },
  reducers: {
    setName: (state, action) => {
      state.Name = action.payload;
    },
    setEmail: (state, action) => {
      state.Email = action.payload;
    },
    setUsername: (state, action) => {
      state.Username = action.payload;
    },
    setPassword: (state, action) => {
      state.Password = action.payload;
    },
    setLocation: (state, action) => {
      state.Location = action.payload;
    },
    setInterestNewCar: (state, action) => {
      state.Interests.newCar = action.payload;
    },
    setInterestExchangeCar: (state, action) => {
      state.Interests.exchangeCar = action.payload;
    },
    setInterestBrowsing: (state, action) => {
      state.Interests.browsing = action.payload;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    setUserId: (state, action) => {
      state.id = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setAvatarLink: (state, action) => {
      state.avatarLink = action.payload;
    },
  },
});

const store = configureStore({
  reducer: userDataSlice.reducer,
});
export const {
  setEmail,
  setInterestNewCar,
  setInterestExchangeCar,
  setInterestBrowsing,
  setLocation,
  setName,
  setPassword,
  setUsername,
  setAvatar,
  signUp,
  setUserId,
  setIsLoading,
  setAvatarLink
} = userDataSlice.actions;
export default store;
