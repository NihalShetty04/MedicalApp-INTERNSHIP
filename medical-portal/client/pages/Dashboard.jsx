import { useEffect,useState } from "react"
import api from "../api"

import UploadRecord from "../components/UploadRecord"
import Timeline from "../components/Timeline"
import EmergencyButton from "../components/EmergencyButton"

export default function Dashboard(){
  const [records,setRecords]=useState([])
  const id = localStorage.getItem("id")

  const load = () =>
    api.get(`/records/${id}`).then(r=>setRecords(r.data))

  useEffect(()=>{ load() },[])

  return(
    <div>
      <h2>Patient Dashboard</h2>

      <UploadRecord refresh={load} />

      <Timeline records={records} />

      <EmergencyButton />
    </div>
  )
}
