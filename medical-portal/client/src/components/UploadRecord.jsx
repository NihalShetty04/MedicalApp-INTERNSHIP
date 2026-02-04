import { useState } from "react"
import api from "../api"

export default function UploadRecord({ refresh }) {
  const [text,setText] = useState("")
  const [type,setType] = useState("json")

  const upload = async () => {
    const id = localStorage.getItem("id")

    let data

    if(type==="json") data = JSON.parse(text)
    else data = { raw:text }   // backend parser handles others

    await api.post("/records",{
      patientId:id,
      data
    })

    alert("Record Uploaded")
    setText("")
    refresh()
  }

  return (
    <div>
      <h3>Upload Record</h3>

      <select onChange={e=>setType(e.target.value)}>
        <option value="json">JSON</option>
        <option value="csv">CSV</option>
        <option value="xml">XML</option>
      </select>

      <textarea
        rows="5"
        placeholder="Paste record here"
        value={text}
        onChange={e=>setText(e.target.value)}
      />

      <button onClick={upload}>Upload</button>
    </div>
  )
}
