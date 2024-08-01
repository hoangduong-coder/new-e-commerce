import mongoose from "mongoose";
import os from "os"
import process from "process"
const SECONDS = 5000

/**
 * Typically, these check functions are helpful when we need to diagnose or regularly check-up the server's health.
 * We will check the number of connections established by mongoose and check if the server is overload.
 */
export const countConnect = () => {
    const numberOfConnection = mongoose.connections.length
    console.log(`Number of database connection: ${numberOfConnection}`)
}

export const checkOverload = () => {
    setInterval(() => {
        const numberOfConnection = mongoose.connections.length
        const numberCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss

        //Suppose maximum number of connections that each core can conduct is 5,
        //the real number relys on various factors, including CPU, memory, complexity of an application
        const maxConnections = numberCores*5;

        console.log(`Active connections: ${numberOfConnection}`)
        console.log(`Memory usage: ${memoryUsage/Math.pow(1024, 2)} MB`)

        if(numberOfConnection > maxConnections) {
            console.log("Overload server detected!")
        }
    }, SECONDS)
}