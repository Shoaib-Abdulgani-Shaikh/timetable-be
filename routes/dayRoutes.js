const express = require("express")
const router = express.Router()

const {
  createDay,
  getDays,
  getDayById,
  updateDay,
  deleteDay
} = require("../controllers/dayController")

router.post("/timetable-days", createDay)
router.get("/timetable-days", getDays)
router.get("/timetable-days/:dayId", getDayById)
router.put("/timetable-days/:dayId", updateDay)
router.delete("/timetable-days/:dayId", deleteDay)

module.exports = router