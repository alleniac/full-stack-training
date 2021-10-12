const express = require("express");
const app = express();
const PORT = process.env.PORT || 3333;

app.get('/api/message', (req, res) => {
  res.send({
    name: 'Allen',
    message: 'Allen is a Web Developer.'
  })
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})