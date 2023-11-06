// user data schema : 데이터 설계도
// 내가 받을 데이터가 어떻게 생겼는지 설명

const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    chat: String,
    user: {
      id: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
      name: String,
    },
  },
  { timeStamp: true }
);
module.exports = mongoose.model("Chat", chatSchema);
