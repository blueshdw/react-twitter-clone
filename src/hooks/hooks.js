import { useSelector } from "react-redux";

export const useAccount = () => useSelector(state => state.Auth.currentAccount)
export const useAccounts = () => useSelector(state => state.Auth.accounts)