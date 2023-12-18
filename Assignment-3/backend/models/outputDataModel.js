const mongoose = require('mongoose');

const outputSchema = mongoose.Schema(
  {
    outputValue: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports.Output = mongoose.model('Output', outputSchema);