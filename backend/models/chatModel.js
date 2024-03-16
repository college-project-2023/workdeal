const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "userdataclient" }],
    // { type: mongoose.Schema.Types.ObjectId, ref: "userdataworker" }],

    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: [
      { type: mongoose.Schema.Types.ObjectId, ref: "userdataclient" },
    // { type: mongoose.Schema.Types.ObjectId, ref: "userdataworker" }
  ],
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
