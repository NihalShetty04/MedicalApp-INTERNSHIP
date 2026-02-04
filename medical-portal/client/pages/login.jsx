import api from "../api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const nav = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const login = async () => {
    const res = await api.post("/auth/login",{email,password})

    localStorage.setItem("id",res.data.id)
    nav("/dashboard")
  }

  return (
    <>
      <input placeholder="email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </>
  )
}
