import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "İzzettin",
    avatar:
      "https://pbs.twimg.com/profile_images/1801011486703177728/JhM0JDlV_400x400.png",
    fullName: "izzettin380842",
  },
  accounts: [
    {
      id: 1,
      username: "İzzettin",
      avatar:
        "https://pbs.twimg.com/profile_images/1801011486703177728/JhM0JDlV_400x400.png",
      fullName: "izzettin380842",
    },
    {
      id: 2,
      username: "Fake",
      avatar:
        "https://pbs.twimg.com/profile_images/1837872011118317568/8DWoBMnQ_400x400.png",
      fullName: "Fake1859539",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this.setCurrentAccount(false);
      }
    },
    setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
      console.log(state.currentAccount);
      
    },
  },
});

export const { addAccount, setCurrentAccount, removeAccount } = auth.actions;
export default auth.reducer;
