const { ObjectId } = require("mongodb")

function DayModel(data) {
  return {
    _id: data._id || new ObjectId().toString(),
    name: data.name,
    timeTableId: data.timeTableId
  }
}

module.exports = DayModel
