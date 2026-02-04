export default function Timeline({ records }) {
  return (
    <div>
      <h3>Medical History Timeline</h3>

      {records.map((r,i)=>(
        <div key={i} style={{border:"1px solid #ccc",margin:"5px",padding:"5px"}}>
          📅 {r.date || "N/A"}  
          <br/>
          🏥 {r.hospital || "Unknown"}  
          <br/>
          🩺 {r.diagnosis || JSON.stringify(r)}  
          <br/>
          🔒 Encrypted
        </div>
      ))}
    </div>
  )
}
