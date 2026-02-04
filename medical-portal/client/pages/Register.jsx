import { useState } from "react"
import api from "../api"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const nav = useNavigate()

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const register = async () => {
    await api.post("/auth/register",{ name,email,password })
    alert("Registered successfully")
    nav("/")
  }

  return (
    <div>
      <h2>Register</h2>

      <input placeholder="Name" onChange={e=>setName(e.target.value)} />
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />

      <button onClick={register}>Register</button>
    </div>
  )
}
