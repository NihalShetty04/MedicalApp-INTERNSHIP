const router = require("express").Router()
const Consent = require("../models/Consent")

router.post("/grant", async (req, res) => {
  const consent = await Consent.create({
    ...req.body,
    active: true,
    expiresAt: Date.now() + 3600000
  })
  res.json(consent)
})

router.post("/revoke/:id", async (req, res) => {
  await Consent.findByIdAndUpdate(req.params.id, { active: false })
  res.send("revoked")
})

module.exports = router
