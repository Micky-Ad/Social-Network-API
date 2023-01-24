const { Schema, Types } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

reactionSchema
  .virtual("getTagCss")
  // Getter
  .get(function () {
    return `color: ${this.color}`;
  });

const Reaction = model("reaction", reactionSchema);

module.exports = Tag;

module.exports = thoughtSchema;
