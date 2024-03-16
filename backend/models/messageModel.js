const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    sender: [{ type: mongoose.Schema.Types.ObjectId, ref: "userdataclient" },
    // { type: mongoose.Schema.Types.ObjectId, ref: "userdataworker" }
  ],
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "userdataclient" },
    // { type: mongoose.Schema.Types.ObjectId, ref: "userdataworker" }
  ],
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
