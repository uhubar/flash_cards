import React from "react";
import { useState } from "react";
import { axiosInstance } from "../axiosInstance";
import {useNavigate} from "react-router-dom"

function LoginPage({setUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const navigation = useNavigate()

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await axiosInstance.post("/auth/log", { email, password });
    if (response.status === 200) {
      console.log(response);
      setUser(response.data.user);
      navigation("/categories")
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label>
          Pass
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>

        <button type="submit">Авторизироваться</button>
      </form>
    </div>
  );
}

export default LoginPage;
