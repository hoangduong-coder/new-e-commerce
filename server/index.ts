import app from "./src/app"
import config from "./src/configs/config"

const server = app.listen(config.PORT, () => {
    console.log(`Welcome to new ecommerce app with server ${config.PORT}`)
})

process.on('SIGINT', () => {
    server.close(() => console.log(`Exit express server port ${config.PORT}`))
})