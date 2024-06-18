const express = require("express");
const bodyparser = require("body-parser");

require('./routes/dialogFlowRoutes')(app);

app.use(bodyparser.json());

const app = express();
const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
