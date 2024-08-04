"use strict";
import mongoose from "mongoose";
import { countConnect } from "../helpers/check.connect";
import config from "../configs/config"

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    if (true) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(config.MONGO_URI, {
        maxPoolSize: 50
      })
      .then((_) =>
        console.log(
          `Connect MongoDB successfully, number of connections ${countConnect()}`
        )
      )
      .catch((err) => console.log(err));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceDatabase = Database.getInstance();
export default instanceDatabase;
