const express = require("express");
const starategycontoller = express.Router();
const commUtility = require("../models/commonUtility");
const Strategy = require("../models/strategy");
const trade = require("../models/trade");

starategycontoller.post("/find", async (res, req) => {
  res.send(await commUtility.GetStrategyById(req.body.sid));
});

starategycontoller.post("/save", async (req, res) => {
  const { _id, name, description, symbol, trades, portfolios } = req.body;
  if (_id) {
    var _data = {
      name,
      description,
      symbol,
      modifiedOn: new Date(),
    };
    if (trades) {
      _data.trades = trades;
    }
    if (portfolios) {
      _data.portfolios = portfolios;
    }
    var _strategyObject = await Strategy.updateOne(
      { _id: _id },
      {
        $set: _data,
      }
    );
    res.send(_strategyObject);
  } else {
    const strategy = new Strategy({
      name,
      description,
      symbol,
      trades,
      portfolios,
      createdon: new Date(),
    });
    try {
      const result = await strategy.save();
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }
});

module.exports = starategycontoller;
