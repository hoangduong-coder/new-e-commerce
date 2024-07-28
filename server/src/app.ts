import express from "express"
import morgan from "morgan"

const app = express()
app.use(morgan("dev"))
// app.use(helmet())

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Welcome!"
    })
})

export default app