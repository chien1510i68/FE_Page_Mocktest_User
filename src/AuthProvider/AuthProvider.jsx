import React, { useReducer } from "react";
import AuthReducer, { initialState } from "../Reducer/AuthReducer";
import AuthContext from "../AuthContext/AuthContext";

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
