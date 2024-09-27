import React from "react";
import { useState } from "react";
import { axiosInstance } from "../axiosInstance";

function RegPage({setUser}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rpassword, setRpassword] = useState("")
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const onSubmitHandler = async(e) =>{
    e.preventDefault()
    if (password !== rpassword){
      setErrorMessage("Пароли не совпадают")
      setShowError(true)
    } else {
      setShowError(false)
      const response = await axiosInstance.post("/auth/reg", {email, password})
      response.status === 201 ? setUser(response.data.user):   setErrorMessage("Нету пользователя =(")
      
      
    }
   
    

  }

  return <div>
    <form onSubmit={onSubmitHandler}>
      <label>
        Email
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
      </label>
      <label>
        Pass
        <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} ></input>
      </label>
      <label>
        Repeat password
        <input type="password"   value={rpassword} onChange={(e) => setRpassword(e.target.value)}  ></input>
      </label>
      <button type="submit" >Зарегаться!!!!!</button>
    </form>
    {
      showError && <div style={{border: "1px solid red"}}>{errorMessage}</div>
    }
  </div>;
}

export default RegPage;
