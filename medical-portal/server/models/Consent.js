const mongoose = require("mongoose")

module.exports = mongoose.model("Consent", {
  patientId: String,
  hospital: String,
  active: Boolean,
  expiresAt: Date
})
