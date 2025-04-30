const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(cors({
    origin: "*",
}));
app.use(express.json());


connectDB();

app.use("/api", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
