import app from "./src/app"
const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Welcome to new ecommerce app with server ${PORT}`)
})

process.on('SIGINT', () => {
    server.close(() => console.log(`Exit express server port ${PORT}`))
})