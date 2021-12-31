const mongoose = require("module");
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: String,
    age: {
      type: Number,
      min: 18,
      max: 50,
    },
  },
  {
    timestamps: true,
  }
);

module.ewports = mongoose.model("User", userSchema);
