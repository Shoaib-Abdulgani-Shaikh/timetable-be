const express = require("express")
const cors = require("cors")
const { MongoClient } = require("mongodb")

// 🔹 ADD THIS (routes import)
const dayRoutes = require("./routes/dayRoutes")

const app = express()

app.use(cors())
app.use(express.json())

// MongoDB connection string
const uri = "mongodb+srv://5634719_db_user:database@timetablecluster.ezdpiy2.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri)

async function connectDB() {
  try {
    await client.connect()
    console.log("MongoDB Atlas Connected")

    // 🔹 ADD THIS (VERY IMPORTANT)
    const db = client.db("timetableDB")
    const collection = db.collection("timetable_days")

    // make it accessible everywhere
    app.locals.collection = collection

  } catch (error) {
    console.log(error)
  }
}

connectDB()

// 🔹 ADD THIS (use routes)
app.use("/api", dayRoutes)

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Timetable Backend 🚀"
  })
})

const PORT = 5002

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})