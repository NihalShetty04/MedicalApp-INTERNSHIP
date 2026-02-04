import { useState } from "react"

export default function EmergencyButton() {
  const [time,setTime] = useState(0)

  const startEmergency = () => {
    setTime(600) // 10 minutes

    const t = setInterval(()=>{
      setTime(x=>{
        if(x<=1) clearInterval(t)
        return x-1
      })
    },1000)
  }

  return (
    <div>
      <button
        style={{background:"red",color:"white"}}
        onClick={startEmergency}
      >
        🚨 Emergency Access
      </button>

      {time>0 && (
        <p>Access active for {time}s</p>
      )}
    </div>
  )
}
