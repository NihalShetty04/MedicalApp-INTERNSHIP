exports.encrypt = (data) =>
  Buffer.from(JSON.stringify(data)).toString("base64")

exports.decrypt = (data) =>
  JSON.parse(Buffer.from(data, "base64").toString())
