const mongoose = require("mongoose")

module.exports = mongoose.model("Record", {
  patientId: String,
  encryptedData: String,
  createdAt: { type: Date, default: Date.now }
})
