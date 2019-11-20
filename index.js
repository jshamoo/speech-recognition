const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static('dist'));

app.listen(8000, () => {
  console.log('Server is listening on port 8000')
});
