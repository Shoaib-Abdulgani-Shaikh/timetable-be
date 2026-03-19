const DayModel = require("../models/Day")

// CREATE
exports.createDay = async (req, res) => {
  try {
    const collection = req.app.locals.collection

    const newDay = DayModel(req.body)

    await collection.insertOne(newDay)

    res.json({ message: "Day added successfully", data: newDay })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// GET ALL
exports.getDays = async (req, res) => {
  try {
    const collection = req.app.locals.collection
    const { timetableId } = req.query

    const days = await collection.find({ timeTableId: timetableId }).toArray()

    res.json(days)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// GET SINGLE
exports.getDayById = async (req, res) => {
  try {
    const collection = req.app.locals.collection
    const { dayId } = req.params

    const day = await collection.findOne({ _id: dayId })

    res.json(day)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// UPDATE
exports.updateDay = async (req, res) => {
  try {
    const collection = req.app.locals.collection
    const { dayId } = req.params

    await collection.updateOne(
      { _id: dayId },
      { $set: { name: req.body.name } }
    )

    res.json({ message: "Day updated successfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// DELETE
exports.deleteDay = async (req, res) => {
  try {
    const collection = req.app.locals.collection
    const { dayId } = req.params

    await collection.deleteOne({ _id: dayId })

    res.json({ message: "Day deleted successfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}