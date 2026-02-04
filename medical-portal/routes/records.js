const router = require("express").Router()
const Record = require("../models/Record")
const { encrypt, decrypt } = require("../utils/encrypt")

router.post("/", async (req, res) => {
  const enc = encrypt(req.body.data)

  const record = await Record.create({
    patientId: req.body.patientId,
    encryptedData: enc
  })

  res.json(record)
})

router.get("/:id", async (req, res) => {
  const recs = await Record.find({ patientId: req.params.id })
  res.json(recs.map(r => decrypt(r.encryptedData)))
})

module.exports = router
