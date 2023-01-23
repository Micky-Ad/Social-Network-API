const { Schema, model } = require("mongoose");
const thoughtsSchema = require("./Thought");

// Schema to create Student model
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  thoughts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

// To test later
friendCount
  .virtual("getFriendCount")
  // Getter
  .get(function () {
    return `Friends: ${this.friends.length}`;
  });

const Friends = model("friends", friendCount);

const Student = model("user", userSchema);

module.exports = Student;
module.exports = Friends;
