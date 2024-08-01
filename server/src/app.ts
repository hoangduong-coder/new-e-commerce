import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import "./dbs/init.mongodb"
import { checkOverload } from "./helpers/check.connect"

const app = express()

app.use(morgan("dev"))
app.use(helmet())

checkOverload()

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Welcome!"
    })
})

export default app