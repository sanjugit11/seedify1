const mongoose = require("mongoose");

const upcPoolSchema = mongoose.Schema(
  {
    pool_type: {
      type: String,
      trim: true,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    time_duration: {
      type: String,
      default : 0
    },
    price : {
      type : Number,
      required : true
    },
    up_pool_raise: {
      type: Number,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    images: {
      type: Object
    },
    min_allocation: {
      type: Number,
      required: true,
    },
    max_allocation: {
      type: Number,
      required: true,
    },
    up_pool_access: {
      type: String,
      required: true,
    },
    participants: { type: Number },
    swap_amount: { type: Number },
    closes_in: { type: String, trim: true, default : "Ended"},
    min_swap_level: { type: Number, required: true },

    symbol: { type: String, required: true },
    decimal: { type: Number, required: true },
    address: { type: String },
    total_supply: { type: Number },

    description: { type: String, required: true },
    project_goal: { type: String, required: true },
    project_team: { type: String, required: true },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
    project_submitter: [
      {
        image_url: {},
        submitter_name: {},
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("upcPool", upcPoolSchema);
