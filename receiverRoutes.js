const express = require("express");
const router = express.Router();

const {
  createReceiverRequest,
} = require("../controllers/receiverController");

router.post("/register", createReceiverRequest);

module.exports = router;