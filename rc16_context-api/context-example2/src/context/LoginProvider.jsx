import { useState } from "react";
import { createContext } from "react";

//! 1-) Creating Login Context
export const LoginContext = createContext();

//! 2-) Providing

const LoginProvider = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  return <div>LoginProvider</div>;
};

export default LoginProvider;
