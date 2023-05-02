const mongoose = require("mongoose");

const userDetailSchema = new mongoose.Schema(
    {
    name: String,
    email: String,
    phone: String,
    password: String
    },
    { collection: "UserInfo" }
);

mongoose.model("UserInfo", userDetailSchema);