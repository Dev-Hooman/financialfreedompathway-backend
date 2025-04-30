const Contact = require("../models/Contact");

exports.submitContact = async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  try {
    const contact = new Contact({ firstName, lastName, email, message });
    await contact.save();
    res.status(201).json({ message: "Form submitted successfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEmailList = async (req, res) => {
  try {
    const emails = await Contact.find({}, "name email -_id").sort({ createdAt: -1 });
    res.json(emails);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch email list." });
  }
};


