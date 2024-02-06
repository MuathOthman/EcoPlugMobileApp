const express = require('express');
const app = express();
const sijainnitRoutes = require('./routes/sijainnitRoutes');
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.use('/sijainnit', sijainnitRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


//////

