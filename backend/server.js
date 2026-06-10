const app = require('./app.js');
const connectDB = require('./src/config/db.js');
const { PORT } = require("./src/config/env.js");

app.listen(PORT, async () => {
    await connectDB()
  console.log(`Server running on port ${PORT}`);
});