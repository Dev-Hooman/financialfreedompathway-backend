const express = require("express");
const { submitContact, getEmailList } = require("../controller/contactController");
const router = express.Router();

router.post("/contact", submitContact);
router.get("/email-list", getEmailList);

module.exports = router;

