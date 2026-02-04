import { useEffect,useState } from "react"
import api from "../api"

export default function Dashboard(){
  const [records,setRecords]=useState([])
  const [time,setTime]=useState(0)

  const id = localStorage.getItem("id")

  useEffect(()=>{
    api.get(`/records/${id}`).then(r=>setRecords(r.data))
  },[])

  const emergency=()=>{
    setTime(600)
    const t=setInterval(()=>{
      setTime(x=>{
        if(x<=1) clearInterval(t)
        return x-1
      })
    },1000)
  }

  return(
    <div>
      <h2>Medical Timeline</h2>

      {records.map((r,i)=>(
        <div key={i}>
          {r.date} | {r.hospital} | {r.diagnosis} 🔒
        </div>
      ))}

      <button onClick={emergency}>🚨 Emergency Access</button>
      {time>0 && <p>Active: {time}s</p>}
    </div>
  )
}
