require("./trade");
require("./portfolio");
const mongoose = require("mongoose");
const schema = mongoose.Schema,
  model = mongoose.model.bind(mongoose),
  tradeSchema = mongoose.model("Trade").schema,
  portfolioSchema = mongoose.model("Portfolio").schema;


const strategySchema = schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  symbol: {
    type: String,
  },
  createdon: {
    type: Date,
    default: Date.now(),
  },
  trades: [tradeSchema],
  portfolio: {
    type:mongoose.Schema.Types.ObjectId,
    ref: "Portfolio"
  },
});

//name, description, symbol, createdon
module.exports = model("Strategy", strategySchema);
