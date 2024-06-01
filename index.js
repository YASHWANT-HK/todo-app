const express = require("express");

const PORT = 3000;
//initialise the app
const app = express();

app.set("view engine", "ejs");

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

