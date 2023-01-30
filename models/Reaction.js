const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        const formattedDate = new Date(date.toString());
        const options = { month: "long", day: "numeric", year: "numeric" };
        const day = formattedDate.getDate();
        const numberSuffix =
          day === 1 ? "st" : day === 2 ? "nd" : day === 3 ? "rd" : "th";
        return (
          formattedDate
            .toLocaleDateString("en-US", options)
            .replace(/\b(\d+)\b/, `$1${numberSuffix}`) +
          ", " +
          formattedDate.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })
        );
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
