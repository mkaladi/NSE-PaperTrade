const mongoose = require("mongoose");
const schema = mongoose.Schema,
  model = mongoose.model.bind(mongoose);
const BUYORSELL = {
  BUY: 0,
  SELL: 1,
};
const CALLPUTFUT = {
  CALL: 0,
  PUT: 1,
  FUT: 2,
};

const tradeSchema = schema({
  symbol: {
    type: String
  },
  lotsize :{
    type : Number
  },
  expiry: {
    type: Date
  },
  buyorsell: {
    type: BUYORSELL,
  },
  tradetype: {
    type: CALLPUTFUT,
  },
  quantity: {
    type: Number,
  },
  selectedstrike: {
    type: Number,
  },
  price: {
    type: Number,
  },
  note : {
    type: String
  },

  strikepricemin: {
    type : Number,
    default: 0
  },
  strikepricemax:{
    type : Number,
    default: 0
  },
  strikepricestep:{
    type : Number,
    default: 0
  },


});

module.exports = model("Trade", tradeSchema);
