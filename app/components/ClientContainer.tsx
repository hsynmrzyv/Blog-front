"use client";

// Redux
import { Provider } from "react-redux";
import store from "../store/store.js";

const ClientContainer = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientContainer;
