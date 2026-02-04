const csv = require("csvtojson")
const xml2js = require("xml2js")

exports.parseData = async (text, type) => {
  if (type === "json") return JSON.parse(text)
  if (type === "csv") return await csv().fromString(text)
  if (type === "xml") return await xml2js.parseStringPromise(text)
}
