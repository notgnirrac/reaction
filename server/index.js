// CONNECTIONS
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const PORT = 8080

const app = express()

app.use(express.json())
app.use(cors())


// MONGOOSE
const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb://localhost:27017")

        console.log("Connected to mongodb!")

    } catch (error) {
        console.error("Error" + error)
        process.exit(1)
    }
}

connectDB()

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    }
})

const User = mongoose.model("User", userSchema)

app.get("/api/health", (req, res) => {
    res.send("api activated!")
})

// APIs



// I AM LISTENING
app.listen(PORT, () => {
    console.log("PORT IS ALIVE!")
})